// Parâmetros da função
// Existe uma variável arguments que sustenta os argumentos enviados.
function teste() {
    let total = 0;
    for (let arg of arguments) {
        total += arg;
    }

    console.log(total);
}
teste(1, 2, 3, 4);

function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3);

// Parâmetros com valores padrão
function soma(a = 0, b = 0, c = 2) {
    console.log(a + b + c);
}
soma(2);

// Parâmetros via desestruturação de objeto
function dados({ nome, idade, altura }) {
    console.log(nome, idade, altura);
}
dados({nome: 'Zé', idade: 60, altura: 1.60});

// Parâmetros via desestruturação de array
function dados2([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
dados2(['Zé', 60, 1.60]);

const conta = (operador, acumulador, ...numeros) => {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
};
conta('/', 1, 10, 20, 30, 40);