"use strict";
// Spread & rest
const numbers = [1, 10, 99, -5];
/** Nesse caso ele funciona como um "espalahamento" spread passando cada item do array como parametro */
console.log(Math.max(...numbers));
const turmaA = ['miguel', 'ana', 'lorena'];
const turmaB = ['jonas', 'ruan', ...turmaA];
console.log(turmaB);
//contexto de rest que agrupa varios parametros em um array
function retornarArray(...args) {
    return args;
}
const numeros = retornarArray(1, 3, 6, 1231231, 77888);
console.log(numeros);
/** Aqui é spread :) */
console.log(retornarArray(...numbers));
//Spread & rest (tupla)
const tupla = [10, 'TS', true];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
//Destructuring (array)
const caracteristicas = ['Motor 1.8', 2020];
//Jeito antigo
//const motor = caracteristicas[0];
//const ano = caracteristicas[1];
//Com o Destructuring
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
//Destructuring (objeto)
const item = {
    nome: 'SSD 450GB',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
};
//Jeito antigo
const nomeItem = item.nome;
const precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);
//Com o Destructuring e alias, para mudar os nomes dos atributos
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n);
console.log(p);
console.log(w);
// Exercicio 1
var dobro = function (valor) {
    return valor * 2;
};
console.log(dobro(10));
// Exercicio 2
var dizerOla = function (nome) {
    if (nome === undefined) {
        nome = "Pessoa";
    }
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
// Exercicio 3
var nums = [-3, 33, 38, 5];
//imprimir o menor
console.log(Math.min(...nums));
// Exercicio 4
var array = [55, 20];
//adicionar todos os elementos de nums no array
array.push(...nums);
console.log(array);
// Exercicio 5
var notas = [8.5, 6.3, 9.4];
//var notas1 = notas[0]
//var notas2 = notas[1]
//var notas3 = notas[2] 
var [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
// Exercicio 6
var cientista = { primeiroNome: "Will", experiencia: 12 };
//var primeiroNome = cientista.primeiroNome
//var experiencia = cientista.experiencia
var { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
//callback 
function esperar3s(callback) {
    setTimeout(() => {
        callback('3s depois...');
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s depois promisse ...');
        }, 3000);
    });
}
esperar3sPromise()
    .then(dado => console.log(dado));
fetch('https://swapi.co/api/people/1')
    .then(res => res.json())
    .then(person => person.films)
    .then(films => fetch(films[0]))
    .then(resFilms => resFilms.json())
    .then(film => console.log(film.title))
    .catch(err => console.log('Catch !!!!' + err));
//# sourceMappingURL=ecmascript.js.map