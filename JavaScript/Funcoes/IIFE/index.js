/*  IIFE -> Immediately invoked expression function(Expressão de função invocada imediatamente)
    a função é executada assim que definida, ou seja, imediatamente após "()"

    No exemplo abaixo, a função anônima está encapsulada entre parênteses, impedindo o uso
    da variável fora do escopo. Já ao atribuir o resultado da função a outra variável, é 
    possível executar a função e visualizar o resultado. 
*/

const anonima = (function () {
    const cor = 'Rosa'
    console.log(cor)
})()

anonima()