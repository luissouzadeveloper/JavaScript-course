// Objetos
const pessoa1 = {
    nome: 'Luis',
    sobrenome: 'Souza',
    idade: 25
};

const pessoa2 = {
    nome: 'Zé',
    sobrenome: 'Jesus',
    idade: 60
};

// Acessar propriedades
console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa2.nome);

// Create object in function!
const createPerson = (name, surname, age) => {
    return {
        name, surname, age
    };
}

const person1 = createPerson('Maria', 'Silva', 40);
const person2 = createPerson('Adriano', 'Miranda', 35);
const person3 = createPerson('José', 'Marinho', 30);

// print object
console.log(person2);

// Method in object
const pessoa3 = {
    nome: 'Marcos',
    sobrenome: 'Aguiar',
    idade: 23,

    // Method
    fala() {
        console.log(`Hello everyone. I'm ${this.nome}`)
    }
};

pessoa3.fala();