// Variáveis

let nome = 'Raimundo'; // <- String
let idade; // <- Declara mas não inicializa (retorna undefined)
idade = 30; // <- Inicializa variável
console.log(idade);

idade = 50 // <- Variável sobrescrita com outro valor
console.log(idade)

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

// Regras para criação de variáveis
/* 
    1- Não criar com palavras reservadas
    2- Variáveis precisam de nomes coesos
    3- Não pode começar o nome de variável com número
    4- Não pode haver espaços e nem traços
    5- Utilizamos "camelCase" para variáveis compostas
    6- Variáveis são case sensitive, maiúsculas e minúsculas tem diferença. 
*/