"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.Things = void 0;
/*
 Curso Type Script CFB - CURSO
 Aula 30 - Módulos
*/
const Things = ["table", "pc", "keyboard", "mouse"];
exports.Things = Things;
class User {
    name;
    hight;
    constructor(name, hight) {
        this.name = name;
        this.hight = hight;
    }
}
class Item {
    name;
    constructor(name) {
        this.name = name;
    }
}
exports.Item = Item;
exports.default = User;
