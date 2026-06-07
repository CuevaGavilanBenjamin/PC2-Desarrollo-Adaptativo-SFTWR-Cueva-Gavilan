#!/bin/bash

echo "======================================"
echo "Recarga Celular Bancaria - Setup"
echo "======================================"
echo ""

# Backend Setup
echo "📦 Instalando Backend..."
cd backend
mvn clean install -DskipTests
echo "✅ Backend listo"
echo ""

# Frontend Setup
echo "📦 Instalando Frontend..."
cd ../frontend
npm install
echo "✅ Frontend listo"
echo ""

echo "======================================"
echo "Setup completado exitosamente"
echo "======================================"
echo ""
echo "Para ejecutar:"
echo "  Backend:  cd backend && mvn spring-boot:run"
echo "  Frontend: cd frontend && npm run dev"
echo ""
