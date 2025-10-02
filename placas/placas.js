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
        
    } else {
        // Mostrar en pantalla un mensaje ESTRUCTURA INCORRECTA y los errores
        mostrarTexto("lblResultados", "ESTRUCTURA INCORRECTA: " + erroresEstructura);
    }
}