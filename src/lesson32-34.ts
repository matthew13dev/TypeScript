/*
 Curso Type Script CFB - CURSO
 Aula 32 - Namespace #1
 Aula 33 - Namespace #2
 Aula 34 - Namespace #3
*/


namespace Veiculos {

    export enum Colors {
        BLACK = "black",
        WHITE = "white",
        RED = "red",
        YELLOW = "yellow",

    }

    abstract class Car {
        private name: string;
        private motor: Motores.Motor;
        private color: string;

        constructor(name: string, motor: Motores.Motor, color: Colors) {
            this.name = name;
            this.motor = motor
            this.color = color;
        }

        public ligar(): void {
            if (!this.motor.get_Is_Ligado()) {
                this.motor.ligarMotor();
            } else {
                console.log("Motor já está ligado.")
            }
        }
        public desligar(): void {
            if (this.motor.get_Is_Ligado()) {
                this.motor.desligarMotor();
            } else {
                console.log("Motor já está desligado.")
            }

        }

        public getMyColor(): string {
            return this.color;
        }

        public getMyName(): string {
            return this.name;
        }

        public getEstouLigado(): void {
            let text: String = "";

            if (this.motor.get_Is_Ligado()) {
                text = "sim, o carro está ligado";
            } else {
                text = "Não, o carro não está ligado";
            }

            console.log(text);
        }

        public getMyPotencia(): Number {
            return this.motor.getPotencia();
        }
    }

    export class CarSport extends Car {
        constructor(name: string, color: Colors) {
            super(name, new Motores.Motor(6, 300, new Motores.Turbo(100)), color);
        }
    }

    export class CarroPopular extends Car {
        constructor(name: string, color: Colors) {
            super(name, new Motores.Motor(3, 100), Colors.BLACK);
        }
    }
}



namespace Motores {

    export class Turbo {
        private potencia: number;

        constructor(potencia: number) {
            this.potencia = potencia;
        }

        public getPotencia(): number {
            return this.potencia;
        }
    }

    export class Motor {
        private potencia: number;
        private cilindros: number;
        private is_Ligado: boolean;
        private valueTurbo: number;
        private temTurbo: boolean;

        constructor(potencia: number, cilindros: number, turbo?: Turbo) {

            this.potencia = potencia;
            this.cilindros = cilindros;
            this.is_Ligado = false;

            if (turbo) {
                this.valueTurbo = turbo.getPotencia();
                this.potencia += this.valueTurbo;
                this.temTurbo = true;
            } else {
                this.valueTurbo = 0;
                this.temTurbo = false;
            }
        }

        public ligarMotor(): void {
            if (this.is_Ligado != true) {
                console.log("Motor foi ligado.")
                this.is_Ligado = true;
            }
            else {
                console.log("Motor já está ligado.")
            }
        }

        public desligarMotor(): void {
            if (this.is_Ligado != false) {
                console.log("Motor foi desligado.")
                this.is_Ligado = false;
            } else {
                console.log("Motor já está desligado.")
            }
        }

        public get_Is_Ligado(): boolean {
            return this.is_Ligado;
        }

        public ligar() {
            this.is_Ligado = true;
        }

        public desligar() {
            this.is_Ligado = false;
        }

        public getPotencia(): number {
            return this.potencia;
        }

        public getTemTurbo(): boolean {
            return this.temTurbo;
        }

    }
}





let carro01 = new Veiculos.CarSport("Ferrari", Veiculos.Colors.RED);
console.log(carro01);
carro01.ligar();
console.log(carro01);
carro01.getEstouLigado();
carro01.desligar();
carro01.getEstouLigado();