/*
Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade dela e depois mostre se ela pode ou não votar.
*/

const anoNasc = 2000;
const anoAtual = 2024;
const idade = anoAtual - anoNasc

if (idade < 16) {
    console.log(`Você tem ${idade} anos, ainda não pode votar.`);
} else if (idade >= 16 && idade <= 17 || idade >= 70) {
    console.log(`Você tem ${idade} anos, o voto é opcional.`);
} else {
    console.log(`Você tem ${idade} anos, o voto é obrigatório!`);
}