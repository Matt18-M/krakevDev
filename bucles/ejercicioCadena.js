ejecutarPrueba1 = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}


recorrerCadena = function(cadena){
    let caracter;

    for(let posicion = 0; posicion < cadena.length; posicion++){
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);
    }

    for(let posicion = 0; posicion <= cadena.length - 1; posicion++){
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " posicion " + posicion);
    }

}

function invertirCadena(cadena) {
    let resultado = "";
    
    for(let letra = cadena.length - 1; letra >= 0; letra--) {
        resultado += cadena.charAt(letra);
        resultado = resultado + letra;
    }    
mostrarTexto ("lblCadena" + resultado);  
}


