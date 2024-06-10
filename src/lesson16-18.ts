// lesson 16, 17, 18 - Programação Orientada a Objetos (POO)


class Computer {
    private name:string;
    private processador:string;
    private ram:number;
    private on:boolean;

    //metodo construtor
    constructor(name:string, processador:string, ram:number){
        this.name = name;
        this.processador = processador;
        this.ram = ram;
        this.on = false;
        console.log("novo computador criado: " + this.name)
    }

    info():void{
        console.log("---------------------------------")
        console.log(`name: ${this.name}`);
        console.log(`processador: ${this.processador}`);
        console.log(`ram: ${this.ram}GB`);
        console.log(`ligado? ${this.on?"sim":"nao"}`)
    }

    power(code:number):void{
        if(code === 1){
            this.on = true;
            console.log(`computer ${this.name} TURN-ON`);
        } else {
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

console.log("-----------------------")
console.log("-----------------------")

computer1.power(1)
computer1.power(0)