let esNuevo = false;
let roles = [];
let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0150560811",nombre:"Mateo",apellido:"Molina",sueldo:630.0}
];

// EMPLEADO


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
    deshabilitarBotonGuardarRol(); 
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarRoles(); 
    mostrarTotales(); 
}

//FUNCIONES EMPLEADOS

mostrarEmpleados = function(){
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table class='tabla-estilo'><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>";
    
    for (let i = 0; i < empleados.length; i++){
        let elementoEmpleado = empleados[i];
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
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula === cedula) {
            return empleados[i];
        }
    }
    return null;
}

agregarEmpleado = function(empleado){
    let empleadoExistente = buscarEmpleado(empleado.cedula);
    if (empleadoExistente === null) {
        empleados.push(empleado);
        return true; 
    }
    return false;
}

//GUARDADO Y VALIDACIÓN

guardar = function(){
    limpiarMensajesError();
    
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");
    
    let validacionCorrecta = validarCampos(cedula, nombre, apellido, sueldo);
    
    if (validacionCorrecta) {
        if (esNuevo) {
            let nuevoEmpleado = {cedula, nombre, apellido, sueldo};
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
    
    if (nombre.length < 3 || !/^[A-Z]+$/.test(nombre)) {
        mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 letras mayúsculas");
        validacionCorrecta = false;
    }
    
    if (apellido.length < 3 || !/^[A-Z]+$/.test(apellido)) {
        mostrarTexto("lblErrorApellido", "El apellido debe tener al menos 3 letras mayúsculas");
        validacionCorrecta = false;
    }
    
    if (isNaN(sueldo) || sueldo < 400 || sueldo > 5000) {
        mostrarTexto("lblErrorSueldo", "El sueldo debe ser un número entre 400 y 5000");
        validacionCorrecta = false;
    }
    
    return validacionCorrecta;
}


//ROL DE PAGOS
buscarPorRol = function() {
    mostrarTexto("lblErrorBusqueda", "");
    let cedulaBusqueda = recuperarTexto("txtBusquedaCedulaRol");

    if (cedulaBusqueda === "") {
        mostrarTexto("lblErrorBusqueda", "Ingrese una cédula para buscar");
        return;
    }

    let empleadoEncontrado = buscarEmpleado(cedulaBusqueda);

    if (empleadoEncontrado === null) {
        alert("EMPLEADO NO EXISTE");
        mostrarTexto("infoCedula", "");
        mostrarTexto("infoNombre", "");
        mostrarTexto("infoSueldo", "");
    } else {
        mostrarTexto("infoCedula", empleadoEncontrado.cedula);
        mostrarTexto("infoNombre", empleadoEncontrado.nombre + " " + empleadoEncontrado.apellido);
        mostrarTexto("infoSueldo", empleadoEncontrado.sueldo.toFixed(2));
    }
}

calcularAporteEmpleado = function(sueldo) {
    return sueldo * 0.0945;
}

calcularAporteEmpleador = function(sueldo) {
    return parseFloat((sueldo * 0.1115).toFixed(2));
}

calcularValorAPagar = function(sueldo, aporte, descuento) {
    return sueldo - aporte - descuento;
}

calcularRol = function() {
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuento = recuperarFloat("txtDescuentos");

    if (isNaN(sueldo) || sueldo <= 0) {
        alert("Debe buscar un empleado válido antes de calcular el rol");
        return;
    }

    if (isNaN(descuento) || descuento < 0) {
        alert("El descuento debe ser un número mayor o igual a 0");
        return;
    }
    
    if (descuento > sueldo) {
        alert("El descuento no puede ser mayor que el sueldo");
        return;
    }

    let aporteEmpleado = calcularAporteEmpleado(sueldo);
    mostrarTexto("infoIESS", aporteEmpleado.toFixed(2));

    let valorAPagar = calcularValorAPagar(sueldo, aporteEmpleado, descuento);
    mostrarTexto("infoPago", valorAPagar.toFixed(2));
    
    habilitarBotonGuardarRol();
}

buscarRol = function(cedula) {
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].cedula === cedula) {
            return roles[i];
        }
    }
    return null;
}

