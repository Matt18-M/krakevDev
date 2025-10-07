function obtenerAleatorio() {
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorNumero;

    aleatorio = Math.random(); // entre 0 y 1
    numeroMultiplicado = aleatorio * 3; // entre 0 y 3
    numeroEntero = parseInt(numeroMultiplicado); // entre 0 y 2
    valorNumero = numeroEntero + 1; // entre 1 y 3

    return valorNumero;
}

function generarElemento() {
    let numero = obtenerAleatorio();
    
    if (numero === 1) {
        return "piedra";
    } else if (numero === 2) {
        return "papel";
    } else if (numero === 3) {
        return "tijera";
    }
}

determinarGanador = function(eleccionJugador1, eleccionJugador2){
    if (eleccionJugador1 === eleccionJugador2) {
        return 0;
    }
    
    if (
        (eleccionJugador1 === "piedra" && eleccionJugador2 === "tijera") ||
        (eleccionJugador1 === "papel" && eleccionJugador2 === "piedra") ||
        (eleccionJugador1 === "tijera" && eleccionJugador2 === "papel")
    ) {
        return 1;
    }else{
        return 2;
    }
}

generarRuta = function(nombre){
    return "./img/" + nombre + ".png";
}