/* class Vehiculo {
    constructor(marca, color, matricula){
        this.marca = marca;
        this.color = color;
        this.matricula = matricula;
    }
}

class Coche extends Vehiculo{
    constructor(marca, color, matricula){
        super(marca, color, matricula)
    }
}
class Moto extends Vehiculo{
    constructor(marca, color, matricula){
        super(marca, color, matricula)
    }
}
class Bus extends Vehiculo{
    constructor(marca, color, matricula){
        super(marca, color, matricula)
    }
} */

/* let persona_uno = {
    nombre: "Juan",
    saludar: function() {
        console.log("Hola, soy " + this.nombre)
    }
}

console.log(persona_uno);
let persona_dos = Object.create(persona_uno);
console.log(persona_dos) */


//ES5
/* function FiguraGeometrica(lado){
    this.lado = lado
}
function Poligono(lado){
    FiguraGeometrica.call(this, lado);
}
Poligono.prototype = Object.create(FiguraGeometrica.prototype); //relación entre ambas clases

Poligono.prototype.calcularArea = function() {
    return this.lado * this.lado;
}

let cuadrado = new Poligono(3);
console.log(cuadrado);
console.log(cuadrado.calcularArea()) */


/* //ES6
class FiguraGeometrica {
    constructor(lado){
        this.lado = lado
    }
}

class Poligono extends FiguraGeometrica {
    constructor(lado){
        super(lado)
    }
    calcularArea(){
        return this.lado * this.lado;
    }
}

let cuadrado = new Poligono(3);
console.log(cuadrado);
console.log(cuadrado.calcularArea()) */

/* let padre = {
    nombre: 'Juan',
    saludar: function(){
        console.log(`Hola, soy ${this.nombre}`)
    }
}
console.log(padre);

let hijo = Object.create(padre);
console.log(hijo);

let nieto = Object.create(hijo);
console.log(nieto); */

class Motores {
    constructor(serial, fabricante){
        this.serial = serial;
        this.fabricante = fabricante;
    }
    datosMotor(){
        return `El número de serial es: ${this.serial} y el fabricante es la empresa ${this.fabricante}`
    }
}

class Electricos extends Motores {
    constructor(serial, fabricante, potencia, corriente){
        super(serial, fabricante);
        this.potencia = potencia;
        this.corriente = corriente;
    }
    tipoCorriente(){
        return `El tipo de corriente es: ${this.corriente}`;
    }
}

class CC extends Electricos {
    constructor(serial, fabricante, potencia, corriente, voltaje, tipo){
        super(serial, fabricante, potencia, corriente)
        this.voltaje = voltaje;
        this.tipo = tipo;
    }
}

class CA extends Electricos {
    constructor(serial, fabricante, potencia, corriente, fases, frecuencia){
        super(serial, fabricante, potencia, corriente)
        this.fases = fases;
        this.frecuencia = frecuencia;
    }

}
let motorCC = new CC('133DGH', 'GE', '200W', 'CC', '220CC', 'Shunt');
let motorCA = new CC('7566DGD', 'ABB', '2HP', 'CA', 'Monofasico', '50Hz');
console.log(motorCC.datosMotor());
console.log(motorCC.tipoCorriente());
console.log(motorCA.datosMotor());
console.log(motorCA.tipoCorriente());
