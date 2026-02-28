@echo off
REM Script para facilitar el deploy a GitHub Pages en Windows

color 0A
cls

echo.
echo   ====================================
echo   CFG TWPO - Deploy Assistant
echo   ====================================
echo.

REM Verificar si estamos en un repositorio git
if not exist .git (
    echo Error: No estas en un repositorio git
    pause
    exit /b 1
)

echo Opciones de Deploy:
echo.
echo 1) Build y Preview Local
echo 2) Preparar para Push (agregar, commit, push)
echo 3) Ver estado de git
echo 4) Salir
echo.

set /p option="Selecciona una opcion (1-4): "

if "%option%"=="1" (
    echo.
    echo.Building proyecto...
    call npm run build
    echo.
    echo.Preview en http://localhost:3000
    echo.Presiona Ctrl+C para detener
    call npm run preview
) else if "%option%"=="2" (
    echo.
    set /p message="Mensaje de commit: "
    echo.
    echo.Agregando archivos...
    git add .
    echo.
    echo.Haciendo commit...
    git commit -m "%message%"
    echo.
    echo.Haciendo push...
    git push origin master
    echo.
    echo.Listo! Verifica el workflow en:
    echo.https://github.com/SophieZP/CFGTWPO/actions
) else if "%option%"=="3" (
    echo.
    git status
) else if "%option%"=="4" (
    echo.Hasta luego!
    exit /b 0
) else (
    echo.Opcion invalida
    exit /b 1
)

echo.
echo.Proceso completado
pause
