//Lesson 12: funçoes em typescript PARTE 1

function login(protocol:number, password: number): void{
    console.log(`protocol:${protocol}`)
    console.log(`password:${password}`)
}

login(123,987);

function sumTwo(valu1:number,valu2:number):number{
    let sum = valu1+valu2;
    return sum;
}

let sum1:number = sumTwo(2,12);
console.log(sum1);