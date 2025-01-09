// Funções de callback

function numRand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();
    }, numRand())
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if(callback) callback();
    }, numRand())
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if(callback) callback();
    }, numRand())
}

f1(f1Callback);

function f1Callback() {
    f2(f2Callbck);
};

function f2Callbck() {
    f3(f3Callback);
};

function f3Callback() {
    console.log('Olá, mundo');
}

// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log('Olá, mundo!');
//         });
//     });
// });