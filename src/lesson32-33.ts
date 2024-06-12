/*
 Curso Type Script CFB - CURSO
 Aula 32 - Namespace #1
 Aula 33 - Namespace #2
*/


namespace Veiculos {

    export class Car {
        name: string;
        motor: Motores.Motor;

        constructor(name: string) {
            this.name = name;
            this.motor = new Motores.Motor(300, 8);
        }
    }
}



namespace Motores {

    class Turbo {
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
        private ligado: boolean;
        private valueTurbo: number;
        private temTurbo: boolean;

        constructor(potencia: number, cilindros: number, turbo?: Turbo) {

            this.potencia = potencia;
            this.cilindros = cilindros;
            this.ligado = false;

            if (turbo) {
                this.valueTurbo = turbo.getPotencia();
                this.potencia += this.valueTurbo;
                this.temTurbo = true;
            } else {
                this.valueTurbo = 0;
                this.temTurbo = false;
            }
        }

        public setLigado(ligado:boolean):void{
            this.ligado = ligado;
        }

        public getLigado():boolean{
            return this.ligado;
        }

        public getPotencia():number{
            return this.potencia;
        }

        public getTemTurbo():boolean{
            return this.temTurbo;
        }
    }
}


const car00 = new Veiculos.Car("Honda Civic");
console.log(car00.name);
console.log(car00.motor);



