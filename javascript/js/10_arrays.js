"use strict"

/* Forma de declarar e inicializar un arreglo*/
/* Forma 1 */
var aprendiz1 = new Array();
aprendiz1[0] = 1;
aprendiz1[1] = "Manuel Fernando";
aprendiz1[2] = "Macias Delgado";
aprendiz1[3] = 22;
aprendiz1[4] = "B.la virginia";
aprendiz1[5] = 178;

/* Forma 2 */
var aprendiz2 = new Array (2, "Karen Dayana", "Garcia Castro", 19, "M.Oporapa", 154)
 
/*Forma 3 */
var aprendiz3 = [3, "Yoan Estiven", "Becerra Zambrando", 19, "B/Los Pinos",166]

/*Mostrar el nombre competo del aprendiz N.2 */
console.log ("Nombre Completo del Aprendiz: "+ aprendiz2 [1]+" "+aprendiz2[2])

/* Agregar otro objeto */
aprendiz2 [6] = "3225619088";

/* contando elementos */
var cantidadElementos = aprendiz2.length;
console.log("Aprendiz 2 tiene " + cantidadElementos + " elementos")

/* Contando caracteres */
var cantidadCaracteres = aprendiz2[1].length;
console.log("Cantidad de caractares: " + cantidadCaracteres);