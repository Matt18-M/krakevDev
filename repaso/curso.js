// Datos del curso
let curso = { 
    nombre: "Matemáticas Avanzadas", 
    docente: "Dr. Roberto Silva" 
};

// Cargar datos guardados al iniciar
// CARGA DE DATOS
function cargarDatos() {
    // Cargar estudiantes (solo si no hay datos en localStorage)
    let estudiantesGuardados = cargarDeLocalStorage('estudiantes');
    if (estudiantesGuardados && estudiantesGuardados.length > 0) {
        estudiantes = estudiantesGuardados;
    }
    
    // Cargar asistencias
    let asistenciasGuardadas = cargarDeLocalStorage('asistencias');
    if (asistenciasGuardadas) asistencias = asistenciasGuardadas;
    
    // Cargar curso
    let cursoGuardado = cargarDeLocalStorage('cursoConfig');
    if (cursoGuardado && cursoGuardado.nombre) {
        curso = cursoGuardado;
    }
    
    // Actualizar vistas
    mostrarEstudiantes();
    mostrarAsistencias();
    mostrarInformacionCurso();
}

// Guardar datos
function guardarDatos() {
    const nombreCurso = document.getElementById('txtCurso').value;
    const nombreDocente = document.getElementById('txtDocente').value;
    
    // Validación básica
    if (!nombreCurso) {
        mostrarTexto("lblErrorCurso", "El nombre del curso es obligatorio");
        return;
    }
    
    if (!nombreDocente) {
        mostrarTexto("lblErrorDocente", "El nombre del docente es obligatorio");
        return;
    }
    
    // Guardar datos
    curso.nombre = nombreCurso;
    curso.docente = nombreDocente;
    
    // Guardar en localStorage
    localStorage.setItem('cursoConfig', JSON.stringify(curso));
    
    // Mostrar mensaje de éxito
    mostrarMensajeExito();
    
    // Actualizar la vista
    mostrarInformacion();
    
    // Limpiar formulario
    document.getElementById('txtCurso').value = '';
    document.getElementById('txtDocente').value = '';
    limpiarMensajesError();
}

// Mostrar información del curso
function mostrarInformacion() {
    const infoDiv = document.getElementById('infoCurso');
    
    if (!curso.nombre && !curso.docente) {
        infoDiv.innerHTML = `
            <div class="empty-state">
                <p>💡 Complete los datos del curso</p>
            </div>
        `;
        return;
    }
    
    infoDiv.innerHTML = `
        <div class="course-info">
            <div class="course-name">${curso.nombre}</div>
            <div class="course-teacher">Docente: ${curso.docente}</div>
            <div class="asistencia-text">
                "Asistencia del curso ${curso.nombre}, pasada por ${curso.docente}."
            </div>
        </div>
    `;
}

// Mostrar mensaje de éxito temporal
function mostrarMensajeExito() {
    const mensaje = document.getElementById("successMessage");
    mensaje.style.display = 'block';
    
    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 3000);
}

function limpiarMensajesError() {
    mostrarTexto("lblErrorCurso", "");
    mostrarTexto("lblErrorDocente", "");
}

// Inicializar la aplicación
function inicializar() {
    cargarDatos();
    
    // Configurar evento del botón guardar
    document.getElementById('btnGuardar').addEventListener('click', guardarDatos);
    
    // Permitir guardar con Enter
    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            guardarDatos();
        }
    });
}

// Iniciar cuando se cargue la página
document.addEventListener('DOMContentLoaded', inicializar);