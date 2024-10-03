function aplication() {
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#resultado');

    // const array = [];
    // array = [obj.nome, obj.sobrenome, obj.peso, obj.altura];

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('Foi enviado!')
    // };

    // Modern form

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        const obj = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        const array = [obj.nome, obj.sobrenome, obj.peso, obj.altura];

        resultado.innerHTML += `<p>${ array }</p>`;

        console.log(array);
    });

    // Extension

    const mensagem = document.querySelector('#msg');
    const btn = document.querySelector('.btn')

    btn.addEventListener('click', () => {
        mensagem.innerHTML = `Programador Front End Javascript`
    });

}
aplication();
