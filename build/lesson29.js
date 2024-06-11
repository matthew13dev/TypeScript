"use strict";
/*
 Curso Type Script CFB - CURSO
 Aula 29 - GENERICS
*/
function function_test(value) {
    return value;
}
console.log(`Value: ${function_test(10)}`);
class Class_test {
    value;
    constructor(value) {
        this.value = value;
    }
}
const class_Test1 = new Class_test("Curso TypeScript");
const class_Test2 = new Class_test(500);
console.log(class_Test1.value);
console.log(class_Test2.value);
