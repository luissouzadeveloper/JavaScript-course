// Operação ternária
// ? :
// const variavel = comparação ? 'true' : 'false'

const pontuacao = 999;
const nivelUsuario = pontuacao >= 1000 ? 'Usuário VIP' : 'Usuário normal';

// or
const corUsuario = 'Red';
const corPadrao = corUsuario || 'Azul';

console.log(nivelUsuario, corPadrao);

// Exemplos

const idade = 15;
const categoriaIdade = idade >= 18 ? 'Adulto' : 'Jovem';
console.log(categoriaIdade);