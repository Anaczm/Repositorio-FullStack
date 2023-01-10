/*  Laço forEach -> itera sobre os valores

Simulando o uso de Reduce: o laço percorre o array e soma seus elementos entre si*/
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let total = 0
array.forEach(valor => total += valor)

console.log(total)