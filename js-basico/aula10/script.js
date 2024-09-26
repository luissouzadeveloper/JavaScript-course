// Mais sobre strings

// Strings são indexadas <- 0 1 2 ...
let umaString = 'Um texto simples';

// verificar o índice de alguma letra
console.log(umaString[10]);
// Outra maneira mais moderna de pegar o índice <- charAt(index)
console.log(umaString.charAt(3));

// Concatenar textos <- concat()
console.log(umaString.concat(' qualquer'));

// Econtrar o 1º índice de uma palavra <- index.Of(string, index)
console.log(umaString.indexOf('Um'));
console.log(umaString.indexOf('m', 0));

// lastIndexOf() é similar ao anterior, busca de tras pra frente
console.log(umaString.lastIndexOf('t', 3));

// replace() <- troca uma palavra por outra
console.log(umaString.replace('x', 's'));

// variavel.length <- retorna o tamanho da string
console.log(umaString.length)

// slice(c, f) <- retorna uma parte da string controlada pelos indice começo e fim
console.log(umaString.slice(3,8))
console.log(umaString.slice(-8))
// console.log(umaString.substring(umaString.length - 7))

// split() <- Fatia uma string
console.log(umaString.split(' ', 1));

// toUpperCase() <- Deixa as letras em maiúsculas
console.log(umaString.toUpperCase());

// toLowerCase() <- Deixa as letras em minúsculas
console.log(umaString.toLowerCase());
