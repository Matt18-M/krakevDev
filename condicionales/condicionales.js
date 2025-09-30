calcularTasaInteres = function (ingresoAnual){
    if (ingresoAnual < 300000){
        return 0.16;
    }
    else if (ingresoAnual >= 300000 && ingresoAnual < 500000){
        return 0.15;
    }
    else if (ingresoAnual >= 500000 && ingresoAnual < 1000000){
        return 0.14;
    }
    else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000){
        return 0.13;
    }
    else if(ingresoAnual >= 2000000){
        return 0.12;
    }
}

calcularCapacidadPago = function(edad, ingresos, egresos){
let total= ingresos - egresos;

if(edad > 50){
    return total * 0.30;
}
else if(edad <= 50){
    return total * 0.40;
}
}

calcularDescuento = function(precio, cantidad){
    let descuento = 0;
    let precioTotal = precio * cantidad;
    let totalconDescuento = precioTotal * (1 - descuento);

    if(cantidad < 3 ){
        descuento;
    }
    else if (cantidad >= 3 && cantidad <= 5){
        descuento = 0.02;
    }
    else if (cantidad >= 6 && cantidad <= 11){
        descuento = 0.03;
    }
    else if (cantidad >= 12){
        descuento = 0.04;
    }

    return totalconDescuento;
}

determinarColesterolLDL = function(nivelColesterol){
    if (nivelColesterol < 100){
        return "Bueno";
    }
    else if (nivelColesterol >= 100 && nivelColesterol <= 129){
        return "Casi Bueno";
    }
    else if (nivelColesterol >= 130 && nivelColesterol <= 159){
        return "Estas al Límite";
    }
    else if (nivelColesterol >= 160 && nivelColesterol <= 189){
        return "Riesgo Alto";
    }
    else if(nivelColesterol >= 190){
        return "Riesgo muy Alto";
    }
}

validarClave = function(clave){
    let caracter = clave.length;

    if(caracter > 0 && caracter < 8 ){
        return clave = false;
    }
    else if(caracter => 8 && caracter <= 16 ){
        return clave = true;
    }
    else if(caracter > 16){
        return clave = false;
    }
}

esMayuscula = function(caracter){
let mayuscula = caracter.charCodeAt(0);
    if(mayuscula >= 65 && mayuscula <= 90){
        return true;
}
else{
    return false;
}
}

esMinuscula = function(caracter){
let minuscula = caracter.charCodeAt(0);
    if(minuscula >= 97 && minuscula <= 122){
        return true;
}
else{
    return false;
}
}

esDigito = function (caracter){
let digito = caracter.charCodeAt(0);
    if(digito >= 48 && digito <= 57){
        return true;
}
else{
    return false;
}
}

darPermiso = function(notaMatematica, notaFisica, notaGeometria){
if(notaMatematica >= 90 && notaFisica >= 90 && notaGeometria >= 90){
    return true;
}else{
    return false;
}
}

otorgarPermiso = function(notaMatematica, notaFisica, notaGeometria){
    if(notaMatematica >= 90 || notaFisica >= 90 && notaGeometria >= 80){
        return true;
    }
    else{
        return false;
    }
}

dejarSalir  = function(notaMatematica, notaFisica, notaGeometria){
    if(notaMatematica >= 90 || notaFisica >= 90 || notaGeometria >= 80 && notaFisica > notaMatematica){
        return true;
    }
    else{
        return false;
    }
    }
