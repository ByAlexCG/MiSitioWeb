"use strict"

class Automovil{
    constructor(marca, modelo, precio, imagen){
        this.Marca = marca;
        this.Modelo = modelo;
        this.Precio = precio;
        this.Imagen = imagen;
    }
}

let auto = new Automovil ("Hp ", "Touring15.6 Pulgadas ", "$2.200.000 ", "img/D_NQ_NP_2X_644680-MCO48795241919_012022-F.jpg")

let auto2 = new Automovil ("Hp ", "240 G7 plateado ", "$1.200.000 ", "img/D_NQ_NP_2X_954041-MLA46302470460_062021-F.jpg")

let auto3 = new Automovil ("Hp ", "255 G7 gris 15.6", "$1.000.000 ", "img/D_NQ_NP_2X_984848-MLA48644126914_122021-F.jpg")

function mostrarVehiculo() {
    let contentPrincipal = document.getElementById("mainContent");
    let contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    let contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    let marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    let textMarca = document.createTextNode(auto.Marca);
    marcaAuto.appendChild(textMarca);

    let modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(auto.Modelo);
    modeloAuto.appendChild(textModelo);

    let precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    let textAuto = document.createTextNode(auto.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")

    //Segundo auto

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto2.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(auto2.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(auto2.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(auto2.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")

    // Tercer auto

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto3.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(auto3.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(auto3.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(auto3.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")
}

//Segunda busqueda

let toyota = new Automovil ("Acer ", "Nitro Core I5 Gtx 1650 ", "$4.200.000", "img/D_NQ_NP_2X_611238-MCO49215274797_022022-F.jpg");

let toyota2 = new Automovil ("Acer ", "Aspire 5 A514-53 silver 14 ", "$2.000.000", "img/D_NQ_NP_2X_982191-MLA46754996012_072021-F.jpg");

let toyota3 = new Automovil ("Acer ", "Predator Helios 300", "$5.470.000", "img/Predator.jpg");

function mostrarToyota () {

    let contentPrincipal = document.getElementById("mainContent");
    let contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", toyota.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    let contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    let marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    let textMarca = document.createTextNode(toyota.Marca);
    marcaAuto.appendChild(textMarca);

    let modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(toyota.Modelo);
    modeloAuto.appendChild(textModelo);

    let precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    let textAuto = document.createTextNode(toyota.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")
    
    //Segundo auto

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", toyota2.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(toyota2.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(toyota2.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(toyota2.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")

    // Tercer auto 

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", toyota3.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(toyota3.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(toyota3.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(toyota3.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")
}

// Tercera busqueda


 let chevrolet = new Automovil ("Asus ", "TUF Dash F15 negra eclipse 15.6 ", "$5.000.000 ", "img/tuf.jpg");
 
 let chevrolet2 = new Automovil ("Asus ", "VivoBook X543UA gris oscura 15.6 ", "$2.300.000 ", "img/x5.jpg");

 let chevrolet3 = new Automovil ("Asus ", "TUF Dash F15 negra eclipse 15.6 ", "$1.300.000 ", "img/e4.jpg");

function mostarChevrolet () {

    let contentPrincipal = document.getElementById("mainContent");
    let contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", chevrolet.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    let contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    let marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    let textMarca = document.createTextNode(chevrolet.Marca);
    marcaAuto.appendChild(textMarca);

    let modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(chevrolet.Modelo);
    modeloAuto.appendChild(textModelo);

    let precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    let textAuto = document.createTextNode(chevrolet.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")

    //Segundo auto

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", chevrolet2.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(chevrolet2.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(chevrolet2.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(chevrolet2.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")

    // tercer auto

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", chevrolet3.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(chevrolet3.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(chevrolet3.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(chevrolet3.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")
}

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if (event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Automóviles disponibles") {
            mostrarVehiculo(auto, auto2, auto3);
            mostrarToyota(toyota, toyota2, toyota3);
            mostarChevrolet(chevrolet, chevrolet2, chevrolet3);
        }
        else if (busqueda == "Hp") {
            mostrarVehiculo(auto, auto2, auto3);
        }
        else if (busqueda == "Acer") {
            mostrarToyota(toyota, toyota2, toyota3);}

        else if (busqueda == "Asus") {
            mostarChevrolet(chevrolet, chevrolet2, chevrolet3);
        }
        else {
            alert("No se han encontrado resultados que coincidan con la busqueda");
        } 
    }
})

function limpiarVentana () {
    document.getElementById("mainContent").innerHTML = "" ;
}