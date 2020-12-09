"use strict";
(function () {
    var nombre = 'César';
    var apellido = 'Arellano';
    var edad = 20;
    //const salida = nombre + apellido + edad;
    //const salida = nombre + " " + apellido + " ("+edad+" )";
    // Template literal EC6  
    var salida = nombre + " " + apellido + " ( " + edad + " )";
    //Output: César Arellano (Edad: 20)
    console.log(salida);
})();
