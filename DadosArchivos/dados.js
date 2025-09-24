jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    let ganaste = "ES MAYOR QUE 3, HAS GANADO";
    let perdiste = "ES MENOR O IGUAL QUE 3, HAS PERDIDO";
    cambiarTexto("lblNumero", aleatorio);
    if(aleatorio>3){
        cambiarTexto ("lblResultado", ganaste);
    }else{
        cambiarTexto ("lblResultado", perdiste);
    }
}

//crear una funcion llamada lanzarDado
//no recibe parametros
//retorna un numero aleatorio entre 1 y 6
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;

    aleatorio=Math.random(); //entre 0 y 1
    numeroMultiplicado=aleatorio*6; //entre 0 y 6
    numeroEntero=parseInt(numeroMultiplicado); //entre 0 y 5
    valorDado=numeroEntero+1; //entre 1 y 6

    return valorDado;
}