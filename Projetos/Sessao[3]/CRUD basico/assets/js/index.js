const newUser = document.querySelector('.input-new-user')
const addUser = document.querySelector('.btn-add-user')
const users = document.querySelector('.users')

// funções
const crialista = () => {
    const list = document.createElement('li')
    return list
}

const limpaInput = () => {
    newUser.value = ''
    newUser.focus()
}

const criaUsuario = (textoInput) => {
    const list =  crialista()
    list.innerHTML = textoInput
    users.appendChild(list) 
    limpaInput()
    botaoExcluir(list)
    salvarUsuarios()
}

const salvarUsuarios = () => {
    const liUsers = users.querySelectorAll('li')
    const usersList = []

    for(let user of liUsers){
        let userText = user.innerText
        userText = userText.replace('Excluir', '').trim()
        usersList.push(userText)
    }
    const usersJSON = JSON.stringify(usersList)
    localStorage.setItem('users', usersJSON)
}   

const consultaUsuarios = () => {
    const users = localStorage.getItem('users')
    const usersList = JSON.parse(users)

    for (let user of usersList){
        criaUsuario(user)
    }
}
consultaUsuarios()

/*const botaoEditar = (list) => {
    list.innerText += ' ' 
    const button = document.createElement('button')
    button.innerText = 'Editar'
    button.classList.add('editar')
    list.appendChild(button)
}*/

const botaoExcluir = (list) => {
    list.innerText += ' ' 
    const button = document.createElement('button')
    button.innerText = 'Excluir'
    button.classList.add('excluir')
    list.appendChild(button)
}

// Eventos de clique
newUser.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if(!newUser.value) return
        criaUsuario(newUser.value)
    }
}) 

addUser.addEventListener('click', function() {
    if(!newUser.value) return
        criaUsuario(newUser.value)
})

document.addEventListener('click', function(e){
    const elemento = e.target

    if (elemento.classList.contains('excluir'))
        elemento.parentElement.remove()
})

