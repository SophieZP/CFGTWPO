#!/bin/bash
# Script para facilitar el deploy a GitHub Pages

echo "🚀 CFG TWPO - Deploy Assistant"
echo "================================"
echo ""

# Verificar si estamos en un repositorio git
if [ ! -d .git ]; then
    echo "❌ Error: No estás en un repositorio git"
    exit 1
fi

# Opción 1: Build y Preview local
echo "Opciones de Deploy:"
echo "1) Build y Preview Local"
echo "2) Preparar para Push (agregar, commit, push)"
echo "3) Ver estado de git"
echo "4) Salir"
echo ""
read -p "Selecciona una opción (1-4): " option

case $option in
    1)
        echo ""
        echo "📦 Compilando proyecto..."
        npm run build
        echo ""
        echo "👀 Preview en http://localhost:3000"
        echo "Presiona Ctrl+C para detener"
        npm run preview
        ;;
    2)
        echo ""
        read -p "Mensaje de commit: " message
        echo ""
        echo "📝 Agregando archivos..."
        git add .
        echo ""
        echo "💾 Haciendo commit..."
        git commit -m "$message"
        echo ""
        echo "🚀 Haciendo push..."
        git push origin master
        echo ""
        echo "✅ ¡Listo! Verifica el workflow en:"
        echo "https://github.com/SophieZP/CFGTWPO/actions"
        ;;
    3)
        echo ""
        git status
        ;;
    4)
        echo "Hasta luego!"
        exit 0
        ;;
    *)
        echo "❌ Opción inválida"
        exit 1
        ;;
esac

echo ""
echo "✅ Proceso completado"
