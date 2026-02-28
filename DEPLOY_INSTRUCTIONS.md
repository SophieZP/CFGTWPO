# 📋 Instrucciones para Deploy en GitHub Pages

## Paso 1: Preparar el Repositorio

El proyecto ya está configurado con:
- ✅ `astro.config.mjs` - Configurado para GitHub Pages
- ✅ `.github/workflows/deploy.yml` - Workflow automático
- ✅ `.gitignore` - Ignorar archivos innecesarios

## Paso 2: Configurar GitHub Pages

1. **Ve a Settings del repositorio**
   - Click en la pestaña "Settings"

2. **Configurar Pages**
   - En el menú lateral, busca "Pages"
   - En "Build and deployment":
     - Source: selecciona "GitHub Actions"
   - Click en "Save"

## Paso 3: Hacer Push al Repositorio

```bash
# Agregar cambios
git add .

# Hacer commit
git commit -m "Configure for GitHub Pages deployment"

# Push a master/main
git push origin master
# o
git push origin main
```

## Paso 4: Verificar Deploy

1. **En el repositorio**, ve a la pestaña "Actions"
2. Verifica que el workflow "Deploy to GitHub Pages" se ejecute
3. Cuando el deploy termine, la URL será:
   ```
   https://SophieZP.github.io/CFGTWPO
   ```

## Solución de Problemas

### Error: "Port in use"
- Esto es normal durante desarrollo
- El servidor usa automáticamente otro puerto

### Páginas no cargan correctamente
- Asegúrate que `base: '/CFGTWPO'` esté en `astro.config.mjs`
- Los enlaces internos deben usar rutas absolutas

### Workflow no se ejecuta
- Verifica que hayas hecho push a `master` o `main`
- En Settings > Pages, asegúrate "GitHub Actions" está seleccionado

## Variables de Configuración

Cambia estas variables en `astro.config.mjs` si es necesario:

```javascript
export default defineConfig({
  site: 'https://SophieZP.github.io',  // Tu URL de GitHub Pages
  base: '/CFGTWPO',                    // Nombre del repo
  output: 'static',                    // Para GitHub Pages
  // ... resto de config
});
```

## Comando de Build Local

Para verificar que funciona localmente:

```bash
npm run build
npm run preview
```

Esto te mostrará cómo se vería en producción.

## Actualizaciones Futuras

Cada vez que hagas push a `master` o `main`:
1. GitHub Actions ejecutará automáticamente el build
2. Se deployrá a GitHub Pages sin intervención manual
3. Ver estado en Actions tab

¡Listo para deploy! 🚀
