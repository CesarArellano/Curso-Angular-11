(() =>{
    //Tipado del retorno de una función
    const sumar = (a: number, b: number): number => a + b;

    const  nombre = (): string => 'Hola César';

    const obtenerSalario = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            resolve('César');
        });
    }
    obtenerSalario().then(a => console.log(a.toUpperCase()));
})();