// Funções
function saudacao(nome) {
    return `Boa Tarde, ${nome}!`;
}

saudacao('Raimundo');
const variavel = saudacao('Roberto');
console.log(variavel);

function soma(n1 = 1, n2 = 1){ // <- Valores default
    const resultado = n1 + n2;
    return resultado;
}

console.log(soma(2));
console.log(soma(3, 2));

// Função anônima
const raizQuad = function(num){
    return num ** 0.5;
};

console.log(raizQuad(81));

// Arrow function
const multiplica = n => n * n

console.log(multiplica(5));