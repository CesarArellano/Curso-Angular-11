(() => {
    // Uso de Let y Const
    const nombre = "Ricardo Tapia";
    const edad = 23;
    const PERSONAJE = { nombre,edad };

    interface Personaje {
        nombre: string;
        artesMarciales: string[];
    }
    // Cree una interfaz que sirva para validar el siguiente objeto
    const batman:Personaje = {
        nombre: "Bruno Díaz",
        artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
    }


    // Convertir esta funcion a una funcion de flecha
    const resultadoDoble = ( a:number, b:number ):number => (a + b) * 2;
    console.log(resultadoDoble(5,6));

    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = "arco"
    function getAvenger( nombre: string, poder?: string, arma:string = 'arco' ){
        let mensaje:string;
        if( poder ){
            mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        }else{
            mensaje = nombre + " tiene un " + poder;
        }
    };


    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.

    class rectangulo {        
        constructor(public base: number,
                    public altura: number){}
        calcularArea(){
            console.log(`El área es ${ this.base * this.altura }`);
        }
    }
    const rectanguloUno = new rectangulo(5,8);
    rectanguloUno.calcularArea();
})();
