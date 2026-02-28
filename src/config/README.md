# CFG TWPO - Sistema de Navegación y Enrutamiento

## Resumen

Este documento describe el sistema completo de navegación y enrutamiento implementado en la aplicación web CFG TWPO.

## Estructura de Archivos

```
src/
├── config/
│   ├── routes.ts       # Configuración de todas las rutas
│   ├── types.ts        # Definiciones de tipos TypeScript
│   ├── auth.ts         # Gestión de autenticación
│   └── navigation.ts   # Utilidades de navegación
├── pages/
│   ├── index.astro     # Página principal
│   ├── catalog.astro   # Catálogo de productos
│   ├── product/
│   │   └── [id].astro  # Página dinámica de producto
│   ├── productdetails.astro # Página de producto estática
│   ├── stadistics.astro # Panel de administración (protegido)
│   ├── login.astro     # Inicio de sesión
│   ├── logout.astro    # Cierre de sesión
│   └── 404.astro       # Página de error 404
├── components/
│   ├── ui/
│   │   ├── Header.astro  # Navegación principal
│   │   └── Footer.astro # Pie de página
│   └── sections/
│       ├── Hero.astro
│       ├── Categories.astro
│       ├── CatalogPage.astro
│       └── FeaturedProducts.astro
└── layouts/
    ├── BaseLayout.astro
    └── MainLayout.astro
```

## Rutas del Sistema

### Rutas Públicas

| Ruta | Nombre | Descripción | Parámetros |
|------|--------|-------------|------------|
| `/` | home | Página principal con productos destacados | Ninguno |
| `/catalog` | catalog | Catálogo con filtros | category, filter, search, page |
| `/product/[id]` | product-details | Detalles de producto | id (requerido) |
| `/productdetails` | product-details-static | Página de producto legacy | Ninguno |
| `/login` | login | Formulario de inicio de sesión | redirect |
| `/logout` | logout | Cierra sesión | Ninguno |
| `/404` | not-found | Página de error 404 | Ninguno |

### Rutas Protegidas

| Ruta | Nombre | Descripción | Permisos | Redirección |
|------|--------|-------------|----------|--------------|
| `/stadistics` | statistics | Dashboard de admin | admin | /login |
| `/account` | account | Cuenta de usuario | user, admin | /login |
| `/checkout` | checkout | Proceso de compra | user, admin | /login |

## Permisos de Acceso

### Niveles de Permiso

- **public**: Cualquier persona puede acceder
- **user**: Requiere usuario autenticado
- **admin**: Requiere rol de administrador

### Roles de Usuario

- **guest**: Visitante sin autenticación
- **user**: Usuario registrado
- **admin**: Administrador del sistema

## Sistema de Autenticación

### Funciones Principales (`src/config/auth.ts`)

```typescript
// Verificar acceso a ruta protegida
const access = checkRouteAccess(pathname);
if (!access.allowed) {
  window.location.href = access.redirectTo;
}

// Iniciar sesión
login(user, token);

// Cerrar sesión
logout();

// Verificar permiso
if (hasPermission('admin')) {
  // Acceso permitido
}
```

### Almacenamiento

- `cfg_auth_user`: Datos del usuario
- `cfg_auth_token`: Token de sesión
- `cfg_auth_permissions`: Permisos del usuario

## Navegación y Prefetching

### Utilidades (`src/config/navigation.ts`)

```typescript
// Inicializar sistema de navegación
initNavigation({ enabled: true, timeout: 200 });

// Prefetch manual
prefetchLink('/product/turbo-t4');

// Navegar con transición
navigateWithTransition('/catalog');

// Navegar programáticamente
navigate('/product/123', { prefetch: true, transition: false });
```

### Atributo data-prefetch

Agregar `data-prefetch` a los enlaces para habilitar prefetching automático:

```html
<a href="/catalog" data-prefetch>Catálogo</a>
```

### Selectores de Prefetch Automático

- `a[data-prefetch]`
- `a[href^="/catalog"]`
- `a[href^="/product"]`

## Transiciones de Página

### View Transitions API

La aplicación utiliza la API View Transitions de Chrome para transiciones suaves:

```javascript
if ('startViewTransition' in document) {
  document.startViewTransition(() => {
    window.location.href = url;
  });
}
```

### Fallback

Si View Transitions no está disponible, se usa un overlay de transición simple.

## Mejores Prácticas

### Enlaces

1. Usar rutas absolutas para navegación principal: `/catalog`
2. Usar rutas relativas para secciones de la misma página: `./detalles`
3. Agregar `data-prefetch` a enlaces de alta prioridad
4. Incluir `aria-label` para enlaces con iconos

### Parámetros de URL

1. Validar parámetros requeridos antes de renderizar
2. Proporcionar valores por defecto para parámetros opcionales
3. Sanitizar entradas del usuario

### Manejo de Errores

1. Redireccionar a `/404` para rutas no válidas
2. Mostrar mensajes apropiados para rutas protegidas
3. Manejar errores de red gracefulmente

## Ejemplos de Uso

### Enlace a Producto

```html
<!-- Enlace básico con prefetch -->
<a href="/product/turbo-t4" data-prefetch>
  Ver Turbo T4
</a>
```

### Enlace Protegido (solo admins)

```html
<a href="/stadistics">Estadísticas</a>
<!-- Con verificación client-side -->
<script>
  import { checkRouteAccess } from '../config/auth';
  const access = checkRouteAccess('/stadistics');
  if (!access.allowed) {
    // Ocultar o deshabilitar enlace
  }
</script>
```

### Formulario con Redirección

```html
<form action="/login" method="POST">
  <input type="hidden" name="redirect" value="/checkout" />
  <!-- campos del formulario -->
</form>
```

## Configuración de Rutas

### Agregar Nueva Ruta

1. Crear el componente en `src/pages/`
2. Agregar la ruta a `src/config/routes.ts`
3. Agregar navegación en `src/components/ui/Header.astro`
4. Agregar enlace en el pie de página si es necesario

### Proteger una Ruta

1. Marcar `isProtected: true` en la configuración
2. Especificar `permissions: ['admin']` o `['user', 'admin']`
3. Agregar script de verificación en la página

## Pruebas

### Verificar Rutas

```bash
# Verificar que todas las rutas funcionan
npm run build
```

### Pruebas de Autenticación

1. Probar acceso a `/stadistics` sin login → debe redirigir a `/login`
2. Probar acceso a `/stadistics` con login de usuario → debe mostrar acceso denegado
3. Probar acceso a `/stadistics` con login de admin → debe mostrar dashboard

### Pruebas de Prefetching

1. Inspeccionar red en DevTools
2. Hacer hover sobre enlaces con `data-prefetch`
3. Verificar que se hace prefetch del recurso
