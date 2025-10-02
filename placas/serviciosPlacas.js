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
    // Verificar que la placa tenga al menos un carácter
    if (!placa || placa.length === 0) {
        return null;
    }
    
    // Obtener la primera letra de la placa
    let primeraLetra = placa.charAt(0).toUpperCase();
    
    // Mapeo de letras a provincias según el sistema de placas de Ecuador
    let mapeoProvincias = {
        'A': 'Azuay',
        'B': 'Bolívar',
        'U': 'Cañar',
        'C': 'Carchi',
        'X': 'Cotopaxi',
        'H': 'Chimborazo',
        'O': 'El Oro',
        'E': 'Esmeraldas',
        'W': 'Galápagos',
        'G': 'Guayas',
        'I': 'Imbabura',
        'L': 'Loja',
        'R': 'Los Ríos',
        'M': 'Manabí',
        'V': 'Morona Santiago',
        'N': 'Napo',
        'S': 'Pastaza',
        'P': 'Pichincha',
        'K': 'Sucumbíos',
        'Q': 'Orellana',
        'T': 'Tungurahua',
        'Z': 'Zamora Chinchipe',
        'Y': 'Santa Elena',
        'J': 'Santo Domingo de los Tsáchilas'
    };
    
    // Retornar el nombre de la provincia o null si no existe
    return mapeoProvincias[primeraLetra] || null;
}