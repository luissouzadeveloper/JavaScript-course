// for in -> Ler os índices ou chaves do objeto.
const frutas = ['Pêra', 'Maça', 'Cajú'];

for (let i in frutas){
    console.log(frutas[i]);
}

// for in em objetos
const pessoa = {
    nome: 'Luis',
    idade: 25,
    peso: 55
};

const key = 'nome';
console.log(pessoa[key]);

for(let i in pessoa) {
    console.log(i, pessoa[i]);
}