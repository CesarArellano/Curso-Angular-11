"use strict";
(function () {
    // Parámetros obligatorios, opcionales(variable?), y por defecto (=).
    function activar(quien, objeto, momento) {
        if (objeto === void 0) { objeto = 'batiseñal'; }
        if (momento) {
            console.log(quien + " activ\u00F3 la " + objeto + " en la " + momento);
        }
        else {
            console.log(quien + " activ\u00F3 la " + objeto);
        }
    }
    // activar('Gordon', 'batiseñal especial','tarde'); 
    activar('Gordon'); // Parámetros opcionales(variable?), obligatorios y por defecto (=)
    function getEdad() {
        return 18 + 2;
    }
    var nombre = 'César';
    var apellido = 'Arellano';
    var edad = 20;
    //const salida = nombre + apellido + edad;
    //const salida = nombre + " " + apellido + " ("+edad+" )";
    // Template literal EC6  
    var salida = nombre + " " + apellido + " ( " + getEdad() + " )";
    //Output: César Arellano (Edad: 20)
    console.log(salida);
})();
