// for clássico

for(let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? `${i} é par!` : `${i} é ímpar!`;
    console.log(par);
}

// Percorrendo array
const frutas = ['Maçã', 'Pêra', 'Morango', 'Manga', 'Limão', 'Laranja'];

for(let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i} ${frutas[i]}`);
}