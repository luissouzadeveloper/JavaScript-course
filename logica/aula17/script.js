// estrutura de repetição -> for of
const nome = ['José', 'Maria', 'João'];

// for(let i = 0; i < nome.length; i++){
//     console.log(nome[i]);
// }

// for in -> retorna o índice
for(let i in nome) {
    console.log(nome[i]);
}

// for of -> retorna só o valor
for(let valor of nome) {
    console.log(valor);
}

nome.forEach((el, i, array) => {
    console.log(el, i, array);
});

// objetct
const pessoa = {
    nome: 'Ana',
    idade: 15
};

for(let i in pessoa) {
    console.log(i, pessoa[i])
}

// notas
/*
for clássico -> geralmente com iteráveis (arrays ou strings)
for in -> retorna o índice ou chave (string, arrays e objetos)
for of -> retorna o valor
*/