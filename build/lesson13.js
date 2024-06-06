"use strict";
// Lesson 13: Funções PARTE 2 - Parametros padrões e opcionais
function sum(value1 = 0, value2 = 0) {
    let aux = value1 + value2;
    return aux;
}
console.log(sum(5, 5));
function newUser(user, password, name) {
    let dates = {
        user: user,
        password: password,
        name: name
    };
    if (!name) {
        dates.name = "não informado";
    }
    console.log(dates);
}
newUser("math013", 123);
