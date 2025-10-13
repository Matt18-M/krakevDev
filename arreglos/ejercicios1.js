let notas = [];


agregarElementos = function(){
    notas.push(5);
    notas.push(10);

    console.log(notas.length);
}

recorrerAreglo = function(){
    let notaR;
    for(let indice=0;indice<notas.length;indice++){
    notaR = notas[indice];
    console.log(notaR);

    }
}

probarAgregar = function(){
    let notaRecuperada = recuperarInt("txtNota");
        agregarNota(notaRecuperada);
}

agregarNota = function(nota){
    notas.push(nota);
}

//RETO 41

calcularPromedio = function(){
let sumaNotas = 0;
let promedio;

for(let i=0;i<notas.length;i++){
    sumaNotas = sumaNotas + notas[i];
}
promedio = sumaNotas/notas.length;

return promedio;
}

ejecutarPromedio = function(){
    let promedioCalculado = calcularPromedio();
    mostrarTexto("lblPromedio", promedioCalculado);
}