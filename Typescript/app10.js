"use strict";
(() => {
    //Tipado del retorno de una función
    const sumar = (a, b) => a + b;
    const nombre = () => 'Hola César';
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve('César');
        });
    };
    obtenerSalario().then(a => console.log(a.toUpperCase()));
})();
