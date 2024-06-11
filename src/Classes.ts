/*
 Curso Type Script CFB - CURSO
 Aula 30 - Módulos
*/
const Things:string[] = ["table", "pc", "keyboard", "mouse"]
class User{
    name:string;
    hight: number;

    constructor(name:string, hight:number){
        this.name = name;
        this.hight = hight;
    }
}

class Item{
    name: string;
    constructor(name:string){
        this.name = name;
    }
}

export default User;
export {
    Things,
    Item
}