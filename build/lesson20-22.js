"use strict";
/*
    Programação Orientada a Objetos (POO)

    lesson 20 - HERANÇA #1
    lesson 21 - HERANÇA #2
    lesson 22 - HERANÇA #3
*/
class Acount {
    number;
    user;
    constructor(user) {
        this.number = this.gerarNumberAccount();
        this.user = user;
    }
    gerarNumberAccount() {
        let accountNumber = Math.floor(Math.random() * 100000) + 1;
        return accountNumber;
    }
    info() {
        console.log("-------------------------------");
        console.log(`User: ${this.getUser()}`);
        console.log(`Number: ${this.getNumber()}`);
    }
    getUser() {
        return this.user;
    }
    getNumber() {
        return this.number;
    }
}
var accountType;
(function (accountType) {
    accountType["DEFAULT"] = "DEFAULT";
    accountType["FISICO"] = "Pessoa F\u00EDsica";
    accountType["JURIDICO"] = "Pessoa Juridica";
})(accountType || (accountType = {}));
class Acount_PF extends Acount {
    cpf;
    type = accountType.FISICO;
    constructor(user, cpf) {
        super(user);
        this.cpf = cpf;
        console.log(`Conta PF criada: ${this.getUser()}`);
    }
    info() {
        super.info();
        console.log(`Tipo de Conta: ${this.type}`);
    }
}
class Account_PJ extends Acount {
    cnpj;
    type = accountType.JURIDICO;
    constructor(user, cnpj) {
        super(user);
        this.cnpj = cnpj;
    }
    info() {
        console.log(`Tipo de Conta: ${this.type}`);
        super.info();
    }
}
let conta1 = new Acount("aaa");
let conta2 = new Acount_PF("bbb", 444444);
let conta3 = new Account_PJ("ccc", 88888);
console.log(conta2.info());
