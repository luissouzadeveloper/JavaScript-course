// while
let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}

const aleatorio = (min, max) => {
    const ale = Math.random() * (max - min) + min;
    return Math.floor(ale);
}

const min = 1;
const max = 30
let rand = aleatorio(min, max);

while (rand !== 10) {
    rand = aleatorio(min, max);
    console.log(rand);
}

// do while
let count = 0

do {
    console.log(count);
    count ++
} while (count < 5);