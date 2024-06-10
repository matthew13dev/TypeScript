// lesson 16 - POO #1


class Computer {
    name:string = "";
    processador:string = "";
    placa:string = "";
    ram:number = 0;
    on:boolean = false;

    constructor(name:string){
        this.name = name;
    }

}

const computer1 = new Computer("gamer");
const computer2 = new Computer("office");

console.log(computer1);
console.log(computer2);