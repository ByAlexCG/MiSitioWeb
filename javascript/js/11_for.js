" use strict"

/* For */

for( var i =1; i <= 10; i++){
    console.log(i);
}
/* Primer forma de declarar un array */
var usuario1 = new Array();
usuario1[0]=1;
usuario1[1]="1084330256";
usuario1[2]="Roberto";
usuario1[3]="Gomez";
usuario1[4]="2012-11-25";
usuario1[5]="cartagena";
usuario1[6]="latam";

/* Segunda forma de declarar un array */

var usuario2 = new Array( 2, "10345678976","Juan Felipe", "Moreno" ,"2010-05-06", "San Andres","Avianca" );

/* tercera forma de declarar una array */

var usuario3 =[ 3, "1025896874", "Kevin", "Murcia","2009-05-16", "Cartagena","American Airlines"];
console.log("nombre usuario 1:"+ usuario1[2])
console.log("nombre usuario 2:"+ usuario2[2])
console.log("nombre usuario 3:"+ usuario3[2])

/* sistema que me permita recorrer un arreglo y mostrarlo */


for( var j =1; j <= usuario1.length - 1; j++){
    console.log(usuario1[j]);
}