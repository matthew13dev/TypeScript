/*
    Programação Orientada a Objetos (POO)

    lesson 20 - HERANÇA #1
    lesson 21 - HERANÇA #2
    lesson 22 - HERANÇA #3
*/

class Acount {
    protected number: number;
    protected user: string;

    constructor(user: string) {
        this.number = this.gerarNumberAccount();
        this.user = user;
    }

    private gerarNumberAccount(): number {
        let accountNumber = Math.floor(Math.random() * 100000) + 1;
        return accountNumber;
    }

    info(): void {
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
}

enum accountType {
    DEFAULT = "DEFAULT",
    FISICO = "Pessoa Física",
    JURIDICO = "Pessoa Juridica",
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
    }
}

class Account_PJ extends Acount {
    cnpj: number;
    type: accountType = accountType.JURIDICO;
    constructor(user: string, cnpj: number) {
        super(user);
        this.cnpj = cnpj;
    }

    info(): void {
        console.log(`Tipo de Conta: ${this.type}`)
        super.info()
    }
}

let conta1 = new Acount("aaa")

let conta2 = new Acount_PF("bbb", 444444)

let conta3 = new Account_PJ("ccc", 88888)

console.log(conta2.info());