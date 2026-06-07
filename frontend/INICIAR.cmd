@echo off
title Recarga Bancaria - Frontend (Puerto 5173)
color 0B

echo.
echo ======================================
echo   RECARGA BANCARIA - FRONTEND
echo ======================================
echo.

if not exist "node_modules" (
    echo Descargando dependencias... (primera vez)
    echo.
    call npm install
    echo.
)

echo.
echo Iniciando servidor Vite...
echo Puerto: http://localhost:5173
echo.
echo ======================================
echo.

call npm run dev

pause
