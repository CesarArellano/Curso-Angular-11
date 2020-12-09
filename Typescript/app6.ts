(() => {
    const avenger = {
        nombre: 'Steve',
        clave:  'Capitán América',
        poder:  'Droga'
    }
    const extraerObjetos = ({ nombre , clave }:any) =>{
        //Deconstrucción de objetos const { nombre, poder } = avenger;
        console.log(nombre);
        console.log(clave);
    }
    extraerObjetos(avenger);

    const avengers: string[] = ['Iron Man', 'Thor', 'Spiderman'];
    //Desestructuración de arreglos
    const [thor, , spiderman] = avengers;
    console.log(thor);
    console.log(spiderman);

    console.log(`Recorrer arreglo con ciclo for`);
    for(let i= 0; i < avengers.length; i++)
        console.log(avengers[i]);
    
})();