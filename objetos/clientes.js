let clientes=[
    {cedula:"0150560811",nombre:"Mateo",edad:22},
    {cedula:"0150560812",nombre:"Roberto",edad:20},
    {cedula:"0150560813",nombre:"Paul",edad:21}];


buscarCliente = function(cedula){
    let elementoCliente;
    let clienteEncontrado = null;
    for (let i = 0; i < clientes.length; i++){
            elementoCliente=clientes[i];
    if(elementoCliente.cedula == cedula){
            clienteEncontrado=elementoCliente;
            break;
        }
    }
            return clienteEncontrado;
    }


    AgregarCliente = function(cliente){
        let resultado;
        resultado = buscarCliente(cliente.cedula);
        if(resultado == null){
            clientes.push(cliente);
            alert("CLIENTE AGREGADO");
            mostrarClientes();


        }else{
            alert("YA EXISTE EL CLIENTE CON CEDULA " + cliente.cedula);
        }
    }


    guardarCambios = function(){
        let valorCedula = recuperarTexto("txtCedula");
        let valorNombre = recuperarTexto("txtNombre");
        let valorEdad = recuperarFloat("txtEdad");

        let datosCliente={};
        datosCliente.cedula=valorCedula;
        datosCliente.nombre=valorNombre;
        datosCliente.edad=valorEdad;

        modificarCliente(datosCliente);
        mostrarClientes();
    }


    modificarCliente = function(cliente){
    let clienteEncontrado = buscarCliente(cliente.cedula);
    if(clienteEncontrado != null){
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;
    }
    }


    ejecutarBusqueda = function(){
        let valorCedula = recuperarTexto("txtCedulaBusqueda");
        let cliente = buscarCliente(valorCedula);
        if(cliente == null){
            alert("CLIENTE NO ENCONTRADO");
        }else{
            mostrarTextoEnCaja("txtCedula",cliente.cedula);
            mostrarTextoEnCaja("txtNombre",cliente.nombre);
            mostrarTextoEnCaja("txtEdad",cliente.edad);
        }
    }


    crearCliente = function(){
        let valorCedula = recuperarTexto("txtCedula");
        let valorNombre = recuperarTexto("txtNombre");
        let valorEdad = recuperarFloat("txtEdad");

        let nuevoCliente={};
        nuevoCliente.cedula=valorCedula;
        nuevoCliente.nombre=valorNombre;
        nuevoCliente.edad=valorEdad;

        AgregarCliente(nuevoCliente);
    }


    mostrarClientes = function(){
        let cmpTabla = document.getElementById("tablaClientes");
        let conetenidoTabla = "<table> <tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>EDAD</th>" +
        "</tr>";
        let elementoCliente;
        for (let i = 0; i < clientes.length; i++){
                elementoCliente=clientes[i];
                conetenidoTabla +=
                "<tr><td>" + elementoCliente.cedula + "</td>"
                + "<td>" + elementoCliente.nombre + "</td>"
                + "<td>" + elementoCliente.edad + "</td>"
                +"</tr>"
        }
        conetenidoTabla += "</table>"
        cmpTabla.innerHTML=conetenidoTabla;
    }

