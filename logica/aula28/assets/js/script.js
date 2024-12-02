const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

// Salvar tarefa
const salvarTarefas = () => {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

// Cria botão de apagar
const criaBotaoApagar = (li) => {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar essa tarefa');
    botaoApagar.innerText = 'Apagar';
    li.appendChild(botaoApagar);
}

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})

// Preencher com Enter
inputTarefa.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) addTarefa();
});

// Limpa Formulario
const limpaForm = () => {
    inputTarefa.value = '';
    inputTarefa.focus();
}

// Cria tag li
const criaLi = () => {
    const li = document.createElement('li');
    return li;
}

// Adiciona tarefa
const addTarefa = () => {
    if (inputTarefa.value === '') {
        alert('Preencha o formulário!');
    }
    
    const li = criaLi();
    li.innerHTML = inputTarefa.value;
    tarefas.appendChild(li);

    limpaForm();

    criaBotaoApagar(li);

    salvarTarefas();
}

btnTarefa.addEventListener('click', addTarefa);

