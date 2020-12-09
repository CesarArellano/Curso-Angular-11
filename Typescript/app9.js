"use strict";
(() => {
    class Avenger {
        /*nombre: string = 'Sin nombre';
        equipo: string
        nombreReal: string

        puedePelear: boolean;
        peleasGanadas:number;

        constructor(nombre: string, equipo: string){
            this.nombre = nombre;
            this.equipo = equipo;
        }*/
        constructor(nombre, equipo, nombreReal = 'Scott', puedePelear = true, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('Antman', 'Cap');
    console.log(antman);
})();
