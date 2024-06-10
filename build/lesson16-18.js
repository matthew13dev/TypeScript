"use strict";
// lesson 16, 17, 18 - Programação Orientada a Objetos (POO)
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
    power(code) {
        if (code === 1) {
            this.on = true;
            console.log(`computer ${this.name} TURN-ON`);
        }
        else {
            this.on = false;
            console.log(`computer ${this.name} TURN-OFF`);
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
computer1.power(1);
computer1.power(0);
