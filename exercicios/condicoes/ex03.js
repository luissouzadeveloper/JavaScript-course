/*
Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua média e mostre na tela. No final, analise a média e mostre se o aluno teve ou não um bom aproveitamento (se ficou acima da média 7.0).
*/

const nome = 'Gabriel'
const nota1 = 9.7;
const nota2 = 8.3;

const media = (nota1 + nota2) / 2

console.log(`${nome} sua média é de ${media}`);

if (media < 7.0) {
    console.log(`${nome}, seu aproveitamento foi satisfatório!`);
} else {
    console.log(`${nome}, seu aproveitamento não foi satisfatório!`);
}