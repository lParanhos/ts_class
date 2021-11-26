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
let myAge: number;
myAge = 17;
console.log(myAge);


//array 
let hobbies: any[] = ['Cozinhar', 'Jogar', 'Comer'];
console.log(hobbies);

// tuplas

/** É um array de tipos definidos de valores */
let user: [string, number, string] = ["Leandro", 22, "TS"];
console.log(user);
//user = [21, "Leandro", 45]

//enums
/**Estrutura para definir valores pre definidos
 * Ex: segunda, terca, quarta, quinta ...
 */

 enum Color {
   Cinza,
   Verde = 100,
   Azul
 }

 let myColor: Color = Color.Verde;
 console.log(myColor)

 //any
 /**Volta para o cenário javascript */
 let car: any = 'BMW';
 console.log(car);

 car = 123;
 console.log(123);

 //funcoes

 function returnMyName(): string {
    //return 1;
    return nam;
 }

 console.log(returnMyName());

 function sayHello(): void{
   console.log('Hello World')
  // return nam;
 }

 function multiply(numA: number, numB: number): number{
  return numA * numB;
 }

 console.log(multiply(2, 3));
 //console.log(multiply(4.7, 'Troll'));

 //Tipo funcao
 let calc: (x: number, y:number) => number;
//calc = sayHello;
//calc = 1;

calc = multiply;
console.log(calc(3, 5));

//Tipo Objeto
let usu: {name: string, age: number} = {
  name: 'Joao',
  age: 31
}

//usu = {};

//usu = {
//  number: 23,
//  qi: '100'
//}

usu = {
  name: 'Cleide',
  age: 34
}

// Desafio
/**
 * Criar um objeto funcionário com:
 * - Array de strings com os nomes dos supervisores
 * - Funcao de bater ponto que recebe a hora(número)
 *      e retorna uma string
 *      -> Ponto Normal (<= 8)
 *      -> Fora do horario (> 8)
 */

//Alias
type Employee = {
  supervisors: string[], 
  hitPoint: (num: number) => string
}

let employee: Employee = {
  supervisors: ['Marcos', 'Lucas', 'Pedro'],
  hitPoint(num): string {
    return num <=8 ? 'Ponto Normal': 'Fora do Horario'
  }
}

let employee2: Employee = {
  supervisors: ['Marcos', 'Lucas', 'Pedro'],
  hitPoint(num): string {
    return num <=8 ? 'Ponto Normal': 'Fora do Horario'
  }
}

console.log(employee.supervisors);
console.log(employee.hitPoint(9));
console.log(employee.hitPoint(6));


//Union types
let note: number | string = 10;
console.log(`My note is ${note}`);
note = '9';
console.log(`My note is ${note}`);
//note = true;

//never
/**Funcao nunca vai retornar(loop) ou termina com erro */

function fail(msg: string): never {
 // while(true)
 throw new Error(msg)
}

let product = {
  name: 'Joao',
  price: -1,
  validateProduct(){
    if(this.name || this.name.trim().length == 0){
      fail('Nedd valid name');
    }

    if(this.price <= 0){
      fail('Invalid price');
    }
  }
}

product.validateProduct();

// null
let height = 12;
//height = null;

let optionalHeight: null | number = 12;
optionalHeight = null;

type Contact = {
  name: string;
  tel1: string;
  tel2: string | null;
}

const contact1: Contact = {
  name: 'Jonas',
  tel1: '1231231231',
  tel2: null
} 

let canBeNull = null; //any
canBeNull = 12;
canBeNull = 'abc';

/**Desafio
 * Transforme o código abaixo de JS para TS
 * let contaBancaria = {
  saldo: 3456,
  depositar(valor) {
      this.saldo += valor
  }
}

let correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
}
 */
type ContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
}

 let contaBancaria: ContaBancaria = {
   saldo: 3456,
   depositar(valor: number) {
      this.saldo += valor;
   }
 }

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: string[]
}

let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)