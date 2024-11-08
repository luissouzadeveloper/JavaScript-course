// Escreva uma função que recebe 2 números e retorne o maior deles

const numMaior = (n1, n2) => {
    if (n1 > n2) {
        return `O número maior é ${n1}`;
    }
    return `O número maior é ${n2}`;
}

console.log(numMaior(5, 8));