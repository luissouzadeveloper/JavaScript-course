// Arrays / vetor
const alunos = ['João', 'Maria', 'Luis'];
console.log(alunos);

// Acessando os elemento de um array
console.log(alunos[0]);
console.log(alunos[1]);

// Editar elementos no array
alunos[0] = 'Raimundo';
alunos[3] = 'Ana'; // Uma forma de adicionar elementos
console.log(alunos);

// Tamanho de um array
console.log(alunos.length);

// push() adiciona um elemento no final do array
alunos.push('Fábio') 
console.log(alunos)

// unshift() adiciona no começo do array
alunos.unshift('Carlos');
console.log(alunos);

// pop() remove elementos no final
alunos.pop();
console.log(alunos);

// delete[i] remove do array mas fica com o indice vazio
// delete alunos[2];
// console.log(alunos[2]);

// slice(i, f) fatia o array
console.log(alunos.slice(0, -1));

// typeof checa o tipo
console.log(typeof alunos);
console.log(alunos instanceof Array);