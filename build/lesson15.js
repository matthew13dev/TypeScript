"use strict";
//lesson 15 - parâmetros REST com SPREAD
function soma(value1 = 0, value2 = 0) {
    let calc = value1 + value2;
    return calc;
}
console.log(soma(10, 5));
function soma1(...value) {
    let calc = 0;
    value.forEach(element => {
        calc += element;
    });
    return calc;
}
console.log(soma1(10, 8, 4, 5));
