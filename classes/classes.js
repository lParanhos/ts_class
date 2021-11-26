"use strict";
/**
 * Public -> é acessado por todos
 * Private -> é acessado apenas pela classe
 * Protected -> Pode ser acessado por herança
 */
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(29, 10, 2020);
aniversario.dia = 28;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data; // posso omitir o "()"
casamento.ano = 2022;
console.log(casamento);
class DataEsperta {
    //Dessa forma conseguimos acessar os valores sem precisar ficar redeclarando,
    //como no exemplo anterior
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(29, 10, 2020);
aniversarioEsperto.dia = 28;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta; // posso omitir o "()"
casamentoEsperto.ano = 2022;
console.log(casamentoEsperto);
//Desafio Produto
//Atributos: nome, preco e desconto
//Criar construtor
//Obs 1. : Desconto é opcional (valor padrão 0)
//Obs 2. : Criar dois produtos: passando dois e tres params
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    //métodos
    //Desafio
    //Criar método precoComDesconto
    //Quais sao os params e o retorno ?
    //Alterar método resumo para mostrar preco com desconto
    //tbm é public
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
}
const produto1 = new Produto("Mingau", 2.50, 1.00);
console.log(produto1);
const produto2 = new Produto("Leite", 3.00);
produto2.desconto = 0.6;
console.log(produto2);
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
Array(20).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(40).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());
//simular erros
/*
carro1.velocidadeAtual = 300;
console.log('atual -> ' + carro1.velocidadeAtual);

carro1.velocidadeMaxima = 500;
console.log('maxima -> ' + carro1.velocidadeMaxima);

carro1.alterarVelocidade(150);
console.log('atual -> ' + carro1.velocidadeAtual);
*/
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari("F40", 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
//Getters & Setters
/** É muito usado quando precisamos validar algo, ou colar uma regra para acessar/editar os dados  */
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1.idade);
//Membros estáticos
/** Quando criamos um atributo estático, ele pertence apenas a classe em que foi criado, e nao para cada instancia */
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
//const m1 = new Matematica();
//m1.PI = 4.2;
//console.log(m1.areaCirc(4));
/**Usando static podemos acessar assim */
console.log(Matematica.areaCirc(4));
// Classes abstratas nao podem ser instanciada
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
//Construtor priva e singleton
class Unico {
    constructor() {
    }
    ;
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
//const errado = new Unico();
console.log(Unico.getInstance().agora());
//Somente leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao("Tu-114", "PT-ABC");
//turboHelice.modelo = "DC-8";
//turboHelice.prefixo = "PT-DEF";
console.log(turboHelice);
//# sourceMappingURL=classes.js.map