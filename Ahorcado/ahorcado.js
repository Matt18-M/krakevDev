//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta = "";
let intentos = 0;
let coincidencias = 0;
let errores = 0;


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
    
    intentos = 0;
    coincidencias = 0;
    errores = 0;
    
    for (let i = 0; i < 5; i++) {
        mostrarTexto("div" + i, "-");
    }
    
    mostrarAhorcado();
    
    mostrarTextoEnCaja("txtSecreta", "");

    alert("Palabra guardada correctamente. ¡Comienza el juego!");
}


function mostrarLetra(letra, posicion) {
    if (posicion < 0 || posicion > 4) {
        console.error("La posición debe estar entre 0 y 4");
        return;
    }
    
    let idDiv = "div" + posicion;
    mostrarTexto(idDiv, letra);
}


function mostrarAhorcado() {
    let nombreImagen;
    
    if (errores === 0) {
        nombreImagen = "";
    } else if (errores <= 9) {
        let numeroFormateado;
        if (errores < 10) {
            numeroFormateado = "0" + errores;
        } else {
            numeroFormateado = errores;
        }
        nombreImagen = "Ahorcado_" + numeroFormateado + ".png";
    } else {
        nombreImagen = "Ahorcado_09.png";
    }
    mostrarImagen("ahorcadoImagen", nombreImagen);
}


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
            coincidencias++;
        }
    }
    
    if (letrasEncontradas === 0) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
        mostrarAhorcado();
    }
}


function ingresarLetra() {
    intentos++;
    let letra = recuperarTexto("txtLetra");

    if (letra.length === 0) {
        alert("Debe ingresar una letra");
        intentos--; 
        return;
    }
    
    if (letra.length !== 1) {
        alert("Solo debe ingresar una letra");
        intentos--; 
        return;
    }
    
    if (esMayuscula(letra)) {
        validar(letra);
        
        if (coincidencias >= 5) {
            mostrarImagen("ahorcadoImagen", "ganador.gif");
            setTimeout(function() {
                alert("¡HA GANADO! La palabra era: " + palabraSecreta);
                reiniciarJuego();
            }, 2000);
            return;
        }
        
        if (intentos >= 10) {
            mostrarImagen("ahorcadoImagen", "gameOver.gif");
            setTimeout(function() {
                alert("¡HA PERDIDO! La palabra era: " + palabraSecreta);
                reiniciarJuego();
            }, 2000);
            return;
        }
        
        mostrarTextoEnCaja("txtLetra", "");
        
    } else {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
        intentos--;
    }
}


function reiniciarJuego() {
    palabraSecreta = "";
    intentos = 0;
    coincidencias = 0;
    errores = 0;
    
    for (let i = 0; i < 5; i++) {
        mostrarTexto("div" + i, "-");
    }
    
    mostrarAhorcado();
    mostrarTextoEnCaja("txtSecreta", "");
    mostrarTextoEnCaja("txtLetra", "");
}