"use strict";
// lesson 16 - POO #1
class Computer {
    name;
    processador;
    ram;
    on = false;
    //metodo construtor
    constructor(name, processador, ram) {
        this.name = name;
        this.processador = processador;
        this.ram = ram;
        console.log("novo computador criado: " + this.name);
    }
    print() {
        console.log("---------------------------------");
        console.log(`name: ${this.name}`);
        console.log(`processador: ${this.processador}`);
        console.log(`ram: ${this.ram}GB`);
    }
    turnON() {
        if (this.on === false) {
            this.on = true;
            console.log("computer TURN-ON");
        }
        else {
            this.on = false;
            console.log("computer TURN-OFF");
        }
    }
}
// instanciar e construtor
const computer1 = new Computer("gamer", "AMD Ryzen 5 4600G", 16);
const computer2 = new Computer("office", "AMD Ryzen 7 5700X3D", 32);
computer1.print();
computer2.print();
console.log("-----------------------");
console.log("-----------------------");
computer1.turnON();
computer2.turnON();
computer1.turnON();
computer2.turnON();
computer1.turnON();
computer2.turnON();
