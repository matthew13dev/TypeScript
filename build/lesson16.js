"use strict";
// lesson 16 - POO
class Computer {
    name = "";
    processador = "";
    placa = "";
    ram = 0;
    on = false;
    constructor(name) {
        this.name = name;
    }
}
const computer1 = new Computer("gamer");
const computer2 = new Computer("office");
console.log(computer1);
console.log(computer2);
