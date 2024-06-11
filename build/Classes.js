"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.User = exports.Things = void 0;
/*
 Curso Type Script CFB - CURSO
 Aula 30 - Módulos
*/
exports.Things = ["table", "pc", "keyboard", "mouse"];
class User {
    name;
    hight;
    constructor(name, hight) {
        this.name = name;
        this.hight = hight;
    }
}
exports.User = User;
class Item {
    name;
    constructor(name) {
        this.name = name;
    }
}
exports.Item = Item;
