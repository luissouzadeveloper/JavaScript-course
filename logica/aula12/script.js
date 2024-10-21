// Atribuição via desestruturação (arrays)

// let a = 'A';
// let b = 'B';
// let c = 'C';

// const letras = [b, c, a];   
// [a, b, c] = letras;

// console.log(a, b, c);

const numeros = [100, 200, 300, 400, 500, 600];
// Desestruturação -> const [var1, var2, ...rest] = var;
const [primeiroNum, segundoNum, ...rest] = numeros;
console.log(primeiroNum, segundoNum);
// pega o resto
// console.log(rest);

// Pegando valores impares
const nums = [1, 2, 3, 4, 5, 6, 7];
const [um, , tres, , cinco, , sete] = nums;
console.log(um, tres, cinco, sete);

const letras = [ ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'] ];
const [lista1, lista2, lista3] = letras;
console.log(lista3[0]);