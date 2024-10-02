// Valores primitivos
/*
string, number, boolean, undefined, null (são imutáveis)
*/

let nome = 'Luis';
nome[3] = 'z';
console.log(nome);

// Valores por referência
/*
arrays, object, function (são mutáveis)
*/

// Ambos apontam para o mesmo local na memória, portanto, os dois serão afetados
let array1 = [1, 2, 3];
let array2 = array1;
console.log(array1, array2);

array1.push(4);
console.log(array1, array2);

array2.pop();
console.log(array1, array2);

// Objects
let a = {
    nome: 'Luis',
    sobrenome: 'Souza'
};
let b = a;

a.nome = 'João'
console.log(b);