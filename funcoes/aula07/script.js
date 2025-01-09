// Funções imediatas -> IIFE
(function(idade, peso, altura) {
    const sobrenome = 'Silva';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('João'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(25, 54, 1.74);

const nome = 'José';