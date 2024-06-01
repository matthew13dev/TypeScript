"use strict";
//OBJETOS
const jobs = Object.freeze({
    STUDENT: "student",
    ENGINNER: "enginner"
});
let dados = {
    name: "matheus",
    age: 22,
    job: jobs.STUDENT,
    hello: () => {
        console.log("hello");
    },
    print: (text) => {
        console.log(text);
    }
};
console.log(typeof (dados));
console.log(dados);
