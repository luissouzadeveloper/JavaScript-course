/*
Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.
*/

const velocidade = 82;

if (velocidade > 80) {
    console.log('Você foi multado!');
    const excesso = velocidade - 80;
    const multa = excesso * 5;
    console.log(`Você vai pagar R$${multa} de multa`);
} else {
    console.log('Dirija com cuidado!');
}