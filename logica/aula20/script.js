// Break e continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros){
    if (numero === 5) {
        continue; // <- continue pula o valor e termina de executar.
    }

    if (numero === 7) {
        break; // <- break para a execução e não continua.
    }

    console.log(numero);
}

console.log('Oii');