calcularPromedioNotas = function(){
    let n1;
    let n1Float;
    let n2;
    let n2Float;
    let n3;
    let n3Float;
    let promedio;
    let promedioFinal;

    n1 = recuperarTexto("nota1");
    n1Float = parseFloat(n1);
    n2 = recuperarTexto("nota2");
    n2Float = parseFloat(n2);
    n3 = recuperarTexto("nota3");
    n3Float = parseFloat(n3);

    promedio = calcularPromedio(n1Float, n2Float, n3Float);
    promedioFinal = promedio.toFixed(2);

    mostrarTexto("lblResultado", promedioFinal);
if(promedioFinal < 5 && promedioFinal > 0){
    mostrarTexto("lblTexto", "Reprobado");
    mostrarImagen("imgResultado", "img/reprobado.gif");
} else if(promedioFinal >= 5 && promedioFinal <= 8){
    mostrarTexto("lblTexto", "Aprobado");
    mostrarImagen("imgResultado", "img/bueno.gif");
    
    
} else if(promedioFinal > 8 && promedioFinal <= 10)
    {
    mostrarTexto("lblTexto", "Excelente");
    mostrarImagen("imgResultado", "img/perfect.gif");
}else{
    mostrarTexto("lblResultado", "DATOS INCORRECTOS");
    mostrarImagen("imgResultado", "img/error.gif");
}

} 

