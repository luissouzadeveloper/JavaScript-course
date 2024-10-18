// // Data do sistema
// const zeroEsqurda = (num) => {
//     return num >= 10 ? num : `0${num}`
// }

// const pegarDataHora = () => {
//     // Data
//     const diaSemana = [
//         'Domingo',
//         'Segunda',
//         'Terça',
//         'Quarta',
//         'Quinta',
//         'Sexta',
//         'Sábado'
//     ];

//     const mes = [
//         'Janeiro',
//         'Fevereiro',
//         'Março',
//         'Abril',
//         'Maio',
//         'Junho',
//         'Julho',
//         'Agosto',
//         'Setembro',
//         'Outubro',
//         'Novembro',
//         'Dezembro'
//     ]

//     const data = new Date();

//     const dia = data.getDate();
//     const ano = data.getFullYear()

//     // Hora
//     const hora = data.getHours();
//     const minutos = zeroEsqurda(data.getMinutes());

//     // Exibir
//     const exibir = document.querySelector('.horaData');
//     exibir.style.fontWeight = 'bold';
    

//     return exibir.innerHTML = `${diaSemana[data.getDay()]}, ${dia} de ${mes[data.getMonth()]} de ${ano} e são ${hora}:${minutos}`;
// }

// pegarDataHora();


// Data do sistema
const data = new Date();

// Zero a esquerda
const zeroLeft = (num) => {
    return num >= 10 ? num : `0${num}`
}

// Pegar o dia da semana
const getDayWeek = () => {
    const diaSemana = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado'
    ];

    return diaSemana[data.getDay()];
}

// Pegar o numero do dia da semana
const getNumberDay = () => {
    const dia = data.getDate();

    return dia;
}

// Pegar mês
const getMonth = () => {
    const mes = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    return mes[data.getMonth()];
}

// Pegar ano
const getYear = () => {
    const anoAtual = data.getFullYear();

    return anoAtual;
}

// Pegar hora
const getHours = () => {
    const horas = data.getHours();
    const minutos = zeroLeft(data.getMinutes());

    return `${horas}:${minutos}`;
}

// Função exibir
const show = () => {
    const exibir = document.querySelector('.horaData');

    exibir.style.fontWeight = 'bold';

    exibir.innerHTML = `${getDayWeek()}, ${getNumberDay()} de ${getMonth()} de ${getYear()} ${getHours()}`;
}

show();
