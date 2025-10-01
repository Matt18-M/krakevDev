calcularValorTotal = function () {

// 1. Recuperar valores
let nombreProducto = recuperarTexto("txtProducto");
let precioProducto = recuperarFloat("txtPrecio");
let cantidad = recuperarInt("txtCantidad");

// 2. Validaciones
let hayErrores = false;

// Validar campo obligatorio - Producto
if (nombreProducto === "") {
    mostrarTexto("errorProducto", "CAMPO OBLIGATORIO");
    hayErrores = true;
} 
// Validar longitud máxima - Producto
else if (nombreProducto.length > 10) {
    mostrarTexto("errorProducto", "MÁXIMO 10 CARACTERES");
    hayErrores = true;
} else {
    mostrarTexto("errorProducto", "");
}

// Validar campo obligatorio y rango - Cantidad
if (isNaN(cantidad)) {
    mostrarTexto("errorCantidad", "CAMPO OBLIGATORIO");
    hayErrores = true;
} else if (cantidad < 0 || cantidad > 100) {
    mostrarTexto("errorCantidad", "DEBE SER ENTRE 0 Y 100");
    hayErrores = true;
} else {
    mostrarTexto("errorCantidad", "");
}

// Validar campo obligatorio y rango - Precio
if (isNaN(precioProducto)) {
    mostrarTexto("errorPrecio", "CAMPO OBLIGATORIO");
    hayErrores = true;
} else if (precioProducto < 0 || precioProducto > 50) {
    mostrarTexto("errorPrecio", "DEBE SER ENTRE 0 Y 50");
    hayErrores = true;
} else {
    mostrarTexto("errorPrecio", "");
}

// 3. Si no hay errores, realizar cálculos
if (hayErrores == false) {
    // Calcular subtotal
    let valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    mostrarTexto("lblSubtotal", valorSubtotal.toFixed(2));

    // Calcular descuento según cantidad
    let valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
    mostrarTexto("lblDescuento", valorDescuento.toFixed(2));

    // Calcular IVA sobre subtotal - descuento
    let baseImponible = valorSubtotal - valorDescuento;
    let valorIVA = calcularIVA(baseImponible);
    mostrarTexto("lblValorIVA", valorIVA.toFixed(2));

    // Calcular total
    let valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    mostrarTexto("lblTotal", valorTotal.toFixed(2));

    // Mostrar resumen
    mostrarTexto("lblResumen", 
        "Valor a pagar por " + cantidad + " " + nombreProducto + 
        " con descuento aplicado: USD " + valorTotal.toFixed(2));
}


calcularDescuentoPorVolumen = function(subtotal, cantidad){
let porcentaje = 0;
let descuento;

if(cantidad >= 3 && cantidad <=5){
    porcentaje = 0.03;
}else if(cantidad >= 6 && cantidad <=11){
    porcentaje = 0.04;
}else if(cantidad >= 12){
    porcentaje = 0.05;
}

descuento = subtotal * porcentaje;
return descuento;
}

limpiar = function () {

    mostrarTexto("lblSubtotal", 0.0);
    mostrarTexto("lblDescuento", 0.0);
    mostrarTexto("lblValorIVA", 0.0);
    mostrarTexto("lblTotal", 0.0);
    mostrarTexto("lblResumen", "");
}
}
