"use strict"

/* 
Suma.............+
Resta............-
Multiplicacion...*
Divicion........./
Residuo..........% 
*/

/* Crear 3 productos, los inicializan con un valor*/
/* A los tres productos les van a descontar el 5% */
/* Existencia de cada producto y hallar el costo del inventario */

/* Crear 3 productos. Dichos productos seran inicializados con un valor. A cada
 producto le van a descontar el 5% y cada producto tiene una existencia. Al final
determinar cual es el valor total del inventario teniendo en cuenta el descuento */

/* declarando e iniciando los valores */
var mouse = 60000;
var teclado = 150000;
var monitor = 200000;
var cantMouse =40;
var cantTeclado = 50;
var cantMonitor =30;

/* Obteniendo el valor con descuento */
var mouseConDes = mouse - (mouse * .05);
console.log("Mouse Con Descuento" + "\n" + mouseConDes);
var tecladoConDes = teclado - (teclado * .05);
console.log("Teclado Con Descuento" + "\n" + tecladoConDes);
var monitorConDes = monitor - (monitor * .05);
console.log("Monitor Con Descuento" + "\n" + monitorConDes);
var costoTotal = monitor + mouse + teclado;
console.log("El costo total incluyendo descuento es de: $" + costoTotal );

/* obteniendo el valor individual total */
var costoTotal = (cantMouse * mouse);
console.log("total de mouse" + "\n" + cantMouse);
var costoTotal = cantTeclado * teclado;
console.log("Total de teclados" + "\n" + cantTeclado);
var costoTotal = cantMonitor * monitor; 
console.log(" Total de monitores" + "\n" + cantMonitor);
var costoTotal = monitor + mouse + teclado;
console.log("El costo total incluyendo descuento es de: $" + costoTotal );
