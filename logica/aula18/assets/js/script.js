const divParagrafos = document.querySelector('.paragrafos');
const paragrafos = divParagrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const corFundo = estilosBody.backgroundColor;

for(let p of paragrafos) {
    console.log(p)
    p.style.backgroundColor = corFundo;
    p.style.color = 'white';
    p.style.borderRadius = '5px'
}