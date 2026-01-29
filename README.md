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
- backend/
  - server.js        → Servidor Express
  - routes/tasks.js  → Rutas de la API REST
  - models/Task.js   → Esquema Mongoose
  - .env             → Variables de entorno (MONGO_URI)
- frontend/
  - index.html       → Interfaz principal
  - style.css        → Estilos
  - main.js          → Lógica frontend
  - favicon.png      → Icono de la aplicación

---

## ▶️ Cómo ejecutar el proyecto

 **1. Clonar el repositorio**
````
git clone <URL_DEL_REPOSITORIO>
cd devtask-tracker/backend
````
2. **Instalar dependencias**
````
npm install
````
3. **Configurar variables de entorno. Crear un archivo .env dentro de la carpeta backend:**

Copia `.env.example` a `.env` y completa tu URI de MongoDB:
````
MONGO_URI=TU_URI_AQUI

````
4. **Iniciar el servidor**
````
node server.js
````
El backend se ejecutará en:
````
http://localhost:3000
````
**5. Abrir el frontend. Abrir manualmente:**
````
frontend/index.html
````
O usar Go Live desde VS Code.
``

---

## ✅ Cumplimiento de requisitos de la práctica

Este proyecto cumple con los requisitos establecidos en la práctica, abarcando todas las áreas evaluables.

En el apartado de interfaz, la aplicación funciona como una SPA sencilla, sin recargar la página, utilizando Fetch API para comunicarse con el backend y manipulando el DOM directamente con JavaScript Vanilla. El diseño es moderno, claro y responsivo, con un estilo dark mode que mejora la experiencia de usuario.

En cuanto al servidor, se ha desarrollado una API REST propia con Node.js y Express, capaz de gestionar peticiones GET, POST y DELETE. La API responde correctamente en formato JSON y utiliza códigos de estado adecuados como 200, 201 y 500, garantizando una comunicación clara entre frontend y backend.

Respecto a la base de datos, la aplicación se conecta a MongoDB Atlas mediante Mongoose, definiendo un esquema coherente para las tareas. Los datos persisten correctamente en la nube y se realizan operaciones CRUD sin errores, permitiendo crear, visualizar y eliminar tareas desde la interfaz web.

Por último, el proyecto hace un uso correcto de Git y GitHub, manteniendo una estructura clara separada en frontend y backend, con un README completo y documentación suficiente para comprender, ejecutar y evaluar la aplicación.

---

## 📝 Conclusión

DevTask Tracker representa una aplicación FullStack completa desarrollada desde cero, cubriendo todo el flujo de trabajo desde la interfaz de usuario hasta la persistencia de datos en una base de datos en la nube.

El proyecto permite entender de forma práctica cómo se comunican el frontend, el backend y la base de datos sin depender de frameworks, utilizando únicamente tecnologías base del ecosistema web y Node.js. Además, se han aplicado buenas prácticas de desarrollo, seguridad y organización del código, sentando una base sólida para afrontar proyectos FullStack más complejos en el futuro.
