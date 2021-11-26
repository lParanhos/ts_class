"use strict";
/** Decorator
 * Basicamente nos permite, através de anotações no nosso
 * código (alguém lembrou ai do Java?),
 * modificar certos comportamentos de classes, métodos,
 * propriedades e parâmetros.
 * refs: https://blog.wgbn.com.br/fazendo-o-typescript-trabalhar-para-voc%C3%AA-546bd08a93ac
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//@logarClasseSe(false)
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log("novo ...");
    }
};
Eletrodomestico = __decorate([
    decorator({ a: 'Teste', b: 123 })
], Eletrodomestico);
function logarClasse(constructor) {
    console.log(constructor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
/* const pokemons = [
  {name: "Pikachu", type: "electric", level: 30 },
  {name: "Charmander", type: "fire", level: 45 },
  {name: "Squirtle", type: "water", level: 35 },
  {name: "Bulbasaur", type: "grass", level: 90 }
]

//Verifica se é do tipo fogo
const checkIsFire = pokemon => pokemon.type === "fire";


//Verifica se o nivel é maior que 30
const checkLevel = pokemon => pokemon.level >= 30;

console.log(pokemons.every(checkIsFire)); //false

console.log(pokemons.every(checkLevel)); //true */ 
//# sourceMappingURL=decorators.js.map