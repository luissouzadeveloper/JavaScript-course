// Estrutura Switch

function getWeekDay(diaSemana){
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
    
        case 1:
            diaSemanaTexto = 'Segunda';
            break;
    
        case 2:
            diaSemanaTexto = 'Terça';
            break;
    
        case 3:
            diaSemanaTexto = 'Quarta';
            break;
    
        case 4:
            diaSemanaTexto = 'Quinta';
            break;
    
        case 5:
            diaSemanaTexto = 'Sexta';
            break;
    
        case 6:
            diaSemanaTexto = 'Sábado';
            break;
    
        default:
            console.log('Dia inválido!');
            break;
    }

    return diaSemanaTexto;
}

const data = new Date();
let diaSemana = data.getDay();
// console.log(diaSemana);
const diaSemanaTexto = getWeekDay(diaSemana)

console.log(diaSemanaTexto);

// Dia da semana em vetor

const dayWeek = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
];

console.log(`Hoje é ${dayWeek[data.getDay()]}`);