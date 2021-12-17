"use strict"

/* obtener la fecha y hora gmt del navegador */
console.log("===Fecha y Hora GMT===")
var timeGMT =new Date();
console.log(timeGMT);

/* convertir fecha a string */
console.log("===Fecha y Hora Local===")
var timeCurrentStr =new Date();
console.log(timeCurrentStr.toString());

/* Obtener dia */
console.log("===Obtener Dia de la semana")
var numDiaSemana = new Date();
console.log(numDiaSemana.getDay());