/*
Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
BISSEXTO.
*/

const anoAtual = 2023;

if (anoAtual % 4 === 0) {
    console.log(`O ano de ${anoAtual} é bissexto!`);
} else {
    console.log(`O ano de ${anoAtual} não é bissexto!`);
}