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
    mostrarNotas();
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

generarTabla = function(){
    let contenidoTabla="";
    let cmpTabla = document.getElementById("divTabla");
    contenidoTabla += "<table><tr><td>UNO</td></tr></table>" + "<table><tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML=contenidoTabla;    
}

mostrarNotas = function(){
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><td>NOTA</td></tr>";
    let miNota;
    for(let i=0;i<notas.length;i++){
        miNota = notas[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNota;
        contenidoTabla+="</td></tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}