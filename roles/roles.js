let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0150560811",nombre:"Mateo",apellido:"Molina",sueldo:630.0}
]

mostrarEmpleados = function(){
        let cmpTabla = document.getElementById("tablaEmpleados");
        let conetenidoTabla = "<table class='tabla-estilo'>" + "<tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>";
        let elementoEmpleado;
        for (let i = 0; i < empleados.length; i++){
                elementoEmpleado=empleados[i];
                conetenidoTabla +=
                "<tr><td>" + elementoEmpleado.cedula + "</td>"
                + "<td>" + elementoEmpleado.nombre + "</td>"
                + "<td>" + elementoEmpleado.apellido + "</td>"
                + "<td>" + elementoEmpleado.sueldo + "</td>"
                +"</tr>"
        }
        conetenidoTabla += "</table>"
        cmpTabla.innerHTML=conetenidoTabla;
    }

function mostrarOpcionEmpleado() {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
}

function mostrarOpcionRol() {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

function mostrarOpcionResumen() {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}