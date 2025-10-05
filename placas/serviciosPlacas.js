validarEstructura = function(placa){
    let mensajeError = "";
    let hayErrores = false;
    
    // Paso 1: verificar longitud (7 u 8)
    if(placa.length !== 7 && placa.length !== 8){
        mensajeError = "La placa debe tener 7 u 8 caracteres";
        hayErrores = true;
    } else {
        // Validar cada posición individualmente
        if(!esMayuscula(placa.charAt(0))){
            mensajeError = "El primer carácter debe ser una letra mayúscula";
            hayErrores = true;
        } else if(!esMayuscula(placa.charAt(1))){
            mensajeError = "El segundo carácter debe ser una letra mayúscula";
            hayErrores = true;
        } else if(!esMayuscula(placa.charAt(2))){
            mensajeError = "El tercer carácter debe ser una letra mayúscula";
            hayErrores = true;
        } else if(!esGuion(placa.charAt(3))){
            mensajeError = "El cuarto carácter debe ser un guión";
            hayErrores = true;
        } else if(!esDigito(placa.charAt(4))){
            mensajeError = "El quinto carácter debe ser un dígito";
            hayErrores = true;
        } else if(!esDigito(placa.charAt(5))){
            mensajeError = "El sexto carácter debe ser un dígito";
            hayErrores = true;
        } else if(!esDigito(placa.charAt(6))){
            mensajeError = "El séptimo carácter debe ser un dígito";
            hayErrores = true;
        } else if(placa.length === 8 && !esDigito(placa.charAt(7))){
            mensajeError = "El octavo carácter debe ser un dígito";
            hayErrores = true;
        } else {
            mensajeError = "";
        }
    }
    
    // Retornar null si no hay errores, o el string con el error
    if(!hayErrores){
        return null;
    } else {
        return mensajeError;
    }
}


function obtenerProvincia(placa) {
    if (!placa || placa.length === 0) {
        return null;
    }
    
    function aMayuscula(letra) {
        if (letra >= 'a' && letra <= 'z') {
            return String.fromCharCode(letra.charCodeAt(0) - 32);
        }
        return letra;
    }
    
    let primeraLetra = aMayuscula(placa.charAt(0));
    
    // Usando if con && (MUCHO MÁS LARGO Y MENOS EFICIENTE)
    if (primeraLetra === 'A') return 'Azuay';
    if (primeraLetra === 'B') return 'Bolívar';
    if (primeraLetra === 'U') return 'Cañar';
    if (primeraLetra === 'C') return 'Carchi';
    if (primeraLetra === 'X') return 'Cotopaxi';
    if (primeraLetra === 'H') return 'Chimborazo';
    if (primeraLetra === 'O') return 'El Oro';
    if (primeraLetra === 'E') return 'Esmeraldas';
    if (primeraLetra === 'W') return 'Galápagos';
    if (primeraLetra === 'G') return 'Guayas';
    if (primeraLetra === 'I') return 'Imbabura';
    if (primeraLetra === 'L') return 'Loja';
    if (primeraLetra === 'R') return 'Los Ríos';
    if (primeraLetra === 'M') return 'Manabí';
    if (primeraLetra === 'V') return 'Morona Santiago';
    if (primeraLetra === 'N') return 'Napo';
    if (primeraLetra === 'S') return 'Pastaza';
    if (primeraLetra === 'P') return 'Pichincha';
    if (primeraLetra === 'K') return 'Sucumbíos';
    if (primeraLetra === 'Q') return 'Orellana';
    if (primeraLetra === 'T') return 'Tungurahua';
    if (primeraLetra === 'Z') return 'Zamora Chinchipe';
    if (primeraLetra === 'Y') return 'Santa Elena';
    if (primeraLetra === 'J') return 'Santo Domingo de los Tsáchilas';
    
    return null;
}

function obtenerTipoVehiculo(placa) {
    // Verificar que la placa tenga al menos dos caracteres
    if (!placa || placa.length < 2) {
        return null;
    }
    
    // Obtener el segundo carácter de la placa
    let segundoCaracter = placa.charAt(1).toUpperCase();
    
    // Determinar el tipo de vehículo usando if con &&
    if (segundoCaracter >= 'A' && segundoCaracter <= 'X') {
        return 'Comercial';
    } else if (segundoCaracter === 'Y') {
        return 'Particular';
    } else if (segundoCaracter === 'Z') {
        return 'Gubernamental';
    } else if (segundoCaracter >= '0' && segundoCaracter <= '9') {
        return 'Particular';
    } else {
        return null;
    }
}

function obtenerDiaPicoYPlaca(placa) {
    if (!placa || placa.length === 0) {
        return null;
    }
    
    let ultimoCaracter = placa.charAt(placa.length - 1);
    
    // Usando if con &&
    if (ultimoCaracter === '1' || ultimoCaracter === '2') {
        return 'Lunes';
    } else if (ultimoCaracter === '3' || ultimoCaracter === '4') {
        return 'Martes';
    } else if (ultimoCaracter === '5' || ultimoCaracter === '6') {
        return 'Miércoles';
    } else if (ultimoCaracter === '7' || ultimoCaracter === '8') {
        return 'Jueves';
    } else if (ultimoCaracter === '9' || ultimoCaracter === '0') {
        return 'Viernes';
    } else {
        return 'Libre circulación';
    }
}