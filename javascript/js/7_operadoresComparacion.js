"use strict"
/* operadores de comparacion 
>.........Mayor que
<.........Menor que 
>=........Mayor igual que
<=........Menor igual que
!=........Distinto sin importar tipo de dato
==........Igual sin importar tipo de dato
===.......Extrictamente igual, incluyendo tipo de dato
!==.......Distinto(si no son extrictamente iguales)*/

/* ¿Quien ocupo el primer puesto? */
var nota1 = 8.1;
var nota2 = 8.5;
 
/* Condicionales */
if (nota1 > nota2) {
    console.log("La nota mas alta fue de: " + nota1);
}
else if(nota2 < nota1) {
    console.log("La nota mas alta fue de: " + nota2)
}
else if(nota1 === nota2) {
    console.log("Las dos notas tienen el mismo valor");
}
else {
    console.log("Ha surgido un error, verifique porfavor.")
}