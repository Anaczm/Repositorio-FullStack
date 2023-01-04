//  Função recursiva -> função que chama a sí mesma

const funcaoRecursiva = (max) => {
    console.log(max)
    if(max >= 10) return
    max++
     funcaoRecursiva(max)
}

funcaoRecursiva(2)

