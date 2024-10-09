// If e else parte 2

const numero = 7;

// if (numero >= 0 && numero <= 5) {
//     console.log('Sim, o número esta entre 0 e 5');
// } else {
//     console.log('O número não está entre 0 e 5');
// }

if (numero >= 0 && numero <= 5) {
    console.log('O número esta entre 0 e 5');
} else if(1 === 1) {
    // Se o laço achar duas condições true, ele executa so a primeira!
    console.log('VALUES LITERALS');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número esta entre 6 e 8');
} else if (numero >= 9 && numero <= 11) {
    console.log('Sim, o número esta entre 9 e 11');
} else {
    console.log('O número não está entre 0 e 11');
}

if (2 === 2) {
    console.log('verdade')
}

console.log('Resto do programa!');