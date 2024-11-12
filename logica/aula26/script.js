function showHours() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
console.log(showHours());

function funcaoDoInterval(){
    console.log(showHours());
}

const timer = setInterval(function() {
    console.log(showHours());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(() => {
    console.log('Acabou!');
}, 4000);