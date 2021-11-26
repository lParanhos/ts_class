/* O browser nao consegue entender esse método de importacao
* de modulos, o que ocasiona um erro no mesmo.
* Uma soluçao é usar a biblioteca SystemJS
 */

import  areaRetangulo  from './retangulo'
import { areaCircunferencia as circ } from './circunferencia'


console.log(areaRetangulo(7, 8));
console.log(circ(2));

const { digaOi }  = require('./novo');

console.log(digaOi("Le"));