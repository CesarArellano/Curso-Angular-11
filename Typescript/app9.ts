(()=>{
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
        constructor(public nombre: string,
                    public equipo: string,
                    public nombreReal: string = 'Scott',
                    public puedePelear: boolean = true,
                    public peleasGanadas: number = 0,){}
    }

    const antman = new Avenger('Antman', 'Cap');
    console.log(antman);
    

})();