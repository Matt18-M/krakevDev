let esNuevo = false;
let estudiantes = [
    { id: "1001001001", nombre: "Ana García López", correo: "ana.garcia@correo.com" },
    { id: "1001001002", nombre: "Carlos Rodríguez", correo: "carlos.rodriguez@correo.com" },
    { id: "1001001003", nombre: "María Fernández", correo: "maria.fernandez@correo.com" },
    { id: "1001001004", nombre: "José Martínez", correo: "jose.martinez@correo.com" },
    { id: "1001001005", nombre: "Laura González", correo: "laura.gonzalez@correo.com" },
    { id: "1001001006", nombre: "Miguel Hernández", correo: "miguel.hernandez@correo.com" },
    { id: "1001001007", nombre: "Isabel Díaz", correo: "isabel.diaz@correo.com" },
    { id: "1001001008", nombre: "David Sánchez", correo: "david.sanchez@correo.com" },
    { id: "1001001009", nombre: "Elena Ramírez", correo: "elena.ramirez@correo.com" },
    { id: "1001001010", nombre: "Pedro Castro", correo: "pedro.castro@correo.com" }
];


// FUNCIONES PRINCIPALES

mostrarEstudiantes = function(){
    let cmpTabla = document.getElementById("tablaEstudiantes");
    
    if (estudiantes.length === 0) {
        cmpTabla.innerHTML = `
            <div class="empty-message">
                <p>No hay estudiantes registrados.</p>
                <p>Agregue el primero usando el formulario.</p>
            </div>
        `;
        return;
    }
    
    let contenidoTabla = "<table class='tabla-estilo'><tr>" +
        "<th>ID</th>" +
        "<th>NOMBRE</th>" +
        "<th>CORREO</th>" +
        "</tr>";
    
    for (let i = 0; i < estudiantes.length; i++){
        let elementoEstudiante = estudiantes[i];
        contenidoTabla +=
            "<tr><td>" + elementoEstudiante.id + "</td>" +
            "<td>" + elementoEstudiante.nombre + "</td>" +
            "<td>" + elementoEstudiante.correo + "</td>" +
            "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}

deshabilitarCamposFormulario = function () {
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtCorreo");
    deshabilitarComponente("txtId");
    deshabilitarComponente("btnGuardar");
}

ejecutarNuevo = function () {
    esNuevo = true;
    habilitarComponente("txtNombre");
    habilitarComponente("txtCorreo");
    habilitarComponente("txtId");
    habilitarComponente("btnGuardar");
    mostrarTextoEnCaja("txtId", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtCorreo", "");
    limpiarMensajesError();
}

buscarEstudiante = function (id){
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].id === id) {
            return estudiantes[i];
        }
    }
    return null;
}

buscarIndiceEstudiante = function (id){
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].id === id) {
            return i;
        }
    }
    return -1;
}

agregarEstudiante = function(estudiante){
    let estudianteExistente = buscarEstudiante(estudiante.id);
    if (estudianteExistente === null) {
        estudiantes.push(estudiante);
        return true; 
    }
    return false;
}

// ELIMINAR ESTUDIANTE
eliminarEstudiante = function() {
    mostrarTexto("lblErrorEliminar", "");
    let idEliminar = recuperarTexto("txtEliminarId");
    
    if (idEliminar === "") {
        mostrarTexto("lblErrorEliminar", "Ingresa un ID para eliminar.");
        return;
    }
    
    let indiceEstudiante = buscarIndiceEstudiante(idEliminar);
    
    if (indiceEstudiante === -1) {
        mostrarTexto("lblErrorEliminar", "No se encontró un estudiante con ese ID.");
        return;
    }
    
    estudiantes.splice(indiceEstudiante, 1);
    mostrarEstudiantes();
    alert("Estudiante eliminado correctamente.");
    mostrarTextoEnCaja("txtEliminarId", "");
    guardarEstudiantes();
}

// GUARDADO Y VALIDACIÓN

