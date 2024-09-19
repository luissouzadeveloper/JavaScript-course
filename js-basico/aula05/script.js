// Constantes

// Regras para criação de costantes
/* 
    1- Não criar com palavras reservadas
    2- Constantes precisam de nomes coesos
    3- Não pode começar o nome de constantes com número
    4- Não pode haver espaços e nem traços
    5- Utilizamos "camelCase" para constantes compostas
    6- Constantes são case sensitive, maiúsculas e minúsculas tem diferença. 
*/

const nome = 'João';
console.log(nome);
// nome = 'josé';

const num1 = '5';
const num2 = 10;
const resultado = num1 * num2
console.log(resultado);

const resultadoDuplicado = resultado * 2
console.log(resultadoDuplicado);

let resultadoTriplicado = resultado * 3
console.log(resultadoTriplicado);

// Descobrir tipo da const/var
console.log(typeof num1);