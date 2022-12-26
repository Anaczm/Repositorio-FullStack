// Capturar envio do submit
//Obs: código não refatorado
const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const weightInput = e.target.querySelector('#weight')
    const heightInput = e.target.querySelector('#height')

    const weight = Number(weightInput.value)
    const height = Number(heightInput.value)

    if (!weight){
        returnResult("Invalid weight", false)
        return
    }

    if (!height){
        returnResult("Invalid height", false)
        return
    }

    const imc = getIMC(weight, height)
    const classificationImc = getClassificationImc(imc)
    const msg = `Your IMC is ${imc} (${classificationImc}).`

    returnResult(msg, true)
})

function getClassificationImc(imc) {
    const classification = ['underweight', 'normal weight', 'overweight',
    'grade 1 obesity', 'grade 2 obesity', 'grade 3 obesity']

    if (imc < 18.5) return classification[0]

    if (imc >= 18.5) return classification[1]

    if (imc >= 24.9) return classification[2]

    if (imc >= 29.9) return classification[3]

    if (imc >= 34.9) return classification[4]

    if (imc >= 39.9) return classification[5]
}

function getIMC (weight, height){
    const imc = weight / height ** 2
    return imc.toFixed(2)
}

function createP (){
    const p = document.createElement('p')
    return p
}

function returnResult(msg, isValid){
    const result = document.querySelector('#result')
    result.innerHTML = ''

    const p = createP()

    if(isValid){
        p.classList.add('p-goodResult')
    }
    else{
        p.classList.add('p-worstResult')
    }

    p.innerHTML = msg
    result.appendChild(p)
}