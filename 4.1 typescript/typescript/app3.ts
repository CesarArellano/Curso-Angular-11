(function (){
    // Tipos de datos.
    let mensaje: string = 'hola';
    let numero: number = 123;
    let booleano: boolean = true;
    let hoy: Date = new Date();
    
    let cualquiercosa: string | number;
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = booleano; // da error
    cualquiercosa = hoy; // da error

    let spiderman = {
        nombre: 'Peter Parker',
        edad: 30
    };
    spiderman = {
        nombre: 'César',
        edad: 10
    }

})();