// Lesson 13: Funções PARTE 2 - Parametros padrões e opcionais

function sum(value1: number=0, value2:number=0):number{
    let aux: number = value1 + value2;
    return aux;
}

console.log(sum(5,5));


//Coloquei uma interface pois já possuo esse conhecimento por conta dos meus estudos em JAVA :)
interface IUser {
    user:string,
    password:number,
    name?:string
}

function newUser(user:string, password:number, name?:string){

   let dates: IUser = {
    user: user,
    password: password,
    name: name
   }

   if(!name){
    dates.name = "não informado";
   }

   console.log(dates)
}

newUser("math013", 123);