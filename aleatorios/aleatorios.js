function generarNumeroAleatorio() {
    return parseInt(Math.random() * 100) + 1;
}

let aleatorios = [];


function generarAleatorios() {
    aleatorios = [];
    
    let numero = recuperarInt("txtNumero");
    
    if (isNaN(numero) || numero < 5 || numero > 20) {
        alert("Por favor, ingrese un número válido entre 5 y 20");
        return;
    }
    
    for (let i = 0; i < numero; i++) {
        console.log("Índice: " + i);
        
        let numeroAleatorio = generarNumeroAleatorio();
        aleatorios.push(numeroAleatorio);
    }
    
    mostrarResultados(aleatorios);
}


function mostrarResultados(arregloNumeros) {
    let divTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table>";
    

    contenidoTabla += "<tr><th>Índice</th><th>Número Aleatorio</th></tr>";
    
    for (let i = 0; i < arregloNumeros.length; i++) {
        contenidoTabla += "<tr>";
        contenidoTabla += "<td>" + i + "</td>";
        contenidoTabla += "<td>" + arregloNumeros[i] + "</td>";
        contenidoTabla += "</tr>";
    }
    
    contenidoTabla += "</table>";
    divTabla.innerHTML = contenidoTabla;
}