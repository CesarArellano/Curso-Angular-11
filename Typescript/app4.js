"use strict";
(function () {
    // Parámetros obligatorios, opcionales(variable?), y por defecto (=).
    function activar(quien, objeto = 'batiseñal', momento) {
        if (momento) {
            console.log(`${quien} activó la ${objeto} en la ${momento}`);
        }
        else {
            console.log(`${quien} activó la ${objeto}`);
        }
    }
    // activar('Gordon', 'batiseñal especial','tarde'); 
    activar('Gordon'); // Parámetros opcionales(variable?), obligatorios y por defecto (=)
    function getEdad() {
        return 18 + 2;
    }
    const nombre = 'César';
    const apellido = 'Arellano';
    const edad = 20;
    //const salida = nombre + apellido + edad;
    //const salida = nombre + " " + apellido + " ("+edad+" )";
    // Template literal EC6  
    const salida = `${nombre} ${apellido} ( ${getEdad()} )`;
    //Output: César Arellano (Edad: 20)
    console.log(salida);
})();
