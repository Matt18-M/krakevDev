validarPlaca = function() {
    // 1. Obtener el valor ingresado por el usuario en la caja de texto
    let placa = recuperarTexto("txtPlaca");
    
    // 2. Invocar a validarEstructura y guardar el retorno en una variable erroresEstructura
    let erroresEstructura = validarEstructura(placa);
    
    // 3. Si erroresEstructura es null, significa que no hubo errores
    if (erroresEstructura === null) {
        // Mostrar un mensaje ESTRUCTURA VALIDA
        mostrarTexto("lblResultados", "ESTRUCTURA VALIDA");
        
        // SOLAMENTE SI LA ESTRUCTURA ES CORRECTA:
        // Invocar a obtenerProvincia y guardar el resultado en una variable
        let provincia = obtenerProvincia(placa);
        
        // Si el valor obtenido no es null, mostrar la provincia en pantalla
        if (provincia !== null) {
            mostrarTexto("lblProvincia", "Provincia: " + provincia);
        } else {
            // Si es null, mostrar un mensaje provincia incorrecta
            mostrarTexto("lblProvincia", "PROVINCIA INCORRECTA");
        }
        
        // Invocar a obtenerTipoVehiculo y guardar el resultado en una variable
        let tipoVehiculo = obtenerTipoVehiculo(placa);
        
        // Si el valor obtenido no es null, mostrar el tipo en pantalla
        if (tipoVehiculo !== null) {
            mostrarTexto("lblTipoVehiculo", "Tipo de vehículo: " + tipoVehiculo);
        } else {
            // Si es null, mostrar un mensaje tipo de vehículo incorrecto
            mostrarTexto("lblTipoVehiculo", "TIPO DE VEHÍCULO INCORRECTO");
        }
        
        // 14. Invocar a obtenerDiaPicoYPlaca y guardar el resultado en una variable
        let diaPicoYPlaca = obtenerDiaPicoYPlaca(placa);
        
        // Mostrar en pantalla el día que tiene pico y placa
        mostrarTexto("lblDiaPicoYPlaca", "Día de pico y placa: " + diaPicoYPlaca);
        
    } else {
        // Mostrar en pantalla un mensaje ESTRUCTURA INCORRECTA y los errores
        mostrarTexto("lblResultados", "ESTRUCTURA INCORRECTA: " + erroresEstructura);
        // Limpiar los otros campos si hay error de estructura
        mostrarTexto("lblProvincia", "");
        mostrarTexto("lblTipoVehiculo", "");
        mostrarTexto("lblDiaPicoYPlaca", "");
    }
}

function limpiar() {
    // Limpiar la caja de texto de la placa
    mostrarTexto("txtPlaca", "");
    
    // Limpiar todos los labels de resultados
    mostrarTexto("lblResultados", "");
    mostrarTexto("lblProvincia", "");
    mostrarTexto("lblTipoVehiculo", "");
    mostrarTexto("lblDiaPicoYPlaca", "");
    
}