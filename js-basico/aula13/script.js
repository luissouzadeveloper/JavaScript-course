const number = Number(prompt('Informe um número: '))

const numberTitle = document.querySelector('#number-title');
numberTitle.innerHTML += `${number}`

const squareRoot = document.querySelector('#square-root');
squareRoot.innerHTML += `Raiz quadrada: ${Math.sqrt(number)}`;

const numberInteger = document.querySelector('#number-integer');
numberInteger.innerHTML += `${number} é inteiro: ${Number.isInteger(number)}`;

const numberNaN = document.querySelector('#number-nan');
numberNaN.innerHTML += `É NaN: ${isNaN(number)}`;

const numberFloor = document.querySelector('#number-floor');
numberFloor.innerHTML += `Arrendonda para baixo: ${Math.floor(number)}`;

const numberCeil = document.querySelector('#number-ceil');
numberCeil.innerHTML += `Arrendonda para cima: ${Math.ceil(number)}`;

const numberFixed = document.querySelector('#number-fixed');
numberFixed.innerHTML += `Com duas casas decimais: ${number.toFixed(2)}`;