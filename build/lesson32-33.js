"use strict";
/*
 Curso Type Script CFB - CURSO
 Aula 32 - Namespace #1
 Aula 33 - Namespace #2
*/
var Veiculos;
(function (Veiculos) {
    class Car {
        name;
        motor;
        constructor(name) {
            this.name = name;
            this.motor = new Motores.Motor(300, 8);
        }
    }
    Veiculos.Car = Car;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        potencia;
        constructor(potencia) {
            this.potencia = potencia;
        }
        getPotencia() {
            return this.potencia;
        }
    }
    class Motor {
        potencia;
        cilindros;
        ligado;
        valueTurbo;
        temTurbo;
        constructor(potencia, cilindros, turbo) {
            this.potencia = potencia;
            this.cilindros = cilindros;
            this.ligado = false;
            if (turbo) {
                this.valueTurbo = turbo.getPotencia();
                this.potencia += this.valueTurbo;
                this.temTurbo = true;
            }
            else {
                this.valueTurbo = 0;
                this.temTurbo = false;
            }
        }
        setLigado(ligado) {
            this.ligado = ligado;
        }
        getLigado() {
            return this.ligado;
        }
        getPotencia() {
            return this.potencia;
        }
        getTemTurbo() {
            return this.temTurbo;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const car00 = new Veiculos.Car("Honda Civic");
console.log(car00.name);
console.log(car00.motor);
