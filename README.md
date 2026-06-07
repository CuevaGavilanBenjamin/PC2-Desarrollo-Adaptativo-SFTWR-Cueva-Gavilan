# Recarga Celular Bancaria

Esta es una aplicación full-stack para realizar recargas de celular simulando el flujo de una aplicación bancaria

## 🚀 Cómo ejecutar el proyecto (Instrucciones Simples)

### 1️⃣ Preparación Inicial (Solo la primera vez)

**Backend:**
```bash
cd backend
.\mvnw.cmd clean install -DskipTests
```
**Frontend:**
```bash
cd frontend
npm install
```

---

### 2️⃣ Iniciar el Backend (Terminal 1)
Abre una terminal en la carpeta principal del proyecto y ejecuta:
```bash
cd backend
.\mvnw.cmd spring-boot:run
```
El backend estará disponible en: `http://localhost:8080`

---

### 3️⃣ Iniciar el Frontend (Terminal 2)
Abre otra terminal en la carpeta principal del proyecto y ejecuta:
```bash
cd frontend
npm run dev
```
El frontend estará disponible en: `http://localhost:5173`

---

## 🧪 Datos para probar la aplicación
Para probar la confirmación de la recarga en el **Paso 4**, utiliza estos datos:
- **Usuario:** cliente1
- **Clave:** 123456

---

## 🛠️ Tecnologías Utilizadas
- **Frontend:** React 18, Vite, Axios, CSS puro
- **Backend:** Spring Boot 3.3, Java 17, Maven
- **Base de Datos / Persistencia:** JSON (Archivos locales para Operadores, Usuarios y Transacciones)
