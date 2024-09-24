// Operadores aritméticos, atribuição e incremento

// Aritméticos (+ - * / ** %)
/*

+ Adição / Concatenação
- Subtração
* Multiplicação
/ Divisão
** Potênciação
% Resto da divisão

 */
const num1 = 10;
const num2 = 3;
const num3 = 4
console.log((num1 + num2) * num3);

/*

Precedência
()
**
* / %
+ -

*/

// Incremento
let contador = 1;
contador++;
contador++;
console.log(++contador);
console.log(contador);
// Decremento
let decremento = 10
decremento--;
console.log(decremento); 
// Incremento com mais de 1 valor
const passo = 2;
let contador2 = 10;
// Operador de atribuição (+=)
contador2 **= passo;
console.log(contador2);
// contador2 += passo;
// console.log(contador2);

// NaN = Not a number
const n1 = 10;
const n2 = Number('5.2'); // <- Conversão de tipo
console.log(n1 + n2);
console.log(typeof n2);
// if (typeof n2 === 'string') {
//     Number(n2);
// }

// PRÁTICA

const strNum1 = '3.5';
const strNum2 = '14';
const convNum1 = Number(strNum1);
const convNum2 = Number(strNum2);
const resultado = convNum1 + convNum2;
console.log(resultado);

const numero1 = 30;
const numero2 = '56';

const soma = numero1 + Number(numero2);
console.log(soma)


let acumulador = 1;
acumulador *= 2
acumulador *= 2
acumulador *= 2
acumulador *= 2
acumulador *= 2
console.log(acumulador);

