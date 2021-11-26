
/** É um espaco reservado onde podemos garantir que os nomes 
 * de variaveis/funcoes nao vao conflitar com o escopo global
 * Pois assim, apenas precisamos garantir que ali dentro os nomes
 * nao se repitam
 */
///<reference path="geometriaCirc.ts" />
///<reference path="geometriaRetang.ts" />

 /* namespace Geometria {
  export namespace Areas {
    const PI = 3.14;
  
    export function circunferencia(raio: number): number {
      return PI * Math.pow(raio, 2);
    }
  
    export function retangulo(base: number, altura: number) : number {
      return base * altura;
    }
  }
 } */


console.log(Geometria.Areas.circunferencia(10));
console.log(Geometria.Areas.retangulo(10, 20));
