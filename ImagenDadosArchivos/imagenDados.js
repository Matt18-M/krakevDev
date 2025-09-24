let puntos = 0;
let lanzamientos = 5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos(resultado);

}
//si el jugador tiene mas de 20 puntos, mostrar un mensaje "ganaste"
//colocar puntaje en 0 y lanzamientos en 5
//invocar a limpia
modificarPuntos=function(numero){
    puntos = puntos+numero;
    cambiarTexto("lblPuntos", puntos);
    if(puntos > 20){
        cambiarTexto("lblResultado", "GANASTE");    
}

//no recibe parametros
//resta 1 ala variable lanzamientos, guarda el resultado en la variable lanzamientos
//muestra en pantalla la variable lanzamientos
//si lanzamiento llega a 0, mostrar en pantalla un mensaje "GAME OVER"
//invocar limpiar
modificarLanzamientos=function(){
    lanzamientos = lanzamientos -1;
    cambiarTexto("lblLanzamientos", lanzamientos);
    if (lanzamientos == -1) {
        limpiar();
    }else if (lanzamientos == 0) {
    cambiarTexto("lblResultado", "GAME OVER");
    }
}
}

//quitar imagen del dado
//colocar puntaje en 0 y lanzamientos en 5
//mostrar en pantalla puntaje y lanzamientos
limpiar=function(){
    puntos = 0;
    lanzamientos = 5;
    cambiarTexto("lblResultado", "");
    cambiarImagen("imgDado", "");
    cambiarTexto("lblPuntos", puntos);
    cambiarTexto("lblLanzamientos", lanzamientos);
}





//funcion mostrar cara, recibe como parametro el numero que va a mostrar
//muestra la imagen del dado correspondiente al numero
//no retorna nada
mostrarCara = function(numero){
    if(numero == 1){
        cambiarImagen("imgDado", "dados1.png");
    }
    else if(numero == 2){
        cambiarImagen("imgDado", "dados2.png");
    }else if(numero == 3){
        cambiarImagen("imgDado", "dados3.png");
    }else if(numero == 4){
        cambiarImagen("imgDado", "dados4.png");
    }else if(numero == 5){
        cambiarImagen("imgDado", "dados5.png");
    }else if(numero == 6){
        cambiarImagen("imgDado", "dados6.png");
    }
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}