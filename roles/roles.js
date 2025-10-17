let esNuevo = false;

let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0150560811",nombre:"Mateo",apellido:"Molina",sueldo:630.0}
]

// Funciones de navegación
mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarCamposFormulario(); 
}

mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

// Funciones de gestión de empleados
mostrarEmpleados = function(){
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table class='tabla-estilo'><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>";
    
    let elementoEmpleado;
    for (let i = 0; i < empleados.length; i++){
        elementoEmpleado = empleados[i];
        contenidoTabla +=
            "<tr><td>" + elementoEmpleado.cedula + "</td>" +
            "<td>" + elementoEmpleado.nombre + "</td>" +
            "<td>" + elementoEmpleado.apellido + "</td>" +
            "<td>" + elementoEmpleado.sueldo + "</td>" +
            "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}

deshabilitarCamposFormulario = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

ejecutarNuevo = function () {
    esNuevo = true;
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}

buscarEmpleado = function (cedula){
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula === cedula) {
            empleadoEncontrado = empleados[i];
            break;
        }
    }
    return empleadoEncontrado;
}

agregarEmpleado = function(empleado){
    let empleadoExistente = buscarEmpleado(empleado.cedula);
    if (empleadoExistente === null) {
        empleados.push(empleado);
        return true; 
    } else {
        return false;
    }
}

// Funciones de guardado y acciones
guardar = function(){
    limpiarMensajesError();
    
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");
    
    let validacionCorrecta = validarCampos(cedula, nombre, apellido, sueldo);
    
    if (validacionCorrecta) {
        if (esNuevo) {
            // Crear nuevo empleado
            let nuevoEmpleado = {
                cedula: cedula,
                nombre: nombre,
                apellido: apellido,
                sueldo: sueldo
            };
            
            let resultado = agregarEmpleado(nuevoEmpleado);
            
            if (resultado) {
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                deshabilitarCamposFormulario();
                esNuevo = false; 
            } else {
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + cedula);
            }
        } else {
            let empleadoExistente = buscarEmpleado(cedula);
            
            if (empleadoExistente !== null) {
                empleadoExistente.nombre = nombre;
                empleadoExistente.apellido = apellido;
                empleadoExistente.sueldo = sueldo;
                
                alert("EMPLEADO MODIFICADO EXITOSAMENTE");
                mostrarEmpleados(); 
                deshabilitarCamposFormulario(); 
            }
        }
    }
}

limpiar = function() {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    limpiarMensajesError();
    
    if (!esNuevo) {
        deshabilitarCamposFormulario();
    }
}

ejecutarBusqueda = function() {
    mostrarTexto("lblErrorBusqueda", "");
    
    let cedulaBusqueda = recuperarTexto("txtBusquedaCedula");
    
    if (cedulaBusqueda === "") {
        mostrarTexto("lblErrorBusqueda", "Ingrese una cédula para buscar");
        return;
    }
    
    let empleadoEncontrado = buscarEmpleado(cedulaBusqueda);
    
    if (empleadoEncontrado === null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTextoEnCaja("txtCedula", empleadoEncontrado.cedula);
        mostrarTextoEnCaja("txtNombre", empleadoEncontrado.nombre);
        mostrarTextoEnCaja("txtApellido", empleadoEncontrado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleadoEncontrado.sueldo);
        
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
        
        deshabilitarComponente("txtCedula");
        
        esNuevo = false;
    }
}

// Funcion de validar
limpiarMensajesError = function() {
    mostrarTexto("lblErrorCedula", "");
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorApellido", "");
    mostrarTexto("lblErrorSueldo", "");
}

validarCampos = function(cedula, nombre, apellido, sueldo) {
    let validacionCorrecta = true;
    
    if (cedula.length !== 10) {
        mostrarTexto("lblErrorCedula", "La cédula debe tener exactamente 10 dígitos");
        validacionCorrecta = false;
    } else if (!/^\d+$/.test(cedula)) {
        mostrarTexto("lblErrorCedula", "La cédula solo debe contener números");
        validacionCorrecta = false;
    }
    
    if (nombre.length < 3) {
        mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 caracteres");
        validacionCorrecta = false;
    } else if (!/^[A-Z]+$/.test(nombre)) {
        mostrarTexto("lblErrorNombre", "El nombre solo debe contener letras mayúsculas");
        validacionCorrecta = false;
    }
    
    if (apellido.length < 3) {
        mostrarTexto("lblErrorApellido", "El apellido debe tener al menos 3 caracteres");
        validacionCorrecta = false;
    } else if (!/^[A-Z]+$/.test(apellido)) {
        mostrarTexto("lblErrorApellido", "El apellido solo debe contener letras mayúsculas");
        validacionCorrecta = false;
    }
    
    if (isNaN(sueldo)) {
        mostrarTexto("lblErrorSueldo", "El sueldo debe ser un número");
        validacionCorrecta = false;
    } else if (sueldo < 400 || sueldo > 5000) {
        mostrarTexto("lblErrorSueldo", "El sueldo debe estar entre 400 y 5000");
        validacionCorrecta = false;
    }
    
    return validacionCorrecta;
}