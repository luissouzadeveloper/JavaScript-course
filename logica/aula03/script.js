console.log('Luis' && 0 && 'João');
/*
&&
Valores falsos:
false,
0,
"", '', ``,
null, undefined,
NaN
*/
console.log('Zé' && null && 'A');

function falaOi(){
    return 'Oi';
}
let vaiExecutar = 'João';
console.log(vaiExecutar && falaOi());

/*
||
*/
const corUsuario = 'verde';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = undefined;

console.log(a || b || c || d || e);