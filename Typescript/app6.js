"use strict";
(function () {
    var avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'Droga'
    };
    var extraerObjetos = function (_a) {
        var nombre = _a.nombre, clave = _a.clave;
        //Deconstrucción de objetos const { nombre, poder } = avenger;
        console.log(nombre);
        console.log(clave);
    };
    extraerObjetos(avenger);
    var avengers = ['Iron Man', 'Thor', 'Spiderman'];
    //Desestructuración de arreglos
    var thor = avengers[0], spiderman = avengers[2];
    console.log(thor);
    console.log(spiderman);
    console.log("Recorrer arreglo con ciclo for");
    for (var i = 0; i < avengers.length; i++)
        console.log(avengers[i]);
})();
