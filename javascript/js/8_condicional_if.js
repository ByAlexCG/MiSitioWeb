"use strict"

/* crear 2 variables para usuario y contraseña y las van a comparar con el 
usuario y contraseña que viene de la BD,
si el usuario tiene acceso arrojara un mensaje de bienvenido. 
de lo contrario le informara que no tiene acceso o hay un error de usuario y contraseña */

/* Variable obtenida de manera normal */

var user = "Alex";
var clave = "123456789";
/* variable obtenida de la BD */

var userBD = "Alex";
var claveBD = "123456789";

if( user === userBD && clave === claveBD){
    console.log("Bienvenido");
}
else{
    console.log("Usuario y/o clave incorrecta")
}
