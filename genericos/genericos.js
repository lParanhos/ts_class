"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo("Joao").length);
console.log(echo(27).length);
console.log(echo({ nome: "Joao", idade: 27 }));
// Generics 
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado("Joao").length);
// Usando a estrutura abaixo, falamos que nosso tipo T é do tipo number
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: "Joao", idade: 27 }));
// Generics disponiveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
//avaliacoes.push("5.5");
console.log(avaliacoes);
//Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 4]);
imprimir([1, 2, 4]);
imprimir(["1", "2", "4"]);
imprimir([
    { nome: "Luana", idade: 17 },
    { nome: "Roberval", idade: 33 },
    { nome: "Cleiton", idade: 28 },
]);
imprimir([
    { nome: "Luana", idade: 17 },
    { nome: "Roberval", idade: 33 },
    { nome: "Cleiton", idade: 28 },
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho("Alguma coisa"));
// Class com genérics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    ;
}
/* console.log(new OperacaoBinaria("Bom ", "dia").executar());
console.log(new OperacaoBinaria(3 , 7).executar());
console.log(new OperacaoBinaria(3, "opa").executar());
console.log(new OperacaoBinaria({}, {}).executar()); */
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar());
//Desafio Classe Fila
// Atributo: Fila (Array)
// Métodos: entrar, proximo, imprimir
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length > 0) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila("Cleito", "Luicas", "Ana");
fila.entrar("Rosana");
fila.entrar("Joao");
fila.imprimir();
console.log(fila.proximo());
const fila2 = new Fila(1, 2, 3, 4);
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    obter(chave) {
        const resultado = this.itens.filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }
    colocar(item) {
        const encontrado = this.obter(item.chave);
        if (encontrado) {
            encontrado.valor = item.valor;
        }
        else {
            this.itens.push(item);
        }
    }
    limpar() {
        this.itens = new Array();
    }
    imprimir() {
        console.log(this.itens);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=genericos.js.map