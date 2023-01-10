/*  Map -> retornará o array com valores modificados sem modificar o tamanho do array.
    Obs: importante atentar-se que o mapeamento dos elementos, juntos as modificações
    nunca devem ser feitos no array original, e sim em um novo array.

Dobrando os valores dos elementos*/
const numeros = [2, 3, 19, 29, 20, 36, 87, 90]
const numerosDobrados = numeros.map(valor => valor * 2)

console.log(numerosDobrados)

/*  Para cada elemento, retorne apenas nome da cor. Remova apenas a chave "cor" do objeto e
    adicione uma chave id em cada objeto.
*/

const cores = [
    { cor: 'Verde', tonalidades: 54},
    { cor: 'Rosa', tonalidades: 45},
    { cor: 'Preto', tonalidades: 13},
    { cor: 'Cinza', tonalidades: 92},
    { cor: 'Roxo', tonalidades: 9},
    { cor: 'Amarelo', tonalidades: 23},
]

const cor = cores.map(obj => obj.cor)
console.log(cor)

const tonalidades = cores.map(obj => ({tonalidade: obj.tonalidades}))
console.log(tonalidades)

const id = cores.map(function(obj, indice){
    const novoObj = {...obj}
    novoObj.id = indice
    return novoObj
})