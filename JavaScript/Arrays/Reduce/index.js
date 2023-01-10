/*  Reduce -> Reduz o array a um único elemento.
    No caso, é sempre necessário definir uma valor ao acumulador(contador). Caso contrário,
    o primeiro elemento do array será considerado como acumulador.

Retornando apenas números pares do array em outro*/
const numeros = [2, 3, 19, 29, 20, 36, 87, 90]
const total = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])
console.log(total)

// Retorne a maior tonalidade de cor
const cores = [
    { cor: 'Verde', tonalidades: 54},
    { cor: 'Rosa', tonalidades: 45},
    { cor: 'Preto', tonalidades: 13},
    { cor: 'Cinza', tonalidades: 92},
    { cor: 'Roxo', tonalidades: 9},
    { cor: 'Amarelo', tonalidades: 23},
]

const maiorTonalidade = cores.reduce(function(acumulador, valor){
    if(acumulador.tonalidades > valor.tonalidades) return acumulador
        return valor
})

console.log(maiorTonalidade)