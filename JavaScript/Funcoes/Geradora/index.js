/*  Função geradora -> lazy avaliation
    Retorna valores pausadamente.
    
    "return" retorna um valor e finaliza umaa função. já o "yield", retorna os valores na pausa de execução
    de uma função. No momento em que uma função é invocada novamente, a execução continua desde o último
    yield. 
*/

function* geradora() {
    // código...
    yield 'valor 1'

    // código...
    yield 'valor 2'

    // código...
    yield 'valor 3'
}

const g = geradora()
console.log(g.next().value)

// Delegar tarefas de uma função geradora a outra
function* geradora1(){
    yield 0
    yield 1
    yield 2
}

function* geradora2(){
    yield* geradora1()
    yield 3
    yield 4
    yield 5
}

const g2 = geradora2()
    for(let valor of g2){
        console.log(valor)
    }