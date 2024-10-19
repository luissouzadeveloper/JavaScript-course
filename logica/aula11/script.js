// Mais diferenças entre var, let e const
let nome1 = 'Luis';
var nome2 = 'João';

var nome2 = 'Maria';
console.log(nome2);

// var nome2 = 'Zé'; // <- É permitida a redeclaração com var!

// variável com var só tem escopo de função

if (true) {
    // A variável com let respeita o escopo de bloco {...}
    let nome1 = 'Felipe' // não é mesma variável fora do if
    // console.log(nome1, nome2);
    var nome2 = 'José';
    console.log(nome2);

    if (true) {
        let nome1 = 'Manuela';
        // console.log(nome1);
    }
}

// Escopo de função
var nome = 'Luis'

function falaOi(){
    // var nome = 'Luis';
    console.log(nome); // <- isso já pode ocorrer, pois a var nome está fora da função
}
// console.log(nome) <- Isso não é possível, a var nome está protegida pela função

falaOi();

// Hoisting
console.log(sobrenome);

let sobrenome = 'Souza';