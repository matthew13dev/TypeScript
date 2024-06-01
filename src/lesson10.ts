//NULL - UNDEFINED - UNKNOWN

let name1: string | null;
name1 = null;
console.log(name1); // null é como se fosse um tipo de dado (tipo nulo)

let name2: any;
console.log(name2) // indefined é quando o tipo não foi definido na criação de uma variavel/constante.(tipo ANY)

let name3: unknown;// unknown pode receber qualquer tipo.
let aux: any = name3
console.group(name3);//unknown só pode ser usado em dados do tipo unknown ou do tipo any apenas.