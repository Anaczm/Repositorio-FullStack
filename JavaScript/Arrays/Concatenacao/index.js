//  Concatenação de arrays

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const array3 = array1.concat(array2, 'zezé')

console.log(array3)

//  concatenação com spread operator
const array = [...array1, 'zezé', ...array2]
console.log(array)