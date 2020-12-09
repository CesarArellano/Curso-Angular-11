"use strict";
(function () {
    var miFuncion = function (a) {
        return a;
    };
    //función flecha (forma compacta) y sólo retorna la variable a en mayúsculas
    var miFuncionF = function (a) { return a.toUpperCase(); };
    var sumarN = function (a, b) {
        return a + b;
    };
    var sumarNF = function (a, b) { return a + b; };
    var hulk = {
        nombre: 'Hulk',
        smash: function () {
            var _this = this;
            //Da error con function para this, mejor usamos función flecha
            setTimeout(function () {
                console.log(_this.nombre + " smash!!!");
            }, 100);
        }
    };
    console.log(miFuncionF('césar'));
    console.log(sumarNF(8, 5));
    hulk.smash();
})();
