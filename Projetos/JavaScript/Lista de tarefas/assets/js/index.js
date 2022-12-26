const inputTarefa = document.querySelector('.input')
const btnTarefa = document.querySelector('.btn')
const tarefas = document.querySelector('.list')

// elementos
const criaLi = () => {
    const li = document.createElement('li')
    return li
}

const criaBotaoApagar = (li) => {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.classList.add('apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar)
}
  
// tratamento do campo
const limpaInput = () => {
    inputTarefa.value = ''
    inputTarefa.focus()
}
  
// funções
const criaTarefa = (textoInput) => {
    const li = criaLi();
    li.innerText = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
}

const salvarTarefas = () => {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []
  
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }
  
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
  }

const adicionaTarefasSalvas = () => {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)
  
    for(let tarefa of listaDeTarefas) {
      criaTarefa(tarefa)
    }
}

adicionaTarefasSalvas();

// eventos de clique  
inputTarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
  }
})

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e) {
  const el = e.target

  if (el.classList.contains('apagar')) {
        el.parentElement.remove()
        salvarTarefas()
  }
})




