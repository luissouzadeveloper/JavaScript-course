// Retorno da função

// Essa função tem um retorno
function soma(a, b) {
    return a + b;
}

console.log(soma(1, 2));

// Essa função não retorna valor algum, faz alguma coisa!
document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'yellow';
});

// Retorno com objetos
function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

let pessoa1 = criaPessoa('Raimundo', 'Soares');
console.log(pessoa1);

// Retorno com funções aninhadas
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }

    return falaResto;
}
const fala = falaFrase('Olá');
const resto = fala('mundo');
console.log(resto);

function criaMultplicador(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    };
}

const duplica = criaMultplicador(2);
const triplica = criaMultplicador(3);
const quadriplica = criaMultplicador(4);

console.log(duplica(2));
console.log(duplica(3));
console.log(duplica(4));