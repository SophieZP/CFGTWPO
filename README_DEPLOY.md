# CFG TWPO - E-commerce de Partes Automotrices

Tienda en línea especializada en componentes de alto rendimiento para motos y carros. Construida con Astro, React y Tailwind CSS.

## 📋 Características

- ✅ Catálogo dinámico de productos
- ✅ Páginas de detalles de productos individuales
- ✅ Diseño responsivo moderno
- ✅ Optimizado para SEO
- ✅ Deploy automático en GitHub Pages

## 🚀 Quick Start

### Instalación local

```bash
# Clonar repositorio
git clone https://github.com/SophieZP/CFGTWPO.git
cd CFGTWPO

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Preview de la compilación
npm run preview
```

## 📁 Estructura del Proyecto

```
/
├── src/
│   ├── assets/           # Imágenes y recursos
│   ├── components/       # Componentes reutilizables
│   │   ├── catalog/      # Componente de catálogo
│   │   ├── landingpage/  # Página de inicio
│   │   ├── productdetails/ # Detalles de productos
│   │   └── stadistics/   # Estadísticas
│   ├── data/            # Datos (JSON)
│   │   └── products.json # Base de datos de productos
│   ├── layouts/         # Layouts base
│   ├── pages/           # Páginas dinámicas y estáticas
│   │   ├── products/    # Rutas dinámicas [slug].astro
│   │   └── ...
│   └── styles/          # CSS global
├── public/              # Archivos estáticos
├── dist/               # Compilación (generado)
└── astro.config.mjs    # Configuración de Astro
```

## 📝 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor local en `localhost:4322` |
| `npm run build` | Construye para producción |
| `npm run preview` | Preview local de la compilación |
| `npm run astro` | Acceso a CLI de Astro |

## 🌐 Deploy en GitHub Pages

El proyecto está configurado para deploy automático en GitHub Pages. Cuando hagas push a la rama `main` o `master`, se ejecutará automáticamente:

1. **Build automático** - GitHub Actions compila el proyecto
2. **Deploy automático** - Se publica en GitHub Pages

### Configuración requerida:

1. **Ir a Settings > Pages en tu repositorio**
2. **Seleccionar** "GitHub Actions" como source
3. El workflow se ejecutará automáticamente en cada push

### URL de Deploy:
```
https://SophieZP.github.io/CFGTWPO
```

## 🔧 Variables de Configuración

En `astro.config.mjs`:
- `site`: URL del sitio en producción
- `base`: Ruta base (necesaria para subdirectorio en GitHub Pages)
- `output`: 'static' para GitHub Pages

## 📦 Dependencias

- **Astro** v5.18.0 - Framework SSG
- **React** v19.2.4 - Componentes interactivos
- **Tailwind CSS** v4.2.1 - Utilidades de CSS
- **TypeScript** - Tipado estático

## 👤 Autor

SophieZP - [GitHub](https://github.com/SophieZP)

## 📄 Licencia

MIT
