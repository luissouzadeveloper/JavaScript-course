// Atribuição via desestruturação
const pessoa = {
    nome: 'Luis',
    sobrenome: 'Souza',
    idade: 25,
    endereco: {
        rua: 'Av. João Pires',
        numero: 233
    }
};

// Desestruturação
const {nome = '', sobrenome: v, endereco: {rua, numero}} = pessoa
// Posso definir um valor padrão para a variável e chamar a chave para colocar um outro nome na variável.

// Para acessar um valor dentro de outros objetos, basta colocar :

console.log(rua, numero);

const carro = {
    marca: 'Chevrolet',
    ano: 1987,
    km: 50000,
    cor: 'Preto' 
}

const {marca, ...resto} = carro;
console.log(marca, resto);