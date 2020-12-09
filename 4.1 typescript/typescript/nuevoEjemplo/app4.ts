(function (){
    const nombre = 'César';
    const apellido = 'Arellano';
    const edad = 20;
    
    //const salida = nombre + apellido + edad;
    //const salida = nombre + " " + apellido + " ("+edad+" )";
    // Template literal EC6  
    const salida = `${ nombre } ${ apellido } ( ${ edad } )`;

    //Output: César Arellano (Edad: 20)
    
    console.log(salida);
    
})();