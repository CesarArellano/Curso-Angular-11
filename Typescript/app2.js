"use strict";
(function () {
    var mensaje = "Hola";
    var URL = "www.youtube.com";
    if (true) { // Este es otro scope
        var mensaje_1 = 'Mundo';
    }
    console.log(mensaje);
})();
