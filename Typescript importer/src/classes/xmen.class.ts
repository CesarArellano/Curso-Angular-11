function imprimirConsola( constructorClase: Function ){
    console.log(constructorClase);    
}
@imprimirConsola // Decorador que indica que esta clase va a ser tal cosa (componente, servicio, etc.), expande funcionalidades.
export class Xmen {
    constructor(
        public nombre: string,
        public clave : string
    ){}
    imprimir(){
        console.log(`${this.nombre} - ${this.clave}`);
        
    }
}