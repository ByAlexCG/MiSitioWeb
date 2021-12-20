/*Operador Condicional*/
"use strict"
/*Condicional Simple*/
var edad = 18;
if (edad >= 18) {
    console.log("Bienvenido dirigase a la mesa de votacion");
}

/* Condicional compuesto*/
/* Ambiente 1: 20 personas */
/* Ambiente 2: 40 personas */
/* Bioauditorio: 100 personas */
/* Informar si no hay ambiente con capacidad sificiente */
/* Informar si ha surgido un error */
var capacidadPersonas = 8;
if (capacidadPersonas >=1 && capaciadaPersonas<= 20) {
    console.log("Ambiente 1 asignado");
}
else if (capacidadPersonas > 20 && capaciadaPersonas <= 40) {
    console.log("Ambiente 2 asignado");
}
else if (capacidadPersonas >40 && capacidadPersonas <= 100) {
    console.log("Bioauditorio asignado");
}
else if (capacidadPersonas > 100) {
    console.log(" no hay ambiente con capacidad sificiente");
}
else {
    console.log("Informar si ha surgido un error ");
}
