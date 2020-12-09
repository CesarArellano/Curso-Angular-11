"use strict";
(() => {
    const miFuncion = function (a) {
        return a;
    };
    //función flecha (forma compacta) y sólo retorna la variable a en mayúsculas
    const miFuncionF = (a) => a.toUpperCase();
    const sumarN = function (a, b) {
        return a + b;
    };
    const sumarNF = (a, b) => a + b;
    const hulk = {
        nombre: 'Hulk',
        smash() {
            //Da error con function para this, mejor usamos función flecha
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            }, 100);
        }
    };
    console.log(miFuncionF('césar'));
    console.log(sumarNF(8, 5));
    hulk.smash();
})();
