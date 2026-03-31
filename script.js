const miInput = document.getElementById('input');
const miBoton = document.getElementById('boton-agregar');
const miLista = document.getElementById('lista-tareas');

const agregarTarea = () => {
    const textoTarea = miInput.value; 

    if (textoTarea.trim() !== "") { 
        const nuevaTarea = document.createElement('li');
        const botonBorrar = document.createElement('button');

        nuevaTarea.textContent = textoTarea;
        
        // --- NUEVA FUNCIONALIDAD: TACHADO ---
        nuevaTarea.onclick = function() {
            nuevaTarea.classList.toggle('tachado');
        };
        // ------------------------------------

        botonBorrar.textContent = "Eliminar";
        botonBorrar.classList.add('btn-eliminar');

        botonBorrar.onclick = function(event) {
            event.stopPropagation(); // Evita que se tache al intentar borrar
            nuevaTarea.remove();
        };

        nuevaTarea.appendChild(botonBorrar); 
        miLista.appendChild(nuevaTarea);     
        miInput.value = "";
    } else {
        alert('Escribe algo primero');
    }
};

miBoton.addEventListener('click', agregarTarea);

miInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        agregarTarea();
    }
});