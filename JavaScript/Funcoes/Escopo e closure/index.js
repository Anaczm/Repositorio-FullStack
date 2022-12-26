/* Escopo léxico e closure

    Escopo -> trata-se da acessibilidade de uma variável em determinadas áreas do código.

    O escopo léxico acessa os demais escopos, incluindo o escopo global, escopo local(escopo da função) e
    escopo do bloco.

    No exemplo abaixo, a função anônima consegue acessar seu escopo léxico, ou seja
    o escopo do bloco(retornaFuncao), o escopo global e seu escopo local. Tal habilidade
    é nomeada como Closure.

*/

const retornaFuncao = () => {
    const obj = 'lápis'
    return function(){
        return obj
    }
}

const funcao = retornaFuncao()
console.dir(funcao)