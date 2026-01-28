# DevTask Tracker 📝  
Aplicación **FullStack** para la gestión de tareas de desarrollo. Permite crear, visualizar y eliminar tareas técnicas mediante un frontend dinámico y un backend propio conectado a una base de datos en la nube.

El objetivo principal es comprender el funcionamiento interno de una aplicación web completa **sin frameworks**, utilizando únicamente estándares web nativos, Node.js y MongoDB.

---

## 🚀 Funcionalidades

- Crear tareas con:
  - Título  
  - Descripción  
  - Tecnología  
  - Estado (Pendiente / Completada)
- Visualizar todas las tareas almacenadas en **MongoDB Atlas**
- Eliminar tareas mediante una **API REST**
- Interfaz dinámica tipo **SPA** (sin recargar la página)
- Diseño moderno en **dark mode**
- Feedback visual en todas las acciones

---

## 🛠️ Tecnologías utilizadas

### **Frontend**
- HTML5 semántico  
- CSS (Flexbox y Grid)  
- JavaScript Vanilla  
- Fetch API (async/await)  
- Manipulación directa del DOM  

### **Backend**
- Node.js  
- Express  
- API REST (GET, POST, DELETE)  

### **Base de datos**
- MongoDB Atlas  
- Mongoose (modelos y conexión)

---

## 📂 Estructura del proyecto

devtask-tracker/
│
├─ backend/
│  ├─ server.js                    # Servidor Express
│  ├─ routes/tasks.js    # Rutas de la API REST
│  ├─ models/Task.js     # Esquema Mongoose
│  └─ .env               # Variables de entorno (MONGO_URI)
│
└─ frontend/
├─ index.html                  # Interfaz principal
├─ style.css                    # Estilos (dark mode)
├─ main.js                        # Lógica frontend
└─ favicon.png                # Icono de la aplicación

Código

---

## ▶️ Cómo ejecutar el proyecto

### **1. Clonar el repositorio**
````
git clone <URL_DEL_REPOSITORIO>
cd devtask-tracker/backend
````
2. Instalar dependencias
````
npm install
````
3. Configurar variables de entorno
Crear un archivo .env dentro de la carpeta backend:
````
MONGO_URI=tu_cadena_de_conexion_mongodb_atlas
````
4. Iniciar el servidor
````
node server.js
````
El backend se ejecutará en:
````
http://localhost:3000
````
5. Abrir el frontend
Abrir manualmente:
````
frontend/index.html
````
O usar Go Live desde VS Code.

✅ Cumplimiento de requisitos de la práctica
Requisito	Estado	Detalles
RA1 – Interfaz	✔️	SPA, Fetch API, DOM, diseño moderno
RA2 – Servidor	✔️	API REST, JSON, códigos 200/201/500
RA3 – Base de Datos	✔️	MongoDB Atlas, Mongoose, CRUD
RA4 – Git	✔️	Proyecto organizado, README completo
📝 Conclusión
DevTask Tracker demuestra el dominio del flujo completo:
Frontend → Backend → Base de Datos,
sentando una base sólida para desarrollar aplicaciones FullStack más complejas sin depender de frameworks externos.
