 "use strict"

    let horaSalida = new Date(2022, 4, 5, 7, 30, 0);
    let horallegada = new Date(2022, 4, 5, 11, 30, 0); 

    let horaSalida2 = new Date(2022, 4, 5, 9, 10, 0);
    let horaLlegada2 = new Date(2022, 4, 5, 1, 10, 0);

    let horaSalida3 = new Date(2022, 4, 5, 0, 0, 0);
    let horaLlegada3 = new Date(2022, 4, 5, 0, 0, 0);

 class vuelos{
    constructor(origen,destino,precio,horaSalida,horaLlegada,directo,economico){
        this.origen = origen;
        this.destino = destino;
        this.precio = precio;
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
        this.directo = directo;
        this.economico = economico;
    }
 }
let vuelo = [{
    "origen": "BGT",
    "destino": "CTG",
    "precio": 375000,
    "horaSalida":horaSalida.getHours() + horaSalida.getMinutes(),
    "horaLlegada":horallegada.getHours() + horallegada.getMinutes(),
    "directo":"Directo",
    "economico":"Mas economico",
},
{
    "origen": "BGT",
    "destino": "CTG",
    "precio": 515000,
    "horaSalida":horaSalida3.getHours() + horaSalida3.getMinutes(),
    "horaLlegada":horaLlegada3.getHours() + horaLlegada3.getMinutes(),
    "directo":"Directo",
    "economico":"Mas economico",
},
{
    "origen": "BGT",
    "destino": "CTG",
    "precio": 415000,
    "horaSalida":horaSalida2.getHours() + horaSalida2.getMinutes(),
    "horaLlegada":horaLlegada2.getHours() + horaLlegada2.getMinutes(),
    "directo":"Directo",
    "economico":"Mas economico",
}];
function mostrarVuelos(){
    for(let i = 0; i < vuelo.length; i++){
    cargarVuelos(vuelo[i].origen, vuelo[i].destino, vuelo[i].precio, vuelo[i].horaSalida, vuelo[i].horaLlegada, vuelo[i].directo, vuelo[i].economico);
}}
function cargarVuelos(origen,destino,precio,horaSalida,horaLlegada,directo,economico) {
    let contentVuelo = document.createElement("div");
    let contentPrincipal = document.getElementById("mainContent");
    contentPrincipal.appendChild(contentVuelo);
    contentPrincipal.setAttribute("class", "contentVuelo")

    let contentOrigen = document.createElement("div");
    contentVuelo.appendChild(contentOrigen);    

    let origenVuelo = document.createElement("label");
    contentVuelo.appendChild(origenVuelo);
    let textOrigen = document.createTextNode(origen);
    origenVuelo.appendChild(textOrigen);
    origenVuelo.setAttribute("class", "styleOrigen")

    let destinoVuelo = document.createElement("label");
    contentVuelo.appendChild(destinoVuelo);
    let textDestino = document.createTextNode(destino);
    destinoVuelo.appendChild(textDestino);
    destinoVuelo.setAttribute("class", "styleDestino")

    let precioVuelo = document.createElement("label");
    contentVuelo.appendChild(precioVuelo);
    let textPrecio = document.createTextNode(precio);
    precioVuelo.appendChild(textPrecio);
    precioVuelo.setAttribute("class", "stylePrecio")

    let horaSalidaVuelo = document.createElement("label");
    contentVuelo.appendChild(horaSalidaVuelo);
    let textHoraSalida = document.createTextNode(horaSalida);
    horaSalidaVuelo.appendChild(textHoraSalida);
    horaSalidaVuelo.setAttribute("class", "styleHoraSalida")

    let horaLlegadaVuelo = document.createElement("label");
    contentVuelo.appendChild(horaLlegadaVuelo);
    let textHoraLlegada = document.createTextNode(horaLlegada);
    horaLlegadaVuelo.appendChild(textHoraLlegada);
    horaLlegadaVuelo.setAttribute("class", "styleHoraLlegada")

    let directoVuelo = document.createElement("label");
    contentVuelo.appendChild(directoVuelo);
    let textDirecto = document.createTextNode(directo);
    directoVuelo.appendChild(textDirecto);
    directoVuelo.setAttribute("class", "styleDirecto")

    let economicoVuelo = document.createElement("label");
    contentVuelo.appendChild(economicoVuelo);
    let textEconomico = document.createTextNode(economico);
    economicoVuelo.appendChild(textEconomico);
    economicoVuelo.setAttribute("class", "styleEconomico")


}