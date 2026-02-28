/**
 * CFG TWPO - Configuration and Documentation of Routes
 * =========================================================
 * This file documents all application routes, their purposes,
 * required parameters, and access permissions.
 * 
 * ROUTE DOCUMENTATION
 * ====================
 * 
 * ## Public Routes (No Authentication Required)
 * 
 * 1. / (Home)
 *    - Purpose: Landing page with hero, categories, featured products
 *    - Parameters: None
 *    - Permissions: Public
 * 
 * 2. /catalog
 *    - Purpose: Product catalog with filtering and search
 *    - Parameters:
 *      - category: Filter by category (motorcycles, cars, accessories)
 *      - filter: Special filters (new, sale, featured)
 *      - search: Product search query
 *      - page: Pagination number
 *    - Permissions: Public
 * 
 * 3. /product/[id]
 *    - Purpose: Individual product details page
 *    - Parameters:
 *      - id: Product unique identifier (required)
 *    - Permissions: Public
 *    - Example: /product/turbo-t4
 * 
 * 4. /productdetails
 *    - Purpose: Static product details (legacy page)
 *    - Parameters: None
 *    - Permissions: Public
 * 
 * 5. /login
 *    - Purpose: User authentication page
 *    - Parameters:
 *      - redirect: URL to redirect after login
 *    - Permissions: Public (redirects to dashboard if already logged in)
 * 
 * 6. /register
 *    - Purpose: New user registration
 *    - Parameters: None
 *    - Permissions: Public
 * 
 * 7. /404
 *    - Purpose: Custom error page for not found routes
 *    - Parameters: None
 *    - Permissions: Public
 * 
 * ## Protected Routes (Authentication Required)
 * 
 * 8. /stadistics (Admin Only)
 *    - Purpose: Admin dashboard with business metrics
 *    - Parameters: None
 *    - Permissions: Admin role required
 *    - Redirect: /login if not authenticated
 * 
 * 9. /account (User or Admin)
 *    - Purpose: User account management
 *    - Parameters: None
 *    - Permissions: User or Admin role
 *    - Redirect: /login if not authenticated
 * 
 * 10. /checkout (User or Admin)
 *     - Purpose: Purchase checkout process
 *     - Parameters: None
 *     - Permissions: User or Admin role
 *     - Redirect: /login if not authenticated
 * 
 * 11. /cart (User or Admin)
 *     - Purpose: Shopping cart
 *     - Parameters: None
 *     - Permissions: User or Admin role
 * 
 * ## Route Naming Conventions
 * - Use kebab-case for paths
 * - Use camelCase for route names
 * - Use descriptive, SEO-friendly URLs
 * 
 * ## Link Types
 * - Absolute: /catalog, /product/123
 * - Relative: ./section (within same page)
 * - Query params: /catalog?category=cars&filter=new
 * 
 * ## Navigation Best Practices
 * - Add data-prefetch to links that should prefetch on hover
 * - Use rel="noopener" for external links
 * - Include aria-label for icon-only links
 */

import type { RouteConfig, RoutePermission } from './types';

/**
 * Application Routes Configuration
 */
