"use strict"

/* Hallar el total (suma)*/
var producto1 = 2560;
var producto2 = 3520;
var producto3 = 4680;
var totalSuma = producto1 + producto2 + producto3;
console.log ("La suma de los productos en: $" + totalSuma);

/* Hallar el descuento (resta)*/
var producto4 = 15600;
var descuento = 3000;
var totalConDescuento = producto4 - descuento;
console.log("El valor total con el descuento incluido es: " + totalConDescuento);

/* Hallar el total (Multiplicando)*/
var producto5 = 2420;
var cantidadProducto = 5;
var totalMultiplicacion = producto5 * cantidadProducto;
console.log("El valor total de los 5 productos es: "+ totalMultiplicacion);

/* Hallar el promedio de calificaciones */
var calificacion1 = 9.5;
var calificacion2 = 8.2;
var calificacion3 = 7.9;
var totalCalificaciones = 3;
var promedioFinal = (calificacion1 + calificacion2 + calificacion3) / totalCalificaciones;
promedioFinal = promedioFinal.toFixed(2);
console.log("El promedio final de calificaciones es: " + promedioFinal);
console.log();

/* Hallar el residuo */
console.log("====Residuo====")
var ahorros = 25011;
var cantidadAportes = 102;
var montoIndividual = 0;
var sobrante = 0;
/*Cuanto dinero corresponde a cada uno y cuanto sobra */
var montoIndividual = parseInt(ahorros / cantidadAportes);
console.log("El monto individua es de: " + montoIndividual)
/*El signo de residuo es % */
