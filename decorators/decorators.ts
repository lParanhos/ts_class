/** Decorator 
 * Basicamente nos permite, através de anotações no nosso 
 * código (alguém lembrou ai do Java?), 
 * modificar certos comportamentos de classes, métodos, 
 * propriedades e parâmetros.
 * refs: https://blog.wgbn.com.br/fazendo-o-typescript-trabalhar-para-voc%C3%AA-546bd08a93ac
 */

interface Eletrodomestico {
  imprimir?(): Function
}

//@logarClasseSe(false)
//@decorator({a: 'Teste', b: 123})
//@logarObjeto
@imprimivel
class Eletrodomestico {
  constructor() {
    console.log("novo ...")
  }
}

function logarClasse(constructor: Function){
  console.log(constructor);
}

function decoratorVazio(_: Function){}

function logarClasseSe(valor: boolean){
  return valor ? logarClasse : decoratorVazio;
}

function decorator(obj : {a: string, b: number}) {
    return function(_:Function): void {
      console.log(obj.a + ' ' + obj.b);
    }
}

type Construtor = { new(...args: any[]): {} }

function logarObjeto(construtor: Construtor){
  return class  extends construtor {
    constructor(...args: any[]) {
      console.log("antes ...");
      super(...args);
      console.log("depois ...");
    }
  }
}

function imprimivel(construtor: Function){
  construtor.prototype.imprimir = function() {
    console.log(this)
  }
}

const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir()

// Desafio Decorator perfilAdmin
const usuarioLogado = {
  nome: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: false
}

@perfilAdmin
class MudancaAdministrativa {
  critico() {
      console.log('Algo crítico foi alterado!')
  }
}

function perfilAdmin<T extends Construtor>(constructor: T){
  return class extends constructor{
    constructor(...args: any[]) {
      super(...args);
      if(!usuarioLogado || !usuarioLogado.admin){
        throw new Error('Sem permissão!')
      }
    }
  }
}

new MudancaAdministrativa().critico()


class ContaCorrente {

  @naoNegativo
  private saldo: number;

  constructor(saldo: number) {
    this.saldo = saldo;
  }
  
  @congelar
  sacar(@paramInfo valor: number){
    if(valor <= this.saldo){
      this.saldo -= valor;
      return true;
    } else {
      return false;
    }
  }

  @congelar
  getSaldo(){
    return this.saldo;
  }
}

const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
console.log(cc.getSaldo());

cc.getSaldo = function(){
  return this['saldo'] + 7000;
}

console.log(cc.getSaldo())

//Object.freeze()
function congelar(alvo: any, nomeMetodo: string, descritor: PropertyDescriptor){
  console.log(alvo);
  console.log(nomeMetodo);
  descritor.writable = false;
}

function naoNegativo(alvo: any, nomePropriedade: string){
  delete alvo[nomePropriedade];
  Object.defineProperty(alvo, nomePropriedade, {
    get: function(): any {
      return alvo["_" + nomePropriedade]
    },
    set: function(valor: any): void {
      if(valor < 0){
        throw new Error("Saldo Inválido")
      } else {
        alvo["_" + nomePropriedade] = valor;
      }
    }
  })
}


function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number){
  console.log(`Alvo: ${alvo}`);
  console.log(`Método ${nomeMetodo}`);
  console.log(`Índice Param: ${indiceParam}`);
}