// Closures <- Ele acessa vários escopos léxicos das funções.
function returnFunction(nome) {
    // const nome = 'Felipe';

    return function() {
        return nome;
    };
}

const funcaoClosure = returnFunction('Luis');
const funcaoClosure2 = returnFunction('Zé');
console.log(funcaoClosure());
console.log(funcaoClosure2());