"use strict";
/*
    Curso TypeSScript - CFB Cursos
    Lesson 35 - Desestruturação #1
    Lesson 36 - Desestruturação #2
*/
var print;
(function (print) {
    function trace() {
        console.log("---------------------------------");
    }
    print.trace = trace;
    function mensage(text, value) {
        console.log(text + value);
    }
    print.mensage = mensage;
})(print || (print = {}));
let vetor_Item = [10, 20, 30];
let [item1, item2, item3] = vetor_Item;
print.mensage("number A: ", item1);
print.mensage("number B: ", item2);
print.mensage("number C: ", item3);
print.trace();
let [cor1, cor2, cor3] = ["black", "white", "red"];
print.mensage("Cor 1: ", cor1);
print.mensage("Cor 2: ", cor2);
print.mensage("Cor 3: ", cor3);
print.trace();
const object_Item = {
    color1: "Verde",
    color2: "Azul",
    color3: "Amarelo"
};
let { color1, color2, color3 } = object_Item;
print.mensage("Color 1: ", color1);
print.mensage("Color 2: ", color2);
print.mensage("Color 3: ", color3);
print.trace();
print.trace();
let [numero1 = 0, numero2 = 0, numero3] = [10, 20, 30, 40, 50, 60, 70, 80, 90];
print.mensage("Numero A: ", numero1);
print.mensage("Numero B: ", numero2);
print.mensage("Numero C: ", numero3);
print.trace();
print.trace();
print.trace();
const funtion_Colors = () => {
    return ["cor A", "Cor B", "Cor C", "Cor D"];
};
let [colorA, colorB, colorC, colorD] = funtion_Colors();
print.mensage("Color A: ", colorA);
print.mensage("Color B: ", colorB);
print.mensage("Color C: ", colorC);
print.mensage("Color D: ", colorD);
print.trace();
print.trace();
print.trace();
let text = "Curso TypeScript CFB-Cursos";
let [...text_Item] = text.split(" ");
console.log(text_Item);
let [palavra1, palavra2, palavra3] = text_Item;
console.log(palavra1);
console.log(palavra2);
console.log(palavra3);
