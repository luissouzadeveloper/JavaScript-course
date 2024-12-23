// Escopo léxico
const nome = 'Luis';

function falaNome() {
    const nome = 'Felipe';
    console.log(nome);
}

function usaFalaNome() {
    falaNome();
}
usaFalaNome();