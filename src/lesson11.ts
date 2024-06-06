//Type Assertion and Typecast

let number_Valor: number;
let string_Valor: string;
let unknown_Valor: unknown;

unknown_Valor = 10;
number_Valor = <number>unknown_Valor; // se não utilizar o assertion, dá erro de atribuição de tipos

console.log(typeof(unknown_Valor))
console.log(unknown_Valor)


unknown_Valor = "10";
string_Valor = <string>unknown_Valor; // se não utilizar o assertion, dá erro de atribuição de tipos

console.log(typeof(unknown_Valor))
console.log(unknown_Valor)