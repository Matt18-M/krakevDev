saludar=function(){
    //recuperar el valor de la caja de texto txtNombre
    let nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txtApellido
    let apellido=recuperarTexto("txtApellido");

    let edad=recuperarInt("txtEdad");
    let estatura=recuperarFloat("txtEstatura");

    let mensajeBienvenida="Bienvenido " + nombre + " " + apellido;
    mostrarTexto("lblResultado", mensajeBienvenida);
    
    mostrarImagen("imgSaludo","./imagenes/saludo.gif");
    mostrarTextoEnCaja("txtNombre", "");

}

mostrarTexto = function(idComponente,mensaje){
let componente;
componente=document.getElementById(idComponente);
componente.innerText = mensaje;
}


mostrarImagen = function(idComponente, rutaImagen){
let componente;
componente=document.getElementById(idComponente);
componente.src = rutaImagen;
}

mostrarTextoEnCaja = function(idComponente,mensaje){
let componente;
componente=document.getElementById(idComponente);
componente.value = mensaje;
}

recuperarTexto = function(idComponente){
let componente;
let valorIngresado;
componente = document.getElementById(idComponente);
valorIngresado = componente.value;
return valorIngresado;

}

recuperarInt = function (idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function (idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorCaja);
    return valorFloat;
}