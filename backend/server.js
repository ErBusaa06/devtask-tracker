// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // carga las variables de entorno desde .env

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // para recibir JSON desde el frontend

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Importar rutas
const taskRoutes = require('./routes/tasks');

// Usar rutas
app.use('/api/tasks', taskRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor DevTask Tracker funcionando ✅');
});

// Levantar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
