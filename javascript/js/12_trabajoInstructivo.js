
var ciudad1= "pitalito";
ciudad1=ciudad1.toUpperCase();
console.log (ciudad1);

ciudad1=ciudad1.toLowerCase();
console.log(ciudad1)

var nombre="Jhon Alexander Castano ";
nombre=nombre.toUpperCase();
console.log(nombre);

nombre=nombre.toLowerCase();
console.log(nombre);



nombre=nombre[0].toUpperCase()+nombre.slice(1);
console.log(nombre)

var anyo2= "2019";
var auxConsecitivo = anyo2.slice(2,4);
console.log(auxConsecitivo)

// contando caracteres
var adsi="analisis y desarrollo de sistemas de informacion";
console.log("longitud " + adsi.length)

// hallando dobles espacios
var nombres="Jhon Alexander Castano";
for (i=0; i < nombres.length; i++){
    if(nombres.slice(i, (i + 2)) === "  "){
        console.log("la cadena tiene espacios dobles");
        break;
    }
}




