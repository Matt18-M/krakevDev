// Variables globales
let puntosUsuario = 0;
let puntosComputador = 0;

function jugar(seleccionado) {
    let seleccionComputadora = generarElemento();
    let rutaComputadora = generarRuta(seleccionComputadora);

    mostrarImagen('imgComputadora', rutaComputadora);
    
    let resultado = determinarGanador(seleccionado, seleccionComputadora);
    

    if (resultado === 1) {
        puntosUsuario = puntosUsuario + 1;
        mostrarTexto('mensajeResultado', "GANASTE LA PARTIDA!!");
    } else if (resultado === 2) {
        puntosComputador = puntosComputador + 1;
        mostrarTexto('mensajeResultado', "PERDISTE LA PARTIDA!!");
    } else {
        mostrarTexto('mensajeResultado', "EMPATE");
    }
    
    //Mostrar Resultados
    mostrarTexto('puntosUsuario', "Tus puntos: " + puntosUsuario);
    mostrarTexto('puntosComputador', "Puntos computadora: " + puntosComputador);
    
    //Mostrar las selecciones
    mostrarTexto('seleccionJugador', "Tú elegiste: " + seleccionado);
    mostrarTexto('seleccionComputadora', "Computadora eligió: " + seleccionComputadora);
    
    if (puntosUsuario === 5) {
        mostrarTexto('mensajeGanador', "¡HAS GANADO EL JUEGO!");
    } else if (puntosComputador === 5) {
        mostrarTexto('mensajeGanador', "¡EL COMPUTADOR TE HA VENCIDO!");
    }
}


function limpiar() {
    puntosUsuario = 0;
    puntosComputador = 0;
    
    mostrarTexto('mensajeResultado', "");
    mostrarTexto('mensajeGanador', "");
    
    mostrarTexto('puntosUsuario', "Tus puntos: 0");
    mostrarTexto('puntosComputador', "Puntos computadora: 0");
    
    mostrarTexto('seleccionJugador', "Elige una opción arriba");
    mostrarTexto('seleccionComputadora', "La computadora elegirá al azar");
    
    mostrarImagen('imgComputadora', ""); 
}