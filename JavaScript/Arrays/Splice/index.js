/*  Método Splice -> este método executa a função dos comandos pop, shift, unshift e push
    splice(indíce, número de elementos)
*/

const objetos = ['casa', 'moeda', 'tv']

// pop
const metodo = objetos.splice(-1, 1)

//  shift
const metodo = objetos.splice(0, 1)

// unshift
const metodo = objetos.splice(1, 0, 'Carrin', 'Cafézin')

//  push
const metodo = objetos.splice(Number.MAX_VALUE, 0, 'Carrin')

console.log(objetos, metodo)