agregarRol = function(rol) {
    let rolExistente = buscarRol(rol.cedula);
    
    if (rolExistente === null) {
        roles.push(rol);
        alert("ROL GUARDADO EXITOSAMENTE");
    } else {
        alert("YA EXISTE UN ROL REGISTRADO PARA LA CÉDULA " + rol.cedula);
    }
}

guardarRol = function() {
    let cedula = recuperarTextoDiv("infoCedula");
    let nombre = recuperarTextoDiv("infoNombre");
    let sueldoTexto = recuperarTextoDiv("infoSueldo");
    let valorAPagarTexto = recuperarTextoDiv("infoPago");
    let aporteEmpleadoTexto = recuperarTextoDiv("infoIESS");
    
    let sueldo = parseFloat(sueldoTexto);
    let valorAPagar = parseFloat(valorAPagarTexto);
    let aporteEmpleado = parseFloat(aporteEmpleadoTexto);
    
    if (cedula === "" || nombre === "" || isNaN(sueldo) || isNaN(valorAPagar) || isNaN(aporteEmpleado)) {
        alert("Complete todos los campos antes de guardar el rol");
        return;
    }
    
    if (valorAPagar === 0) {
        alert("Debe calcular el rol antes de guardar");
        return;
    }
    
    let aporteEmpleador = calcularAporteEmpleador(sueldo);
    
    let nuevoRol = {
        cedula: cedula,
        nombre: nombre,
        sueldo: sueldo,
        valorAPagar: valorAPagar,
        aporteEmpleado: aporteEmpleado,
        aporteEmpleador: aporteEmpleador
    };
    
    agregarRol(nuevoRol);
    
    mostrarTexto("infoCedula", "");
    mostrarTexto("infoNombre", "");
    mostrarTexto("infoSueldo", "");
    mostrarTexto("infoIESS", "0.0");
    mostrarTexto("infoPago", "0.0");
    mostrarTextoEnCaja("txtDescuentos", "");
    mostrarTextoEnCaja("txtBusquedaCedulaRol", "");
    
    deshabilitarBotonGuardarRol();
}

deshabilitarBotonGuardarRol = function() {
    let boton = document.getElementById("btnGuardarRol");
    if (boton) {
        boton.disabled = true;
    }
}

habilitarBotonGuardarRol = function() {
    let boton = document.getElementById("btnGuardarRol");
    if (boton) {
        boton.disabled = false;
    }
}


//RESUMEN
mostrarRoles = function() {
    let cmpTabla = document.getElementById("tablaResumen");
    let contenidoTabla = "<table class='tabla-estilo'><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>VALOR A PAGAR</th>" +
        "<th>APORTE EMPLEADO</th>" +
        "<th>APORTE EMPLEADOR</th>" +
        "</tr>";
    
    for (let i = 0; i < roles.length; i++) {
        let elementoRol = roles[i];
        contenidoTabla +=
            "<tr><td>" + elementoRol.cedula + "</td>" +
            "<td>" + elementoRol.nombre + "</td>" +
            "<td>" + elementoRol.valorAPagar.toFixed(2) + "</td>" +
            "<td>" + elementoRol.aporteEmpleado.toFixed(2) + "</td>" +
            "<td>" + elementoRol.aporteEmpleador.toFixed(2) + "</td>" +
            "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}

mostrarTotales = function() {
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;
    
    for (let i = 0; i < roles.length; i++) {
        let elementoRol = roles[i];
        totalEmpleado += elementoRol.aporteEmpleado;
        totalEmpleador += elementoRol.aporteEmpleador;
        totalAPagar += elementoRol.valorAPagar;
    }
    
    let totalNomina = totalEmpleado + totalEmpleador + totalAPagar;
    
    mostrarTexto("infoTotalPago", totalAPagar.toFixed(2));
    mostrarTexto("infoAporteEmpresa", totalEmpleador.toFixed(2));
    mostrarTexto("infoAporteEmpleado", totalEmpleado.toFixed(2));
    mostrarTexto("infoTotalNomina", totalNomina.toFixed(2));
}