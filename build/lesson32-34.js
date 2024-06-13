"use strict";
/*
 Curso Type Script CFB - CURSO
 Aula 32 - Namespace #1
 Aula 33 - Namespace #2
 Aula 34 - Namespace #3
*/
var Veiculos;
(function (Veiculos) {
    let Colors;
    (function (Colors) {
        Colors["BLACK"] = "black";
        Colors["WHITE"] = "white";
        Colors["RED"] = "red";
        Colors["YELLOW"] = "yellow";
    })(Colors = Veiculos.Colors || (Veiculos.Colors = {}));
    class Car {
        name;
        motor;
        color;
        constructor(name, motor, color) {
            this.name = name;
            this.motor = motor;
            this.color = color;
        }
        ligar() {
            if (!this.motor.get_Is_Ligado()) {
                this.motor.ligarMotor();
            }
            else {
                console.log("Motor já está ligado.");
            }
        }
        desligar() {
            if (this.motor.get_Is_Ligado()) {
                this.motor.desligarMotor();
            }
            else {
                console.log("Motor já está desligado.");
            }
        }
        getMyColor() {
            return this.color;
        }
        getMyName() {
            return this.name;
        }
        getEstouLigado() {
            let text = "";
            if (this.motor.get_Is_Ligado()) {
                text = "sim, o carro está ligado";
            }
            else {
                text = "Não, o carro não está ligado";
            }
            console.log(text);
        }
        getMyPotencia() {
            return this.motor.getPotencia();
        }
    }
    class CarSport extends Car {
        constructor(name, color) {
            super(name, new Motores.Motor(6, 300, new Motores.Turbo(100)), color);
        }
    }
    Veiculos.CarSport = CarSport;
    class CarroPopular extends Car {
        constructor(name, color) {
            super(name, new Motores.Motor(3, 100), Colors.BLACK);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
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
    Motores.Turbo = Turbo;
    class Motor {
        potencia;
        cilindros;
        is_Ligado;
        valueTurbo;
        temTurbo;
        constructor(potencia, cilindros, turbo) {
            this.potencia = potencia;
            this.cilindros = cilindros;
            this.is_Ligado = false;
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
        ligarMotor() {
            if (this.is_Ligado != true) {
                console.log("Motor foi ligado.");
                this.is_Ligado = true;
            }
            else {
                console.log("Motor já está ligado.");
            }
        }
        desligarMotor() {
            if (this.is_Ligado != false) {
                console.log("Motor foi desligado.");
                this.is_Ligado = false;
            }
            else {
                console.log("Motor já está desligado.");
            }
        }
        get_Is_Ligado() {
            return this.is_Ligado;
        }
        ligar() {
            this.is_Ligado = true;
        }
        desligar() {
            this.is_Ligado = false;
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
let carro01 = new Veiculos.CarSport("Ferrari", Veiculos.Colors.RED);
console.log(carro01);
carro01.ligar();
console.log(carro01);
carro01.getEstouLigado();
carro01.desligar();
carro01.getEstouLigado();
