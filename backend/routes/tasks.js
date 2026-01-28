const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET /api/tasks → obtener todas las tareas
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST /api/tasks → crear nueva tarea
router.post('/', async (req, res) => {
    const { titulo, descripcion, tecnologia, estado } = req.body;
    const task = new Task({ titulo, descripcion, tecnologia, estado });
    try {
        const nuevaTask = await task.save();
        res.status(201).json(nuevaTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE /api/tasks/:id → eliminar tarea por ID
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json({ message: 'Tarea eliminada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
