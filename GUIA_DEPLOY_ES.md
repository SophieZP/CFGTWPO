# 🚀 GUÍA DE DEPLOY - CFG TWPO

## ✅ Estado Actual

Tu proyecto está **100% listo** para deploy en GitHub Pages. Todos los archivos de configuración están completos y validados.

## 📋 Qué Se Ha Preparado

### ✅ Configuración de Astro
- `site`: https://SophieZP.github.io
- `base`: /CFGTWPO
- `output`: static

### ✅ GitHub Actions Workflow
- Ubicación: `.github/workflows/deploy.yml`
- Automático en cada push a master/main
- Build + Deploy automático

### ✅ Rutas y Páginas
- Página inicio: `/` (index)
- Catálogo: `/catalog`
- Productos dinámicos: `/products/[slug]`
  - `/products/piston-kit`
  - `/products/ceramic-rotor-kit`
  - `/products/turbo-t4`
  - `/products/spark-plugs`
- Estadísticas: `/stadistics`

## 🎯 PASOS PARA HACER DEPLOY

### Paso 1: Configurar GitHub Pages (UNA SOLA VEZ)

1. Ve a: https://github.com/SophieZP/CFGTWPO/settings/pages
2. En "Build and deployment":
   - **Source**: Selecciona "GitHub Actions"
   - **Click Save**

### Paso 2: Hacer Push del Código

Opción A - Usando terminal:
```bash
cd "C:\Users\USER\Documents\3 SOFIA\repos\CFGTWPO"
git add .
git commit -m "Deploy inicial a GitHub Pages"
git push origin master
```

Opción B - Usando script Windows:
```bash
deploy.bat
# Selecciona opción 2
```

### Paso 3: Esperar Deploy

1. Ve a: https://github.com/SophieZP/CFGTWPO/actions
2. Busca el workflow "Deploy to GitHub Pages"
3. Espera a que termine (normalmente 2-3 minutos)
4. Verifica que el estado sea ✅ verde

### Paso 4: Acceder al Sitio

Una vez que el workflow termina:
```
https://SophieZP.github.io/CFGTWPO
```

## 🔄 ACTUALIZACIONES FUTURAS

Cada vez que hagas cambios:

1. **Edita tus archivos localmente**
2. **Commit y push**:
   ```bash
   git add .
   git commit -m "Descripción de cambios"
   git push origin master
   ```
3. **Deploy automático** - El workflow se ejecuta automáticamente
4. **Verifica** - El sitio se actualiza en 2-3 minutos

## 📂 ARCHIVOS IMPORTANTES

```
.github/workflows/deploy.yml    ← Workflow automático
astro.config.mjs               ← Configuración (ya está lista)
src/data/products.json         ← Base de datos de productos
src/pages/products/[slug].astro ← Rutas dinámicas
package.json                   ← Dependencias
```

## 💡 TIPS ÚTILES

### Build Local Antes de Deploy
```bash
npm run build
npm run preview
```
Esto te muestra cómo se vería en producción.

### Ver Estado de Git
```bash
git status
```

### Ver Histórico
```bash
git log --oneline
```

### Deshacer Último Commit (si lo necesitas)
```bash
git reset --soft HEAD~1
```

## 🆘 PROBLEMAS COMUNES

### El workflow no se ejecuta
**Solución**: En Settings > Pages, asegúrate de haber seleccionado "GitHub Actions"

### Las páginas no cargan imágenes
**Causa**: Las imágenes tienen rutas que no incluyen `/CFGTWPO`
**Solución**: Verificar que todas las imágenes usen import y `.src`

### Links internos rotos
**Causa**: Links sin el prefix `/CFGTWPO`
**Solución**: Usar links absolutos: `/CFGTWPO/products/piston-kit`

### Puerto 4321 en uso
**Causa**: Proceso anterior aún ejecutándose
**Solución**: Abre otro puerto: `npm run dev -- --port 4322`

## ✨ VARIABLES DE ENTORNO

Si necesitas secretos (no aplica en este proyecto):
1. Settings > Secrets and variables > Actions
2. Agrega las variables necesarias

## 📊 MONITOREO

Puedes ver:
- **Actions**: Estado de deploys
- **Deployments**: Histórico de deploys
- **Pages**: Configuración y URL

Todos en Settings del repositorio.

## 📱 RESPONSIVE DESIGN

El sitio está optimizado para:
- Desktop (1280px+)
- Tablet (768px - 1279px)
- Mobile (320px - 767px)

## 🔐 SEGURIDAD

- El repositorio es público
- Los secrets no se exponen
- HTTPS automático con GitHub Pages
- No hay credenciales en el código

## 🎓 RECURSOS

- Documentación Astro: https://docs.astro.build
- GitHub Pages: https://pages.github.com
- GitHub Actions: https://github.com/features/actions

## ✅ CHECKLIST FINAL

- [x] Proyecto compila sin errores
- [x] Todas las páginas generadas
- [x] astro.config.mjs configurado
- [x] Workflow GitHub Actions creado
- [x] Base URL correcta `/CFGTWPO`
- [x] Site URL correcta
- [x] .gitignore configurado
- [x] Documentación completa

## 🚀 ¡LISTO PARA DEPLOY!

Ahora simplemente:

```bash
git add .
git commit -m "Deploy a GitHub Pages"
git push origin master
```

¡El sitio estará en línea en 2-3 minutos! 🎉

---

**Ultima actualización**: 28 de Febrero, 2026  
**Estado**: ✅ Listo para producción
