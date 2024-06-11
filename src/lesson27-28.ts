/*
 Curso Type Script CFB - CURSO
 Aula 27 - Interfaces #1
 Aula 28 - Interfaces #2 
*/

interface ICurso{
    titulo:string;
    descricao?:string;
    aula:number;
    iniciarCurso?(text:string):void;
}

interface ICursoProgramacao extends ICurso{
    linguagem:string;
    plataforma:string;
}

interface ICursoDesign extends ICurso{
    tecnologia:string;
    Especialidade:string;
}


let curso1:ICursoProgramacao;
let curso2:ICurso;
let curso3:ICurso;


curso1 = {
    titulo:"TypeScript",
    descricao:"Curso de TypeScript",
    aula:100,
    linguagem:"typescript",
    plataforma:"YouTube"
}


curso2 = {
    titulo:"JavaScript",
    descricao:"Curso de JavaScript",
    aula:200
}


curso3 = {
    titulo:"JAVA",
    aula:70
}

console.log(curso1);
console.log(curso2);
console.log(curso3);