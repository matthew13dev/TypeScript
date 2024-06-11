"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 Curso Type Script CFB - CURSO
 Aula 30 - Módulos #1
 Aula 31 - Módulos #2
*/
const Classes_1 = __importDefault(require("./Classes"));
const Classes_2 = require("./Classes");
//import { Item } from "./Classes";
const user00 = new Classes_1.default("matheus", 1.84);
const item00 = new Classes_2.Item("table");
console.log(user00.name);
console.log(Classes_2.Things);
