// Tratando e lançando erros
try{
    console.log(variavel);
} catch(e) {
    console.log('variável não existe!');
}

function soma(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('n1 e n2 precisam ser números!');
    }

    return n1 + n2;
}

try{
    console.log(soma(2, '3'));
} catch (e) {
    // console.log(e);
    console.log('Para executar a soma, as variáveis precisam ser do tipo number!');
}