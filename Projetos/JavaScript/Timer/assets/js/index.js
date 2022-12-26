function criaSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'GMT'
    })
}

const cronometro = document.querySelector('.cronometro')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let segundos = 0
let timer

function iniciaCronometro(){
    timer = setInterval(function() {
        segundos++
        cronometro.innerHTML = criaSegundos(segundos)
    }, 1000)
}

document.addEventListener('click', function(e) {
    const elemento = e.target

    if(elemento.classList.contains('iniciar')){
        clearInterval(timer)
        iniciaCronometro()
    }

    else if(elemento.classList.contains('pausar')){
        clearInterval(timer)
    }

    else if(elemento.classList.contains('zerar')){
        clearInterval(timer)
        cronometro.innerHTML = '00:00:00'
        segundos = 0
    }
})