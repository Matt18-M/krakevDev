let personas = [
    {nombre:"Marco",edad:18},
    {nombre:"Roberto",edad:15},
    {nombre:"Kate",edad:25},
    {nombre:"Diana",edad:12},
    {nombre:"Benja",edad:5}
];

function encontrarMayor() {
    let personaMayor = personas[0];
    let elementoPersona;
    
    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        console.log("Posición " + i + ": " + elementoPersona.nombre + " - " + elementoPersona.edad + " años");
        
        if (elementoPersona.edad > personaMayor.edad) {
            personaMayor = elementoPersona;
            console.log("Nueva persona mayor: " + personaMayor.nombre + " - " + personaMayor.edad + " años");
        }
    }
    
    return personaMayor;
}

function determinarMayor() {
    mostrarTexto('lblResultadoMayor', '');
    mostrarTexto('lblResultadoMenor', '');
    let mayor = encontrarMayor();
    mostrarTexto('lblResultadoMayor', "PERSONA CON MAYOR EDAD: " + mayor.nombre + " - " + mayor.edad + " años");
}

// Función encontrarMenor
function encontrarMenor() {
    let personaMenor = personas[0];
    let elementoPersona;
    
    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        console.log("Posición " + i + ": " + elementoPersona.nombre + " - " + elementoPersona.edad + " años");
        
        if (elementoPersona.edad < personaMenor.edad) {
            personaMenor = elementoPersona;
            console.log("Nueva persona menor: " + personaMenor.nombre + " - " + personaMenor.edad + " años");
        }
    }
    
    return personaMenor;
}

// Función determinarMenor
function determinarMenor() {
    mostrarTexto('lblResultadoMayor', '');
    mostrarTexto('lblResultadoMenor', '');
    let menor = encontrarMenor();
    mostrarTexto('lblResultadoMenor', "PERSONA CON MENOR EDAD: " + menor.nombre + " - " + menor.edad + " años");
}

function mostrarTablaPersonas() {
    let cmpTabla = document.getElementById("tablaPersonas");
    let contenidoTabla = "<table class='tabla-personas'><tr>" +
        "<th>EDAD</th>" +
        "<th>NOMBRE</th>" +
        "</tr>";
    
    for (let i = 0; i < personas.length; i++) {
        let elementoPersona = personas[i];
        contenidoTabla +=
            "<tr><td>" + elementoPersona.edad + " años</td>" +
            "<td>" + elementoPersona.nombre + "</td>" +
            "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}

function agregarPersona() {
    mostrarTexto('lblErrorNombre', '');
    mostrarTexto('lblErrorEdad', '');
    mostrarTexto('lblMensaje', '');
    mostrarTexto('lblResultadoMayor', '');
    mostrarTexto('lblResultadoMenor', '');
    
    let nombre = recuperarTexto('txtNombre');
    if (nombre.length < 3) {
        mostrarTexto('lblErrorNombre', 'Error: El nombre debe tener al menos 3 caracteres');
        return;
    }
    
    let edad = recuperarInt('txtEdad');
    if (isNaN(edad) || edad < 0 || edad > 100) {
        mostrarTexto('lblErrorEdad', 'Error: La edad debe ser un número entero entre 0 y 100');
        return;
    }
    
    let nuevaPersona = {};
    nuevaPersona.nombre = nombre;
    nuevaPersona.edad = edad;
    personas.push(nuevaPersona);
    
    alert('PERSONA AGREGADA CORRECTAMENTE');
    mostrarTexto('lblMensaje', '¡Persona agregada correctamente!');
    mostrarTablaPersonas();
    mostrarTextoEnCaja('txtNombre', '');
    mostrarTextoEnCaja('txtEdad', '');
}

function limpiar() {
    mostrarTextoEnCaja('txtNombre', '');
    mostrarTextoEnCaja('txtEdad', '');
    mostrarTexto('lblErrorNombre', '');
    mostrarTexto('lblErrorEdad', '');
    mostrarTexto('lblMensaje', '');
    mostrarTexto('lblResultadoMayor', '');
    mostrarTexto('lblResultadoMenor', '');
}


document.addEventListener('DOMContentLoaded', function() {
    mostrarTablaPersonas();
});