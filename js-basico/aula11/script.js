// Mais sobre números
let num1 = 15.45232243;
let num2 = 2.5;

console.log(num1.toString() + num2.toString())
console.log(num1.toString(2)) // <- Retorna o número em binário
console.log(num1.toFixed(2)) // <- manipula as casas decimais
console.log(Number.isInteger(num2)) // <- Checa se o número é inteiro

let temp = num1 * 'oi'
console.log(Number.isNaN(temp));

// Imprecisão
let n1 = 0.7;
let n2 = 0.1;

n1 += n2;
n1 += n2;
n1 += n2;

n1 = Number(n1.toFixed(2));

console.log(n1);