DevTask Tracker 📝
Aplicación FullStack para la gestión de tareas de desarrollo. Permite crear, visualizar y eliminar tareas técnicas mediante un frontend dinámico y un backend propio conectado a una base de datos en la nube.

El objetivo principal es comprender el funcionamiento interno de una aplicación web completa sin frameworks, trabajando únicamente con estándares web nativos, Node.js  y MongoDB.

📌 Características principales
Crear tareas con:

Título

Descripción

Tecnología

Estado (Pendiente / Completada)

Visualizar todas las tareas almacenadas en MongoDB Atlas

Eliminar tareas mediante una API REST

Interfaz dinámica tipo SPA (sin recargar la página)

Diseño moderno en dark mode

Feedback visual en todas las acciones

🛠️ Tecnologías utilizadas
Frontend
HTML5 semántico

CSS (Flexbox y Grid)

JavaScript Vanilla

Fetch API (async/await)

Manipulación directa del DOM

Backend
Node.js

Express

API REST (GET, POST, DELETE)

Base de datos
MongoDB Atlas

Mongoose (modelos y conexión)

📂 Estructura del proyecto
Código
devtask-tracker/
│
├─ backend/
│  ├─ server.js          # Servidor Express
│  ├─ routes/tasks.js    # Rutas de la API REST
│  ├─ models/Task.js     # Esquema Mongoose
│  └─ .env               # Variables de entorno (MONGO_URI)
│
└─ frontend/
   ├─ index.html         # Interfaz principal
   ├─ style.css          # Estilos (dark mode)
   ├─ main.js            # Lógica frontend
   └─ favicon.png        # Icono de la aplicación
▶️ Cómo ejecutar el proyecto
1. Clonar el repositorio
bash
git clone <URL_DEL_REPOSITORIO>
cd devtask-tracker/backend
2. Instalar dependencias
bash
npm install
3. Configurar variables de entorno
Crear un archivo .env dentro de la carpeta backend:

Código
MONGO_URI=tu_cadena_de_conexion_mongodb_atlas
4. Iniciar el servidor
bash
node server.js
El backend se ejecutará en:

Código
http://localhost:3000
5. Abrir el frontend
Abrir manualmente:

Código
frontend/index.html
O usar Go Live desde VS Code.

✅ Cumplimiento de requisitos de la práctica
RA2 – Servidor
API REST funcional

Respuestas en JSON

Códigos de estado correctos (200, 201, 500)

RA3 – Base de Datos
Persistencia en MongoDB Atlas

Esquema correcto con Mongoose

Operaciones CRUD (Create, Read, Delete)

RA1 – Interfaz
Interfaz dinámica con Fetch API

Manipulación del DOM sin frameworks

Diseño moderno, responsivo y en dark mode

RA4 – Git
Proyecto organizado en frontend y backend

Repositorio documentado con README

📝 Conclusión
DevTask Tracker demuestra el dominio del flujo completo
Frontend → Backend → Base de Datos,
sentando una base sólida para desarrollar aplicaciones FullStack más complejas sin depender de frameworks externos.
