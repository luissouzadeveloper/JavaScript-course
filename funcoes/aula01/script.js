// Declaração de funções

// Função normal (sempre com hoisting)
function falaOla() {
    console.log('Olá');
}
falaOla();

// Function expression
const nome = function () {
    console.log('Meu nome é Zé');
};
nome();

// Arrow function
const idade = (idade) => {
    console.log(`Minha idade é ${idade} anos.`);
}
idade(25);

// Function in object
const obj = {
    cidade(){
        console.log('Minha cidade é tal...');
    }
}
obj.cidade();