// // Objeto date
// const data = new Date();

// // Pega data
// console.log(`Dia ${data.getDate()}`);
// console.log(`Mês ${data.getMonth() + 1}`);
// console.log(`Ano ${data.getFullYear()}`);

// // Pega hora
// console.log(`Hora ${data.getHours()}`);
// console.log(`Minuto ${data.getMinutes()}`);
// console.log(`Segundo ${data.getSeconds()}`);

// // Dia da semana
// console.log(`Dia da semana ${data.getDay()}`);

// console.log(data.toDateString());

// Adicionar zero
function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

// Data com função
function formataData(data) {
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();

    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)