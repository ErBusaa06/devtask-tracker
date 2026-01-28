const mongoose = require('mongoose');

// Definición del esquema
const taskSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String },
    tecnologia: { type: String, enum: ['Java', 'JS', 'Python'], required: true },
    estado: { type: String, enum: ['pending', 'done'], default: 'pending' },
    fecha: { type: Date, default: Date.now }
});

// Crear modelo
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;