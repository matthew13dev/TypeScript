/*
    Curso TypeSScript - CFB Cursos
    Lesson 35 - Desestruturação #1
*/

let vetor_Item: number[] = [10, 20, 30];
let [item1, item2, item3] = vetor_Item;

console.log(item1)
console.log(item2)
console.log(item3)


console.log("------------------------------------------")
let [cor1, cor2, cor3] = ["black", "white", "red"];

console.log(cor1)
console.log(cor2)
console.log(cor3)


console.log("------------------------------------------")

const object_Item = {
    color1: "Verde",
    color2: "Azul",
    color3: "Amarelo"
}

let { color1, color2, color3 } = object_Item;

console.log(color1);
console.log(color2);
console.log(color3);