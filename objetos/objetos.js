probarAtributos = function(){
    let persona = {
        nombre : "Mateo",
        apellido : "Molina",
        edad : 22,
        estaVivo : true
    }

    console.log (persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo==false){
        console.log("no esta vivo");
    }else{
        console.log("si esta vivo");
    }    
}

crearProductos = function (){
    let producto1 = {
        nombre:"Control de PlayStation",
        precio: 59.99,
        stock:8
    }

let producto2 = {
        nombre:"Control de Xbox",
        precio: 69.99,
        stock:12
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);

    if(producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else if(producto2.stock > producto1.stock) {
        console.log("Producto 2 tiene mayor stock");
    } else {
        console.log("Ambos productos tienen el mismo stock");
    }
}