export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    description: 'Página principal - Muestra productos destacados, categorías y navegación principal',
    component: 'src/pages/index.astro',
    permissions: ['public'],
    params: [],
    isProtected: false,
    meta: {
      title: 'CFG TWPO - Performance Parts',
      description: 'Performance parts engineered for speed, durability, and precision.',
    },
  },
  {
    path: '/catalog',
    name: 'catalog',
    description: 'Catálogo completo de productos con filtros por categoría y estado',
    component: 'src/pages/catalog.astro',
    permissions: ['public'],
    params: [
      { name: 'category', type: 'string', required: false, description: 'Filtrar por categoría (motorcycles, cars, accessories)' },
      { name: 'filter', type: 'string', required: false, description: 'Filtro especial (new, sale, featured)' },
      { name: 'search', type: 'string', required: false, description: 'Búsqueda de productos' },
      { name: 'page', type: 'number', required: false, description: 'Número de página para paginación' },
    ],
    isProtected: false,
    meta: {
      title: 'Catálogo - CFG TWPO',
      description: 'Explora nuestro catálogo completo de piezas de alto rendimiento.',
    },
  },
  {
    path: '/product/[id]',
    name: 'product-details',
    description: 'Página de detalles de un producto específico',
    component: 'src/pages/product/[id].astro',
    permissions: ['public'],
    params: [
      { name: 'id', type: 'string', required: true, description: 'ID único del producto' },
    ],
    isProtected: false,
    meta: {
      title: 'Detalles del Producto - CFG TWPO',
      description: 'Ver detalles completos del producto.',
    },
  },
  {
    path: '/productdetails',
    name: 'product-details-static',
    description: 'Página de detalles de producto estática (legado)',
    component: 'src/pages/productdetails.astro',
    permissions: ['public'],
    params: [],
    isProtected: false,
    meta: {
      title: 'Twin-Scroll Turbo T4 - CFG TWPO',
      description: 'Detalles del producto Twin-Scroll Turbo T4',
    },
  },
  {
    path: '/stadistics',
    name: 'statistics',
    description: 'Panel de administración con estadísticas y métricas del negocio',
    component: 'src/pages/stadistics.astro',
    permissions: ['admin'],
    params: [],
    isProtected: true,
    meta: {
      title: 'Estadísticas - CFG TWPO',
      description: 'Dashboard de estadísticas y métricas.',
    },
  },
  {
    path: '/login',
    name: 'login',
    description: 'Página de inicio de sesión',
    component: 'src/pages/login.astro',
    permissions: ['public'],
    params: [
      { name: 'redirect', type: 'string', required: false, description: 'URL de redirección después del login' },
    ],
    isProtected: false,
    meta: {
      title: 'Iniciar Sesión - CFG TWPO',
      description: 'Inicia sesión en tu cuenta CFG TWPO.',
    },
  },
  {
    path: '/logout',
    name: 'logout',
    description: 'Cierra la sesión del usuario y redirecciona al inicio',
    component: 'src/pages/logout.astro',
    permissions: ['public'],
    params: [],
    isProtected: false,
    meta: {
      title: 'Cerrando Sesión - CFG TWPO',
      description: 'Cerrando sesión...',
    },
  },
  {
    path: '/404',
    name: 'not-found',
    description: 'Página 404 - Ruta no encontrada',
    component: 'src/pages/404.astro',
    permissions: ['public'],
    params: [],
    isProtected: false,
    meta: {
      title: 'Página No Encontrada - CFG TWPO',
      description: 'La página que buscas no existe.',
    },
  },
];

/**
 * Permission Levels
 * - public: Accessible to everyone
 * - user: Requires authentication
 * - admin: Requires admin role
 */
export const permissions: RoutePermission[] = [
  { name: 'public', description: 'Acceso público sin autenticación' },
  { name: 'user', description: 'Requiere usuario autenticado' },
  { name: 'admin', description: 'Requiere rol de administrador' },
];

/**
 * Get route by path
 */
export function getRoute(path: string): RouteConfig | undefined {
  return routes.find(route => route.path === path);
}

/**
 * Get route by name
 */
export function getRouteByName(name: string): RouteConfig | undefined {
  return routes.find(route => route.name === name);
}

/**
 * Check if user has permission to access route
 */
export function hasPermission(userPermissions: string[], route: RouteConfig): boolean {
  if (!route.isProtected) return true;
  
  const routePermission = route.permissions[0];
  return userPermissions.includes(routePermission);
}

/**
 * Get all public routes
 */
export function getPublicRoutes(): RouteConfig[] {
  return routes.filter(route => !route.isProtected);
}

/**
 * Get all protected routes
 */
export function getProtectedRoutes(): RouteConfig[] {
  return routes.filter(route => route.isProtected);
}

/**
 * Get routes requiring admin role
 */
export function getAdminRoutes(): RouteConfig[] {
  return routes.filter(route => route.permissions.includes('admin'));
}

/**
 * Link building utilities
 */
export const routeHelpers = {
  /**
   * Build product URL
   */
  product: (id: string) => `/product/${id}`,
  
  /**
 URL with filters
   * Build catalog   */
  catalog: (params?: { category?: string; filter?: string; search?: string; page?: number }) => {
    const url = new URL('/catalog', 'http://localhost');
    if (params?.category) url.searchParams.set('category', params.category);
    if (params?.filter) url.searchParams.set('filter', params.filter);
    if (params?.search) url.searchParams.set('search', params.search);
    if (params?.page) url.searchParams.set('page', String(params.page));
    return url.pathname + url.search;
  },
  
  /**
   * Build login URL with redirect
   */
  login: (redirectTo?: string) => {
    const url = new URL('/login', 'http://localhost');
    if (redirectTo) url.searchParams.set('redirect', redirectTo);
    return url.pathname + url.search;
  },
};
