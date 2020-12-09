(() =>{
    /*console.log('Inicio');
    const promesaUno = new Promise( (resolve, reject) => {
        setTimeout(() =>{
            reject ('Se terminó el timeout');
        },100);
    });
    promesaUno
        .then( mensaje => console.log(mensaje))
        .catch( err => console.warn(err));
    console.log('Fin');
    */
    const retirarDinero = (montoRetirar: number): Promise<number> => {
        let dineroActual = 1000;
        return new Promise((resolve,reject) =>{
            if(montoRetirar > dineroActual){
                reject('No hay suficientes fondos');
            }
            else{
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    }
    retirarDinero(200)
        .then(montoActual => console.log(`Me queda ${montoActual}`))
        .catch(err => console.warn(err));
})();