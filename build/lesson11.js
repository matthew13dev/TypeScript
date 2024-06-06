"use strict";
//Type Assertion and Typecast
let number_Valor;
let string_Valor;
let unknown_Valor;
unknown_Valor = 10;
number_Valor = unknown_Valor; // se não utilizar o assertion, dá erro de atribuição de tipos
console.log(typeof (unknown_Valor));
console.log(unknown_Valor);
unknown_Valor = "10";
string_Valor = unknown_Valor; // se não utilizar o assertion, dá erro de atribuição de tipos
console.log(typeof (unknown_Valor));
console.log(unknown_Valor);
