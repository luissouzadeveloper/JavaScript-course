/*
Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua situação em relação ao alistamento militar.
- Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
alistamento.
- Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
alistamento.
*/

const anoNasc = 1999;
const anoAtual = 2029
const idade = anoAtual - anoNasc;

if (idade < 18) {
    // const idadeLimite = 18;
    const anosFaltando = 18 - idade;
    console.log(`Sua idade é de ${idade} anos, faltam ${anosFaltando} anos para se alistar!`);
} else {
    // const idadeMinima = 18;
    const anosAlistado = idade - 18;
    console.log(`Sua idade é de ${idade} anos, você está a ${anosAlistado} anos alistado`);
}