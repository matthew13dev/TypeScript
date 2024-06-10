//Lesson 14: Arrow Function 

function test(): void{
    console.log("test");
}

test();

const test1 = (text:string = "none"):void => {
    console.log(text);
}

test1();
test1("arrow function =>");

const sum2 = (number1:number = 0, number2:number = 0):number => {
    let calc : number = number1 + number2;
    return calc;
}

console.log(sum2(10,3));


const sum3 = (numbers:number[]):number => {
    let sum:number = 0;

    /*
    for(let i = 0; i <numbers.length; i++){
        sum = sum + i;
    }
    */
   
    numbers.forEach(element => {
        sum = sum + element;
    });
    return sum;
}

let vetor:number[] = [10,13,2,6,7];
let result = sum3(vetor);
console.log(result);