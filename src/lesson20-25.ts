/*
    Programação Orientada a Objetos (POO)

    POO #05 - lesson 20 - HERANÇA #1
    POO #06 - lesson 21 - HERANÇA #2
    POO #07 - lesson 22 - HERANÇA #3
    POO #08 - lesson 23 - HERANÇA #4
    POO #09 - lesson 24 - HERANÇA #5
    POO #10 - lesson 25 - Getters and Setters
*/

enum accountType {
    DEFAULT = "DEFAULT",
    FISICO = "Pessoa Física",
    JURIDICO = "Pessoa Juridica",
}


class Acount {
    /*
    PUBLIC - Acessado de qualquer lugar
    PRIVATE - Acessado somente pela classe "PAI"
    PROTECTED - Acessado tanto pela classe "PAI" quanto pela classe "FILHA"
;    */
    protected number: number;
    protected user: string;
    private saldo: number;

    constructor(user: string) {
        this.number = this.gerarNumberAccount();
        this.user = user;
        this.saldo = 0;
    }

    private gerarNumberAccount(): number {
        let accountNumber = Math.floor(Math.random() * 100000) + 1;
        return accountNumber;
    }

    public info(): void {
        console.log("-------------------------------")
        console.log(`User: ${this.getUser()}`);
        console.log(`Number: ${this.getNumber()}`);
    }
    public getUser(): string {
        return this.user;
    }
    public getNumber(): number {
        return this.number;
    }

    public getSaldo(): number {
        return this.saldo;
    }
    private setSaldo(value: number) {
        this.saldo = value;
    }

    protected depositar(value: number): void {
        if (value > 0) {
            this.setSaldo(this.getSaldo() + value);
        }
        else {
            console.log("Valor negativo não é aceito");
        }
    }

    protected sacar(value: number): void {
        if (value > 0 && value <= this.getSaldo()) {
            this.setSaldo(this.getSaldo() - value)
        }
        else {
            if (value === 0) {
                console.log("Valor deve ser maior que ZERO!")
            } else {
                console.log("Valor ultrapassa o valor disponivel em conta!")
            }
        }
    }

    protected taxa(saldo: number, value: number = 0): number {
        let taxa = saldo * value / 100;
        return taxa;
    }
}


class Acount_PF extends Acount {
    cpf: number;
    type: accountType = accountType.FISICO;

    constructor(user: string, cpf: number) {
        super(user);
        this.cpf = cpf;
        console.log(`Conta PF criada: ${this.getUser()}`)
    }

    info(): void {
        super.info()
        console.log(`Tipo de Conta: ${this.type}`)
        console.log(`CPF: ${this.cpf}`)
    }

    public depositar(value: number): void {
        if (value >= 50 && value <= 300) {
            super.depositar(value);
            console.log(`Valor depositado: R$${value},00`)
        }
        else {
            if (value < 50) {
                console.log("O valor minimo para deposito é R$50,00");
            }

            if (value > 300) {
                console.log("O valor máximo para deposito é R$300,00");
            }
        }
    }

    public sacar(value: number): void {

        if (value >= 20 && value <= 600) {

            if (value <= this.getSaldo()) {
                super.sacar(value);
                console.log(`Valor retirado da conta: R$${value},00`)

                let taxa = super.taxa(value, 10);

                console.log(`Taxa de ADM: R$${taxa}`);
                console.log(`Valor real a ser retirado: R$${value - taxa}`)
            }
            else {
                console.log("ERRO AO SACAR: valor ultrapassa o limite do saldo disponivel")
            }
        }
        else {
            if (value < 0) {
                console.log("ERRO AO SACAR: Entre com um valor positivo")
            }
            else {
                if (value < 20) {
                    console.log("ERRO AO SACAR: O valor minimo para sacar é R$20,00");
                }
                if (value > 600) {
                    console.log("ERRO AO SACAR: O valor maximo para sacar é R$600,00");
                }
            }
        }
    }

    public getCPF():number{
        return this.cpf;
    }

    public getType():accountType{
        return this.type;
    }
}

class Account_PJ extends Acount {
    private cnpj: number;
    private type: accountType = accountType.JURIDICO;

    constructor(user: string, cnpj: number) {
        super(user);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada: ${this.getUser()}`)
    }

    public info(): void {
        super.info()
        console.log(`Tipo de Conta: ${this.type}`)
        console.log(`CNPJ: ${this.cnpj}`)
    }

    public depositar(value: number): void {
        if (value >= 300 && value <= 3000) {
            super.depositar(value);
        }
        else {

            if (value < 300) {
                console.log("O valor minimo para deposito é R$300,00");
            }
            if (value > 3000) {
                console.log("O valor máximo para deposito é R$3000,00");
            }

        }

    }

    public sacar(value: number): void {
        if (value >= 80 && value <= 1300) {
            super.sacar(value - super.taxa(value, 4));
        }
        else {
            if (value < 80) {
                console.log("O valor minimo para sacar é R$80,00");
            }
            if (value > 1300) {
                console.log("O valor maximo para sacar é R$1300,00");
            }

        }
    }

    public getCNPJ():number{
        return this.cnpj;
    }

    public getType():accountType{
        return this.type;
    }
}







let conta1 = new Acount_PF("bbb", 444444)
let conta2 = new Account_PJ("ccc", 88888)

conta1.depositar(200);
conta1.sacar(-200);
console.log("Saldo da conta: " + conta1.getSaldo())