guardar = function(){
    limpiarMensajesError();
    
    let id = recuperarTexto("txtId");
    let nombre = recuperarTexto("txtNombre");
    let correo = recuperarTexto("txtCorreo");
    
    let validacionCorrecta = validarCampos(id, nombre, correo);
    
    if (validacionCorrecta) {
        if (esNuevo) {
            let nuevoEstudiante = {id, nombre, correo};
            let resultado = agregarEstudiante(nuevoEstudiante);
            
            if (resultado) {
                mostrarMensajeExito("ESTUDIANTE GUARDADO CORRECTAMENTE");
                mostrarEstudiantes();
                deshabilitarCamposFormulario();
                esNuevo = false; 
                guardarEstudiantes();
            } else {
                alert("YA EXISTE UN ESTUDIANTE CON EL ID " + id);
            }
        } else {
            let estudianteExistente = buscarEstudiante(id);
            if (estudianteExistente !== null) {
                estudianteExistente.nombre = nombre;
                estudianteExistente.correo = correo;
                mostrarMensajeExito("ESTUDIANTE MODIFICADO EXITOSAMENTE");
                mostrarEstudiantes(); 
                deshabilitarCamposFormulario(); 
                guardarEstudiantes();
            }
        }
    }
}

limpiar = function() {
    mostrarTextoEnCaja("txtId", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtCorreo", "");
    limpiarMensajesError();
    
    if (!esNuevo) {
        deshabilitarCamposFormulario();
    }
}

ejecutarBusqueda = function() {
    mostrarTexto("lblErrorBusqueda", "");
    let idBusqueda = recuperarTexto("txtBusquedaId");
    
    if (idBusqueda === "") {
        mostrarTexto("lblErrorBusqueda", "Ingrese un ID para buscar");
        return;
    }
    
    let estudianteEncontrado = buscarEstudiante(idBusqueda);
    
    if (estudianteEncontrado === null) {
        alert("ESTUDIANTE NO EXISTE");
    } else {
        mostrarTextoEnCaja("txtId", estudianteEncontrado.id);
        mostrarTextoEnCaja("txtNombre", estudianteEncontrado.nombre);
        mostrarTextoEnCaja("txtCorreo", estudianteEncontrado.correo);
        
        habilitarComponente("txtNombre");
        habilitarComponente("txtCorreo");
        habilitarComponente("btnGuardar");
        deshabilitarComponente("txtId");
        esNuevo = false;
    }
}

limpiarMensajesError = function() {
    mostrarTexto("lblErrorId", "");
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorCorreo", "");
    mostrarTexto("lblErrorBusqueda", "");
    mostrarTexto("lblErrorEliminar", "");
}

validarCampos = function(id, nombre, correo) {
    let validacionCorrecta = true;
    
    if (id === "") {
        mostrarTexto("lblErrorId", "El ID es obligatorio");
        validacionCorrecta = false;
    } else if (!/^\d+$/.test(id)) {
        mostrarTexto("lblErrorId", "El ID debe contener solo números");
        validacionCorrecta = false;
    }
    
    if (nombre === "") {
        mostrarTexto("lblErrorNombre", "El nombre es obligatorio");
        validacionCorrecta = false;
    } else if (!/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/.test(nombre)) {
        mostrarTexto("lblErrorNombre", "El nombre solo puede contener letras y espacios");
        validacionCorrecta = false;
    } else if (!/^[A-ZÁÉÍÓÚÑ]/.test(nombre)) {
        mostrarTexto("lblErrorNombre", "La primera letra debe ser mayúscula");
        validacionCorrecta = false;
    }
    
    if (correo === "") {
        mostrarTexto("lblErrorCorreo", "El correo es obligatorio");
        validacionCorrecta = false;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            mostrarTexto("lblErrorCorreo", "Ingrese un correo válido");
            validacionCorrecta = false;
        }
    }
    
    return validacionCorrecta;
}

mostrarMensajeExito = function(mensaje) {
    let successMessage = document.getElementById("successMessage");
    successMessage.textContent = mensaje;
    successMessage.style.display = "block";
    
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
}

// LOCAL STORAGE
guardarEstudiantes = function() {
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
}

cargarEstudiantes = function() {
    let estudiantesGuardados = localStorage.getItem('estudiantes');
    if (estudiantesGuardados) {
        estudiantes = JSON.parse(estudiantesGuardados);
        mostrarEstudiantes();
    }
}

// INICIALIZACIÓN
inicializar = function() {
    cargarEstudiantes();
    deshabilitarCamposFormulario();
    
    document.getElementById("btnNuevo").addEventListener("click", ejecutarNuevo);
    document.getElementById("btnGuardar").addEventListener("click", guardar);
    document.getElementById("btnLimpiar").addEventListener("click", limpiar);
    document.getElementById("btnBuscar").addEventListener("click", ejecutarBusqueda);
    document.getElementById("btnEliminar").addEventListener("click", eliminarEstudiante);
}

window.onload = inicializar;