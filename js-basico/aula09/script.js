let varA = 'A';
let varB = 'B';
let varC = 'C';
let aux = varA;

varA = varB;
varB = varC;
varC = aux;

/*
O conteúdo da varA é sobrescrita por valor de B, portanto, o seu valor é perdido. Para resolver, basta criar uma variável auxiliar para guardar o valor de A.
 */

console.log(varA, varB, varC);