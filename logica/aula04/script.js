// If else

/*
Entre 0 - 11: Bom dia
Entre 12 - 18: Boa tarde
Entre 19 - 23: Boa noite
*/

const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
    // console.log(1+1);
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa Tarde');
} else if (hora >= 19 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}

const tenhoGrana = false;

if (tenhoGrana) {
    console.log('Saio de casa');
} else {
    console.log('Não saio de casa');
}