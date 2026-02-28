/**
 * CFG TWPO - Type Definitions
 * ===========================
 * Types for routing, authentication, and navigation
 */

/**
 * Route parameter definition
 */
export interface RouteParam {
  name: string;
  type: 'string' | 'number' | 'boolean';
  required: boolean;
  description: string;
}

/**
 * Meta information for SEO
 */
export interface RouteMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

/**
 * Complete route configuration
 */
export interface RouteConfig {
  path: string;
  name: string;
  description: string;
  component: string;
  permissions: string[];
  params: RouteParam[];
  isProtected: boolean;
  meta: RouteMeta;
}

/**
 * Permission definition
 */
export interface RoutePermission {
  name: string;
  description: string;
}

/**
 * User authentication state
 */
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  permissions: string[];
  loading: boolean;
}

/**
 * User model
 */
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'guest' | 'user' | 'admin';
  avatar?: string;
  createdAt: string;
}

/**
 * Navigation link
 */
export interface NavLink {
  href: string;
  label: string;
  page: string;
  icon?: string;
  requiresAuth?: boolean;
}

/**
 * Breadcrumb item
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

/**
 * Route transition options
 */
export interface TransitionOptions {
  duration: number;
  easing: string;
  delay?: number;
}

/**
 * Prefetch configuration
 */
export interface PrefetchConfig {
  enabled: boolean;
  timeout: number;
  cacheSize: number;
}

/**
 * Navigation event
 */
export interface NavigationEvent {
  from: string;
  to: string;
  type: 'click' | 'push' | 'replace';
  timestamp: number;
}

/**
 * Protected route config
 */
export interface ProtectedRouteConfig {
  path: string;
  redirectTo: string;
  allowedRoles: string[];
}
