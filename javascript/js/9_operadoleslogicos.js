"use strict"
/* 
&&......AND
||......OR
^.......XOR*/
/* subsidio de transporte
si el aprendiz tiene SISBEN pero no tiene jovenes en accion puedee acceder al beneficio.
si el aprendiz tiene jovenes en accion pero no tiene SISBEN puede acceder al beneficio
SI el aprendiz tiene jovenes en accion y tiene sisben no puede acceder al beneficio.
si el aprendiz no tienen sisben, ni jovenes en accion, no puede acceder al beneficio. */
var sisbenAprendiz = true;
var jovenesaccionaprendiz = false;
if (sisbenAprendiz === true ^ jovenesaccionaprendiz === true) {
    console.info("usted puede acceder al beneficio.")
    
}else{
    console.log("usted no puede acceder al beneficio")
}