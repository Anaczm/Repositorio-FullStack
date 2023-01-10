/*  Filter -> filtro de array
    Sempre retornará um array, com a mesma quantidade de elementos ou menos

Retonando números maiores que 10*/
const numeros = [2, 3, 19, 29, 20, 36, 87, 90]
const numerosFiltrados = numeros.filter(valor => valor > 10)

console.log(numerosFiltrados)

/*  Retonando cores que tem 5 letras ou mais, com mais de 30 tonalidades e
    cujo nome começa com "R"
*/

const cores = [
    { cor: 'Verde', tonalidades: 54},
    { cor: 'Rosa', tonalidades: 45},
    { cor: 'Preto', tonalidades: 13},
    { cor: 'Cinza', tonalidades: 92},
    { cor: 'Roxo', tonalidades: 9},
    { cor: 'Amarelo', tonalidades: 23},
]

const qtdletras = cores.filter(obj => obj.cor.length >= 5)
console.log(qtdletras)

const tonalidade = cores.filter(obj => obj.tonalidades >= 30)
console.log(tonalidade)

const ultimaLetraO = cores.filter(obj => obj.cor.toLowerCase().startsWith('R'))
console.log(ultimaLetraO)