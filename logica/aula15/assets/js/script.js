// obj
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

// Meu código

// função cria elementos
const criaElementos = () => {
    const container = document.querySelector('.container');
    const div = document.createElement('div')
    
    for(let i = 0; i < elementos.length; i++) {
        const {tag, texto} = elementos[i];
        const novoElemento = document.createElement(tag);
        novoElemento.textContent = texto;
        div.appendChild(novoElemento)
    }

    container.appendChild(div);
}

// Função start
const start = () => {
    criaElementos();
}

start();

// Código da aula
// const container = document.querySelector('.container');
// const div = document.createElement('div');

// for(let i = 0; i < elementos.length; i++) {
//     let {tag, texto} = elementos[i];
//     let elementosCriado = document.createElement(tag);
//     elementosCriado.textContent = texto;
//     div.appendChild(elementosCriado);
// }

// container.appendChild(div);
