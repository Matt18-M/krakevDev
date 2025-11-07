// FUNCIONES PRINCIPALES

generarResumen = function(){
    // Cargar datos del curso
    let estudiantes = window.estudiantes || [];
    let asistencias = window.asistencias || [];
    let curso = window.curso || { nombre: "", docente: "" };
    
    if (!curso.nombre || !curso.docente) {
        alert("Primero debe configurar los datos del curso");
        return;
    }
    
    if (estudiantes.length === 0) {
        alert("No hay estudiantes registrados en el sistema");
        return;
    }
    
    // Mostrar información del curso
    mostrarInformacionCurso(curso);
    
    // Calcular estadísticas
    calcularEstadisticas(estudiantes, asistencias);
    
    // Mostrar detalles de asistencia
    mostrarDetallesAsistencia(estudiantes, asistencias);
}

mostrarInformacionCurso = function(curso) {
    const infoDiv = document.getElementById("infoResumenCurso");
    
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

calcularEstadisticas = function(estudiantes, asistencias) {
    let totalEstudiantes = estudiantes.length;
    let totalPresentes = asistencias.filter(a => a.estado === "Presente").length;
    let totalAusentes = asistencias.filter(a => a.estado === "Ausente").length;
    let porcentajeAsistencia = totalEstudiantes > 0 ? 
        Math.round((totalPresentes / totalEstudiantes) * 100) : 0;
    
    mostrarTexto("totalEstudiantes", totalEstudiantes);
    mostrarTexto("totalPresentes", totalPresentes);
    mostrarTexto("totalAusentes", totalAusentes);
    mostrarTexto("porcentajeAsistencia", porcentajeAsistencia + "%");
}

mostrarDetallesAsistencia = function(estudiantes, asistencias) {
    const tablaDiv = document.getElementById("tablaResumen");
    
    if (asistencias.length === 0) {
        tablaDiv.innerHTML = `
            <div class="empty-state">
                <p>📊 No hay asistencias registradas hoy</p>
            </div>
        `;
        return;
    }
    
    let contenidoTabla = `
        <table>
            <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>CORREO</th>
                <th>ESTADO</th>
            </tr>
    `;
    
    for (let i = 0; i < asistencias.length; i++){
        let asistencia = asistencias[i];
        let estudiante = estudiantes.find(e => e.id === asistencia.id);
        let correo = estudiante ? estudiante.correo : "No encontrado";
        let claseEstado = asistencia.estado === "Presente" ? "estado-presente" : "estado-ausente";
        
        contenidoTabla += `
            <tr>
                <td>${asistencia.id}</td>
                <td>${asistencia.nombre}</td>
                <td>${correo}</td>
                <td class="${claseEstado}">${asistencia.estado}</td>
            </tr>
        `;
    }
    contenidoTabla += "</table>";
    tablaDiv.innerHTML = contenidoTabla;
}

// FUNCIONES DE TABS
inicializarTabs = function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase active de todos los botones
            tabBtns.forEach(b => b.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Aquí puedes agregar lógica para filtrar la tabla según la pestaña
            const tabType = this.getAttribute('data-tab');
            filtrarTabla(tabType);
        });
    });
}

filtrarTabla = function(tabType) {
    // Esta función puede implementarse para filtrar la tabla según la pestaña seleccionada
    console.log("Filtrando por:", tabType);
}

// INICIALIZACIÓN
inicializarResumen = function() {
    document.getElementById("btnGenerarResumen").addEventListener("click", generarResumen);
    inicializarTabs();
}