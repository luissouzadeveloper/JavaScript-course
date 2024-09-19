/*
NOME tem IDADE anos, pesa PESO kg tem ALTURA de altura e seu IMC é de IMC
NOME nasceu em ANO.
*/
const nome = 'Luis';
let idade = 25;
let peso = 55;
let altura = 1.70;
let imc = peso / (altura * altura);
let ano_nasc = 2024 - idade;

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg tem ${altura.toFixed(2)} de altura e seu IMC é de ${imc.toFixed(2)}. ${nome} nasceu em ${ano_nasc}.`);