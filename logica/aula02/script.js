// Operadores lógicos

/*
&& = and (e). <- Todas a expressões precisam ser verdadeiras.
|| = or (ou). <- Apenas será falso se as duas forem falsas.
! = not (não).
*/

// and
console.log(true && true);

const usuario = 'Luis';
const senha = '12345';
const logar = usuario === 'Luis' && senha === '2345';
console.log(logar);

// or
console.log(false || false);

// not
console.log(!false);