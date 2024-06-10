"use strict";
/*
Programação Orientada a Objetos (POO)

    lesson 16 - Classes
    lesson 17 - Método Construtor
    lesson 18 - Métodos
    lesson 19 - Modificadores de acesso
*/
var power;
(function (power) {
    power["on"] = "on";
    power["off"] = "off";
})(power || (power = {}));
class Computer {
    name;
    processador;
    ram;
    on;
    //metodo construtor
    constructor(name, processador, ram) {
        this.name = name;
        this.processador = processador;
        this.ram = ram;
        this.on = false;
        console.log("novo computador criado: " + this.name);
    }
    info() {
        console.log("---------------------------------");
        console.log(`name: ${this.name}`);
        console.log(`processador: ${this.processador}`);
        console.log(`ram: ${this.ram}GB`);
        console.log(`ligado? ${this.on ? "sim" : "nao"}`);
    }
    status(status) {
        if (status === power.on) {
            this.on = true;
            console.log(`computer ${this.name} TURN-ON`);
        }
        else {
            this.on = false;
            console.log(`computer ${this.name} TURN-OFF`);
        }
    }
    upRam(value) {
        if (value >= 0) {
            this.ram = value;
        }
        else {
            console.log(`value ${value} not enable!`);
        }
    }
}
// instanciar e construtor
const computer1 = new Computer("gamer", "AMD Ryzen 5 4600G", 16);
const computer2 = new Computer("office", "AMD Ryzen 7 5700X3D", 32);
computer1.info();
computer2.info();
console.log("-----------------------");
console.log("-----------------------");
computer1.status(power.on);
computer1.status(power.off);
console.log(power);
computer1.upRam(32);
computer1.info();
