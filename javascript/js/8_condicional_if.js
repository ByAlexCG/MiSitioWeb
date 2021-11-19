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
/* condicional anidado */
/* Sistema que permita calcular un descuento compuesto */
/* agencia de viajes */
/* 1. si la persona que va a viajar no a cumplido los  10 años
o ya cumplio los 70 años tiene un 10% de descuento en el tiket aereo.
2. si el destino turistico del pasajero es cartagena tiene un 10% de descuento
adicional sobre el precio final
3. si la aerolinea de dicho pasajero es Latam tiene otro 10% de descuento adicional acumulable
sobre el precio final
4. hallar el valor final del tiquete. la variable y el contenido
de las mismas sera ingresado por cada uno */
var edad = 9;
var costoTiqueteInicial = 250000;
var destino = "cartagena";
var destinoUsuario = "Cartagena"; 
var aerolineacondescuento = "latam";
var aerolinea = "latam";
var descuento = .10;
var costoFinal = 0;

/*    IF
        si el if se cumple, dentro va otro if
            si el if se cumple, dentro va otro if */
if (edad<=10 || edad >=70)  { 
    console.log("Por ser menor de 10 años o mayor de 70 años usted tiene un descuento del 10%, el valor de su tiquete es:$", costoTiqueteInicial -(costoTiqueteInicial*descuento))
    if (destino === destinoUsuario) {
        console.log("Adicionalmente por dirigirse a Cartagena tendria otro descuento del 10%, el valor de su tiquete es :$", costoTiqueteInicial -(costoTiqueteInicial*descuento)-(costoTiqueteInicial*descuento))
        if (aerolinea === aerolineacondescuento) {
            console.log("Adicionalmente por usar la aerolinea latam tiene otro descuento de 10%, el valor de su tiquete es:$", costoTiqueteInicial -(costoTiqueteInicial*descuento)-(costoTiqueteInicial*descuento)-(costoTiqueteInicial*descuento))    
        } 
    }
} else{
    console.log("Usted no se encuentra dentro del servicio de descuento")
}
/* Sistema de votacion
Teniendo en cuenta la edad del ciudadno, el sistyema le informa si puede o no puede votar */
var edadPersona = 0;
if (edadPersona >= 18) {
    console.log("Acerquese a el sitio de votacion que se le va a indicar")
    
}