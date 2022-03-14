"use strict"
let nodoTabla = undefined;

function CrearEncabezado(){
    nodoTabla = document.createElement("table");
    let contenedor = document.getElementById("table.js");
    contenedor.appendChild(nodoTabla);

    let nodoFilaEncabezado = document.createElement("tr");
    nodoTabla.appendChild(nodoFilaEncabezado);

    let nodoEncabezado1 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado1);
    let codigoHeading1 = document.createTextNode("Codigo");
    nodoEncabezado1.appendChild(codigoHeading1);

    let nodoEncabezado2 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado2);
    let descripHeading1 = document.createTextNode("Descripcion");
    nodoEncabezado2.appendChild(descripHeading1);

    let nodoEncabezado3 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado3);
    let valorHeading1 = document.createTextNode("Valor Unitario");
    nodoEncabezado3.appendChild(valorHeading1);

    let nodoEncabezado4 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado4);
    let unidadesHeading1 = document.createTextNode("Unidades en Stock");
    nodoEncabezado4.appendChild(unidadesHeading1);

    nodoTabla.setAttribute("class", "table-style");
    nodoTabla.setAttribute("id","table-stock");

}
function validarTabla(){
    if (!document.getElementById("table-stock")) {
        CrearEncabezado();
    }

}
function cargarProducto(){
    if (validarFormulario()){
    validarTabla();

    let inputcodigo = document.getElementById("codigo").value;
    let inputcodigoNodo = document.createTextNode(inputcodigo);
    
    let inputDescripcion = document.getElementById("descripcion").value;
    let inputDescripcionNodo = document.createTextNode(inputDescripcion);

    let inputValor = document.getElementById("valorUnitario").value;
    let inputValorNodo = document.createTextNode(inputValor);

    let inputUnidades = document.getElementById("unidadesStock").value;
    let inputUnidadesNodo = document.createTextNode(inputUnidades);

    cargarInfoTabla(inputcodigoNodo,inputDescripcionNodo, inputValorNodo, inputUnidadesNodo);
    }
}
function cargarInfoTabla(codigo, Descripcion, valorUnitario, unidadesStock){
    
    let nodoProducto = document.createElement("tr")
    nodoTabla.appendChild(nodoProducto);

    let nodoCodigoTD = document.createElement("td");
    nodoProducto.appendChild(nodoCodigoTD);
    nodoCodigoTD.appendChild(codigo);

    let nodoDescTD = document.createElement("td");
    nodoProducto.appendChild(nodoDescTD);
    nodoDescTD.appendChild(Descripcion);

    let nodoValorTD = document.createElement("td");
    nodoProducto.appendChild(nodoValorTD);
    nodoValorTD.appendChild(valorUnitario);

    let nodoUnidadesTD = document.createElement("td");
    nodoProducto.appendChild(nodoUnidadesTD);
    nodoUnidadesTD.appendChild(unidadesStock);
    
    limpiarFormulario();
    
}
function limpiarFormulario(){
    document.getElementById("codigo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("valorUnitario").value = "";
    document.getElementById("unidadesStock").value = "";
    document.getElementById("codigo").focus();

}
function validarFormulario(){
    let inputcodigo = document.getElementById("codigo").value.trim();
    if(inputcodigo == ""){
        alert("Porfavor, ingrese el codigo");
        document.getElementById("codigo").focus();
        return false;
    }
    let inputDescripcion = document.getElementById("descripcion").value.trim();
    if(inputDescripcion == ""){
        alert("Porfavor, ingrese la descripcion");
        document.getElementById("descripcion").focus();
        return false;
    }
    let inputValor = document.getElementById("valorUnitario").value.trim();
    if(inputValor == ""){
        alert("Porfavor, ingrese el valor unitario");
        document.getElementById("valorUnitario").focus();
        return false;
    }
    let inputUnidades = document.getElementById("unidadesStock").value.trim();
    if(inputUnidades == ""){
        alert("Porfavor, ingrese las unidades en stock");
        document.getElementById("unidadesStock").focus();
        return false;
    }
    return true;

}