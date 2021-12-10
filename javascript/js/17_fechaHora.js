"use strict"

var fechaActual = new Date();
console.log(fechaActual);

/* metodos para descomponer la fecha */

var anyoActual = fechaActual.getFullYear();
console.log("Año Actual: "+ anyoActual);

var mesActual = fechaActual.getMonth();
console.log("Mes Actual:"+ (mesActual + 1 ));

var diaActual = fechaActual.getDate();
console.log("Dia Actual:"+ diaActual);

var diaSemana = fechaActual.getDay();
console.log("Dia Semana:"+(diaSemana + 1));

var horaActual = fechaActual.getHours();
console.log("Hora Actual:"+ horaActual);

var minutosActual = fechaActual.getMinutes();
console.log("Minutos Actual:"+ minutosActual)

var segundosActual = fechaActual.getSeconds();
console.log("Segundos Actual:"+ segundosActual);

var milisegActual = fechaActual.getMilliseconds();
console.log("Milisegundos Actual:"+ milisegActual);

var ms1970 = fechaActual.getTime();
console.log("MS desde 1970:"+ ms1970);

var diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
var diaSemanaStr = diasSemana[diaSemana];

var mesAnyo = ["Enero", "Febrero", "Marzo", "Abril", ]


console.log(("Hoy es: "+ diaSemanaStr) + ", "+ diaActual + (" ") + ("del mes") + (" ") + (mesActual + 1 ) + (" ") + ("del año ") + (anyoActual) + (". ") + ("Son las") + (" ") + (horaActual) + (":") + (minutosActual )); 
/* console.log("Hoy es:"+ 10 del mes 12 del año 2021. Son las 16:40);  */

/* especificar una  fecha para determinar la diferencia */