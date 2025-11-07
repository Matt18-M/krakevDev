// Array para almacenar las asistencias del día
let asistencias = [
    { id: "1001001001", nombre: "Ana García López", estado: "Presente" },
    { id: "1001001002", nombre: "Carlos Rodríguez", estado: "Presente" },
    { id: "1001001003", nombre: "María Fernández", estado: "Ausente" },
    { id: "1001001004", nombre: "José Martínez", estado: "Presente" },
    { id: "1001001005", nombre: "Laura González", estado: "Presente" }
];

// FUNCIONES PRINCIPALES

mostrarAsistencias = function(){
    let cmpTabla = document.getElementById("tablaAsistencia");
    
    if (asistencias.length === 0) {
        cmpTabla.innerHTML = `
            <div class="empty-state">
                <p>📋 No hay asistencias registradas hoy</p>
            </div>
        `;
        actualizarContadores();
        return;
    }
    
    let contenidoTabla = `
        <table>
            <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>ESTADO</th>
            </tr>
    `;
    
    for (let i = 0; i < asistencias.length; i++){
        let elementoAsistencia = asistencias[i];
        let claseEstado = elementoAsistencia.estado === "Presente" ? "estado-presente" : "estado-ausente";
        
        contenidoTabla += `
            <tr>
                <td>${elementoAsistencia.id}</td>
                <td>${elementoAsistencia.nombre}</td>
                <td class="${claseEstado}">${elementoAsistencia.estado}</td>
            </tr>
        `;
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
    
    actualizarContadores();
}

actualizarContadores = function() {
    let presentes = asistencias.filter(a => a.estado === "Presente").length;
    let ausentes = asistencias.filter(a => a.estado === "Ausente").length;
    let total = asistencias.length;
    
    mostrarTexto("contadorPresentes", presentes);
    mostrarTexto("contadorAusentes", ausentes);
    mostrarTexto("contadorTotal", total);
}

registrarAsistencia = function(){
    limpiarMensajesError();
    
    let idEstudiante = recuperarTexto("txtIdEstudiante");
    let estado = recuperarTexto("selectEstado");
    
    let validacionCorrecta = validarCamposAsistencia(idEstudiante, estado);
    
    if (validacionCorrecta) {
        // Cargar estudiantes desde el sistema principal
        let estudianteEncontrado = buscarEstudiante(idEstudiante);
        
        if (estudianteEncontrado === null) {
            mostrarTexto("lblErrorIdAsistencia", "No existe un estudiante con este ID");
            return;
        }
        
        // Verificar si ya existe asistencia para este estudiante
        let asistenciaExistente = buscarAsistencia(idEstudiante);
        
        if (asistenciaExistente !== null) {
            // Actualizar estado existente
            asistenciaExistente.estado = estado;
            mostrarMensajeExito("Estado actualizado correctamente");
        } else {
            // Agregar nueva asistencia
            let nuevaAsistencia = {
                id: idEstudiante,
                nombre: estudianteEncontrado.nombre,
                estado: estado
            };
            asistencias.push(nuevaAsistencia);
            mostrarMensajeExito("Asistencia registrada correctamente");
        }
        
        mostrarAsistencias();
        limpiarFormularioAsistencia();
    }
}

buscarAsistencia = function(id) {
    for (let i = 0; i < asistencias.length; i++) {
        if (asistencias[i].id === id) {
            return asistencias[i];
        }
    }
    return null;
}

buscarEstudiante = function(id) {
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].id === id) {
            return estudiantes[i];
        }
    }
    return null;
}

validarCamposAsistencia = function(id, estado) {
    let validacionCorrecta = true;
    
    if (id === "") {
        mostrarTexto("lblErrorIdAsistencia", "El ID es obligatorio");
        validacionCorrecta = false;
    }
    
    if (estado === "") {
        mostrarTexto("lblErrorEstado", "Debe seleccionar un estado");
        validacionCorrecta = false;
    }
    
    return validacionCorrecta;
}

limpiarFormularioAsistencia = function() {
    mostrarTextoEnCaja("txtIdEstudiante", "");
    mostrarTextoEnCaja("selectEstado", "");
    limpiarMensajesError();
}

limpiarMensajesError = function() {
    mostrarTexto("lblErrorIdAsistencia", "");
    mostrarTexto("lblErrorEstado", "");
}

mostrarMensajeExito = function(mensaje) {
    let successMessage = document.getElementById("successMessageAsistencia");
    successMessage.textContent = mensaje;
    successMessage.style.display = "block";
    
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
}

// INICIALIZACIÓN
inicializarAsistencia = function() {
    mostrarAsistencias();
    
    document.getElementById("btnRegistrar").addEventListener("click", registrarAsistencia);
    document.getElementById("btnLimpiarAsistencia").addEventListener("click", limpiarFormularioAsistencia);
    
    document.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            registrarAsistencia();
        }
    });
}