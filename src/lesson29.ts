/*
 Curso Type Script CFB - CURSO
 Aula 29 - GENERICS
*/

function function_test<Type>(value:Type):Type{
    return value;
}

console.log(`Value: ${function_test<number>(10)}`);



class Class_test<Type>{
    public value:Type;

    constructor(value:Type){
        this.value = value;
    }
}

const class_Test1 = new Class_test<string>("Curso TypeScript");
const class_Test2 = new Class_test<number>(500);

console.log(class_Test1.value)
console.log(class_Test2.value)