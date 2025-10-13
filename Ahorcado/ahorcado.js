//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta = "";

function esMayuscula(caracter) {
    let mayuscula = caracter.charCodeAt(0);
    if (mayuscula >= 65 && mayuscula <= 90) {
        return true;
    } else {  
        return false;
    }
}

function guardarPalabra() {
    let palabra = recuperarTexto("txtSecreta");
    
    if (palabra.length !== 5) {
        alert('Debe ingresar una palabra de exactamente 5 letras mayúsculas');
        return;
    }
    
    let todosMayusculas = true;
    for (let i = 0; i < palabra.length; i++) {
        let caracter = palabra[i];
        
        if (!esMayuscula(caracter)) {
            todosMayusculas = false;
        }
    }
    if (!todosMayusculas) {
        alert('Debe ingresar una palabra de exactamente 5 letras mayúsculas');
        return;
    }

    palabraSecreta = palabra;
    mostrarTextoEnCaja("txtSecreta", "");
    alert("Palabra guardada correctamente");
}

function mostrarLetra(letra, posicion) {
    if (posicion < 0 || posicion > 4) {
        console.error("La posición debe estar entre 0 y 4");
        return;
    }
    
    let idDiv = "div" + posicion;
    
    mostrarTexto(idDiv, letra);
}

// Función validar
function validar(letra) {
    let letrasEncontradas = 0;
    
    if (!palabraSecreta) {
        alert("Primero debe guardar una palabra secreta");
        return;
    }
    
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
        }
    }
}

function ingresarLetra() {
    let letra = recuperarTexto("txtLetra");
    
    if (letra.length === 0) {
        alert("Debe ingresar una letra");
        return;
    }
    
    if (letra.length !== 1) {
        alert("Solo debe ingresar una letra");
        return;
    }
    
    if (esMayuscula(letra)) {
        
        validar(letra);
        mostrarTextoEnCaja("txtLetra", "");
    } else {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
}