/**
 * CFG TWPO - Authentication State Management
 * ============================================
 * Manages user authentication state, permissions, and route protection
 */

import type { AuthState, User, ProtectedRouteConfig } from './types';

/**
 * Storage keys for auth data
 */
const STORAGE_KEYS = {
  USER: 'cfg_auth_user',
  TOKEN: 'cfg_auth_token',
  PERMISSIONS: 'cfg_auth_permissions',
};

/**
 * Default protected routes configuration
 * These routes require authentication and/or specific roles
 */
export const protectedRoutes: ProtectedRouteConfig[] = [
  {
    path: '/stadistics',
    redirectTo: '/login',
    allowedRoles: ['admin'],
  },
  {
    path: '/checkout',
    redirectTo: '/login',
    allowedRoles: ['user', 'admin'],
  },
  {
    path: '/account',
    redirectTo: '/login',
    allowedRoles: ['user', 'admin'],
  },
];

/**
 * Get stored user from localStorage
 */
export function getStoredUser(): User | null {
  if (typeof window === 'undefined') return null;
  
  const userJson = localStorage.getItem(STORAGE_KEYS.USER);
  if (!userJson) return null;
  
  try {
    return JSON.parse(userJson);
  } catch {
    return null;
  }
}

/**
 * Get stored token
 */
export function getStoredToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEYS.TOKEN);
}

/**
 * Get stored permissions
 */
export function getStoredPermissions(): string[] {
  if (typeof window === 'undefined') return ['public'];
  
  const perms = localStorage.getItem(STORAGE_KEYS.PERMISSIONS);
  if (!perms) return ['public'];
  
  try {
    return JSON.parse(perms);
  } catch {
    return ['public'];
  }
}

/**
 * Initialize auth state from storage
 */
export function getInitialAuthState(): AuthState {
  const user = getStoredUser();
  const token = getStoredToken();
  const permissions = getStoredPermissions();
  
  return {
    isAuthenticated: !!token && !!user,
    user,
    permissions,
    loading: false,
  };
}

/**
 * Login function - sets auth data in storage
 */
export function login(user: User, token: string): void {
  if (typeof window === 'undefined') return;
  
  // Determine permissions based on role
  const permissions = getPermissionsForRole(user.role);
  
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  localStorage.setItem(STORAGE_KEYS.TOKEN, token);
  localStorage.setItem(STORAGE_KEYS.PERMISSIONS, JSON.stringify(permissions));
  
  // Dispatch auth change event
  window.dispatchEvent(new CustomEvent('auth-change', { 
    detail: { user, isAuthenticated: true } 
  }));
}

/**
 * Logout function - clears auth data
 */
export function logout(): void {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem(STORAGE_KEYS.USER);
  localStorage.removeItem(STORAGE_KEYS.TOKEN);
  localStorage.removeItem(STORAGE_KEYS.PERMISSIONS);
  
  // Dispatch auth change event
  window.dispatchEvent(new CustomEvent('auth-change', { 
    detail: { user: null, isAuthenticated: false } 
  }));
}

/**
 * Get permissions based on user role
 */
export function getPermissionsForRole(role: string): string[] {
  switch (role) {
    case 'admin':
      return ['public', 'user', 'admin'];
    case 'user':
      return ['public', 'user'];
    default:
      return ['public'];
  }
}

/**
 * Check if user has specific permission
 */
export function hasPermission(permission: string): boolean {
  const permissions = getStoredPermissions();
  return permissions.includes(permission);
}

/**
 * Check if current route is protected and user has access
 */
export function checkRouteAccess(pathname: string): { allowed: boolean; redirectTo?: string } {
  // Check if route is protected
  const protectedRoute = protectedRoutes.find(route => {
    // Handle exact match or wildcard
    if (route.path === pathname) return true;
    if (route.path.endsWith('/*')) {
      const basePath = route.path.slice(0, -2);
      return pathname.startsWith(basePath);
    }
    return false;
  });
  
  if (!protectedRoute) {
    return { allowed: true }; // Not a protected route
  }
  
  // Check authentication
  const isAuthenticated = !!getStoredToken();
  
  if (!isAuthenticated) {
    return { allowed: false, redirectTo: protectedRoute.redirectTo };
  }
  
  // Check role permissions
  const user = getStoredUser();
  if (!user) {
    return { allowed: false, redirectTo: protectedRoute.redirectTo };
  }
  
  const hasAccess = protectedRoute.allowedRoles.includes(user.role);
  
  if (!hasAccess) {
    return { allowed: false, redirectTo: '/' };
  }
  
  return { allowed: true };
}

/**
 * Redirect to URL (handles both client and SSR)
 */
export function redirectTo(url: string): void {
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }
}

/**
 * Get current pathname
 */
export function getCurrentPath(): string {
  if (typeof window !== 'undefined') {
    return window.location.pathname;
  }
  return '/';
}

/**
 * Create login URL with return URL
 */
export function createLoginUrl(returnUrl?: string): string {
  const currentPath = returnUrl || getCurrentPath();
  return `/login?redirect=${encodeURIComponent(currentPath)}`;
}

/**
 * Create logout URL
 */
export function createLogoutUrl(): string {
  return '/logout';
}

// Client-side auth state management
let authState: AuthState = getInitialAuthState();

/**
 * Get current auth state
 */
export function getAuthState(): AuthState {
  return authState;
}

/**
 * Update auth state
 */
export function updateAuthState(newState: Partial<AuthState>): AuthState {
  authState = { ...authState, ...newState };
  return authState;
}

/**
 * Subscribe to auth changes
 */
export function onAuthChange(callback: (state: AuthState) => void): () => void {
  if (typeof window === 'undefined') return () => {};
  
  const handler = (event: Event) => {
    const customEvent = event as CustomEvent;
    const newState = getInitialAuthState();
    callback(newState);
  };
  
  window.addEventListener('auth-change', handler);
  
  return () => {
    window.removeEventListener('auth-change', handler);
  };
}
