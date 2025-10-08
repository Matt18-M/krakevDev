ejecutarPrueba1 = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

recorrerCadena = function(cadena){
    let caracter;

    // Validar que la cadena no esté vacía
    if(!cadena || cadena.length === 0){
        console.log("La cadena está vacía");
        return;
    }

    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);
    }

    for(let posicion=0;posicion<= cadena.length-1;posicion++){
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " posicion " + posicion);
    }
}

function invertirCadena() {
    let cadena = recuperarTexto("txtInvertir");
    let resultado = "";
    
    for(let letra = cadena.length - 1; letra >= 0; letra--) {
        resultado += cadena.charAt(letra);
    }    
    cambiarTexto("lblInvertir", resultado);  
}