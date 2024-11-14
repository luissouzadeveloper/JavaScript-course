// select watch
const relogio = document.querySelector('.relogio');
// select button start
const iniciar = document.querySelector('.iniciar');
// select button pause
const pausar = document.querySelector('.pausar');
// select button reset
const zerar = document.querySelector('.zerar');

// Variáveis para controlar o cronômetro
let segundos = 0;
let intervalo;

// Coloca zero na frente
const addZero = (hora) => {
    return hora < 10 ? `0${hora}` : `${hora}`; 
}

// Atualiza tempo
const updateWatch = () => {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    relogio.innerHTML = `${addZero(horas)}:${addZero(minutos)}:${addZero(segundosRestantes)}`;
}

// Evento para iniciar
iniciar.addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = setInterval(() => {
        segundos++;
        updateWatch();
    }, 1000)

    relogio.classList.remove('red');
});

// Evento para o botão pausar
pausar.addEventListener('click', () => {
    clearInterval(intervalo);
    relogio.classList.add('red');
});

// Evento para o botão zerar
zerar.addEventListener('click', () => {
    clearInterval(intervalo);
    segundos = 0;
    updateWatch();
});