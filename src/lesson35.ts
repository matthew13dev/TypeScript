/*
    Curso TypeSScript - CFB Cursos
    Lesson 35 - Desestruturação #1
    Lesson 36 - Desestruturação #2
*/

namespace print {
    export function trace(): void {
        console.log("---------------------------------");
    }

    export function mensage<Type>(text: string, value: Type): void {
        console.log(text + value);
    }
}


let vetor_Item: number[] = [10, 20, 30];
let [item1, item2, item3] = vetor_Item;

print.mensage<Number>("number A: ", item1);
print.mensage<Number>("number B: ", item2);
print.mensage<Number>("number C: ", item3);


print.trace();

let [cor1, cor2, cor3] = ["black", "white", "red"];

print.mensage<String>("Cor 1: ", cor1);
print.mensage<String>("Cor 2: ", cor2);
print.mensage<String>("Cor 3: ", cor3);


print.trace();

const object_Item = {
    color1: "Verde",
    color2: "Azul",
    color3: "Amarelo"
}

let { color1, color2, color3 } = object_Item;

print.mensage<String>("Color 1: ", color1);
print.mensage<String>("Color 2: ", color2);
print.mensage<String>("Color 3: ", color3);

print.trace();
print.trace();

let [numero1 = 0, numero2 = 0, numero3] = [10, 20, 30, 40,50, 60, 70, 80, 90];

print.mensage<Number>("Numero A: ", numero1);
print.mensage<Number>("Numero B: ", numero2);
print.mensage<Number>("Numero C: ", numero3);



print.trace();
print.trace();
print.trace();

const funtion_Colors = () => {
    return ["cor A","Cor B", "Cor C", "Cor D"]
}

let [colorA,colorB, colorC, colorD] = funtion_Colors();

print.mensage<String>("Color A: ", colorA);
print.mensage<String>("Color B: ", colorB);
print.mensage<String>("Color C: ", colorC);
print.mensage<String>("Color D: ", colorD);


print.trace();
print.trace();
print.trace();

let text = "Curso TypeScript CFB-Cursos";
let[...text_Item] = text.split(" ");

console.log(text_Item);

let[palavra1,palavra2,palavra3] = text_Item;

console.log(palavra1);
console.log(palavra2);
console.log(palavra3);