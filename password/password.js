function validarPassword(password) {
    let mensajesError = "";
    
    if (password.length < 8) {
        mensajesError += "La contraseña debe tener al menos 8 caracteres\n";
    }
    
    if (password.length > 16) {
        mensajesError += "La contraseña debe tener máximo 16 caracteres\n";
    }
    
    let tieneMayuscula = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= "A" && password[i] <= "Z") { 
            tieneMayuscula = true;
        }
    }
    if (!tieneMayuscula) {
        mensajesError += "La contraseña debe tener al menos una letra mayúscula\n";
    }
    
    let tieneDigito = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= "0" && password[i] <= "9") {
            tieneDigito = true;
        }
    }
    if (!tieneDigito) {
        mensajesError += "La contraseña debe tener al menos un dígito\n";
    }
    
    let tieneEspecial = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] === "*" || password[i] === "-" || password[i] === "_") { 
            tieneEspecial = true;
        }
    }
    if (!tieneEspecial) {
        mensajesError += "La contraseña debe tener al menos un carácter especial (*, -, _)\n";
    }
    
    return mensajesError;
}

function ejecutarValidacion() {
    let password = recuperarTexto("password");
    
    let resultadoValidacion = validarPassword(password);
    
    if (resultadoValidacion === "") {
        mostrarTexto("resultado", "Password Correcto");
    } else {
        mostrarTexto("resultado", "Errores de validación:\n" + resultadoValidacion);
    }
}