/*  Filter + Map

    Retorne a soma do dobro de todos os pares:
    Filtrar pares;
    Dobrar os valores;
    Reduzir(somar tudo).

    Filter -> Filtrou os números pares.
    Map -> Mapeou os valores dobrados.
    Reduce -> Executou a soma dos números pares dobrados, retornando em um único elemento.
*/

const numeros = [2, 3, 19, 29, 20, 36, 87, 90]
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor *2)
    .reduce(acumulador, valor)
    return acumulador + valor

console.log(numerosPares)