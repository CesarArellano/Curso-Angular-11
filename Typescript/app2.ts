(function () {
    let mensaje = "Hola";
    const URL = "www.youtube.com";

    if(true){ // Este es otro scope
        let mensaje = 'Mundo';
    }

    console.log(mensaje);
})();
