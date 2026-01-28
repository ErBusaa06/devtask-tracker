const form = document.getElementById('form');
const tasksList = document.getElementById('tasks');

// Función para cargar tareas
async function fetchTasks() {
    tasksList.innerHTML = '';
    try {
        const res = await fetch('http://localhost:3000/api/tasks');
        const tasks = await res.json();

        tasks.forEach(task => {
            const li = document.createElement('li');
            li.setAttribute('data-estado', task.estado);

            li.innerHTML = `
                <span class="nombre">${task.titulo}</span>
                <span class="estado">${task.estado === 'pending' ? 'Pendiente' : 'Completada'}</span>
                <button>Borrar</button>
            `;

            const deleteBtn = li.querySelector('button');
            deleteBtn.addEventListener('click', async () => {
                try {
                    await fetch(`http://localhost:3000/api/tasks/${task._id}`, { method: 'DELETE' });
                    li.remove();
                } catch (err) {
                    console.error('Error borrando tarea:', err);
                }
            });

            tasksList.appendChild(li);
        });

    } catch (err) {
        console.error('Error cargando tareas:', err);
    }
}

// Crear nueva tarea
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const tecnologia = document.getElementById('tecnologia').value;
    const estado = document.getElementById('estado').value;

    const nuevaTarea = { titulo, descripcion, tecnologia, estado };

    try {
        const res = await fetch('http://localhost:3000/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevaTarea)
        });

        const task = await res.json();

        const li = document.createElement('li');
        li.setAttribute('data-estado', task.estado);

        li.innerHTML = `
            <span class="nombre">${task.titulo}</span>
            <span class="estado">${task.estado === 'pending' ? 'Pendiente' : 'Completada'}</span>
            <button>Borrar</button>
        `;

        const deleteBtn = li.querySelector('button');
        deleteBtn.addEventListener('click', async () => {
            try {
                await fetch(`http://localhost:3000/api/tasks/${task._id}`, { method: 'DELETE' });
                li.remove();
            } catch (err) {
                console.error('Error borrando tarea:', err);
            }
        });

        tasksList.appendChild(li);
        form.reset();

    } catch (err) {
        console.error('Error creando tarea:', err);
    }
});

// Cargar tareas al inicio
fetchTasks();
