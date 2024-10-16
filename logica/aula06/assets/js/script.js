// Parando envio automático do form
const form = document.querySelector('.form');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
});

// Pegando resultado e mostrando na tela
const mostraResultado = (msg, cor) => {
    const divResultado = document.querySelector('.resultado');
    divResultado.innerHTML = `<p>${msg}</p>`;
    divResultado.style.color = cor;
}

// Evento de cálculo
const calculoImc = document.querySelector('.btnCalc');

calculoImc.addEventListener('click', () => {
    const peso = Number(document.querySelector('.input-peso').value);
    const altura = Number(document.querySelector('.input-altura').value);

    const imc = peso / (altura * altura);

    if (!peso || !altura) {
        alert('Preencha os campos!');
    } else {
        let msg = '';
        let cor = '';

        if (imc < 18.5) {
            msg = `<p>Seu imc é de ${imc.toFixed(2)}. Abaixo do peso!</p>`;
            cor = 'red';
        } else if (imc < 24.9) {
            msg = `<p>Seu imc é de ${imc.toFixed(2)}. Peso normal!</p>`;
            cor = 'green';
        } else if (imc < 29.9) {
            msg = `<p>Seu imc é de ${imc.toFixed(2)}. Sobrepeso!</p>`;
            cor = 'orange';
        } else if (imc < 34.9) {
            msg = `<p>Seu imc é de ${imc.toFixed(2)}. Obesidade grau 1!</p>`;
            cor = 'orange';
        } else if (imc < 39.9) {
            msg = `<p>Seu imc é de ${imc.toFixed(2)}. Obesidade grau 2!</p>`;
            cor = 'orange';
        } else if (imc > 40) {
            msg = `<p>Seu imc é de ${imc.toFixed(2)}. Obesidade grau 3!</p>`;
            cor = 'red';
        }

        mostraResultado(msg, cor);
    }
})