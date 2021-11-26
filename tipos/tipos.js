"use strict";
//string
//Quando inicializamos uma variavel, ela atribui o tipo desse valor. Nao tornando possivel usar outro tipo.
let nam = 'Joao';
// console.log(name);
//numbers
let num = 7;
num = 27.5;
console.log(num);
//Boolean
let isAdmin = false;
console.log(isAdmin);
// tipos explicitos
let myAge;
myAge = 17;
console.log(myAge);
//array 
let hobbies = ['Cozinhar', 'Jogar', 'Comer'];
console.log(hobbies);
// tuplas
/** É um array de tipos definidos de valores */
let user = ["Leandro", 22, "TS"];
console.log(user);
//user = [21, "Leandro", 45]
//enums
/**Estrutura para definir valores pre definidos
 * Ex: segunda, terca, quarta, quinta ...
 */
var Color;
(function (Color) {
    Color[Color["Cinza"] = 0] = "Cinza";
    Color[Color["Verde"] = 100] = "Verde";
    Color[Color["Azul"] = 101] = "Azul";
})(Color || (Color = {}));
let myColor = Color.Verde;
console.log(myColor);
//any
/**Volta para o cenário javascript */
let car = 'BMW';
console.log(car);
car = 123;
console.log(123);
//funcoes
function returnMyName() {
    //return 1;
    return nam;
}
console.log(returnMyName());
function sayHello() {
    console.log('Hello World');
    // return nam;
}
function multiply(numA, numB) {
    return numA * numB;
}
console.log(multiply(2, 3));
//console.log(multiply(4.7, 'Troll'));
//Tipo funcao
let calc;
//calc = sayHello;
//calc = 1;
calc = multiply;
console.log(calc(3, 5));
//Tipo Objeto
let usu = {
    name: 'Joao',
    age: 31
};
//usu = {};
//usu = {
//  number: 23,
//  qi: '100'
//}
usu = {
    name: 'Cleide',
    age: 34
};
let employee = {
    supervisors: ['Marcos', 'Lucas', 'Pedro'],
    hitPoint(num) {
        return num <= 8 ? 'Ponto Normal' : 'Fora do Horario';
    }
};
let employee2 = {
    supervisors: ['Marcos', 'Lucas', 'Pedro'],
    hitPoint(num) {
        return num <= 8 ? 'Ponto Normal' : 'Fora do Horario';
    }
};
console.log(employee.supervisors);
console.log(employee.hitPoint(9));
console.log(employee.hitPoint(6));
//Union types
let note = 10;
console.log(`My note is ${note}`);
note = '9';
console.log(`My note is ${note}`);
//note = true;
//never
/**Funcao nunca vai retornar(loop) ou termina com erro */
function fail(msg) {
    // while(true)
    throw new Error(msg);
}
let product = {
    name: 'Joao',
    price: -1,
    validateProduct() {
        if (this.name || this.name.trim().length == 0) {
            fail('Nedd valid name');
        }
        if (this.price <= 0) {
            fail('Invalid price');
        }
    }
};
product.validateProduct();
// null
let height = 12;
//height = null;
let optionalHeight = 12;
optionalHeight = null;
const contact1 = {
    name: 'Jonas',
    tel1: '1231231231',
    tel2: null
};
let canBeNull = null; //any
canBeNull = 12;
canBeNull = 'abc';
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map