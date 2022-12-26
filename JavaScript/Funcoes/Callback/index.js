/* Função Callback -> função que executa outras funções de forma instantânea

    No exemplo abaixo, as funções estão sendo executadas fora de ordem.
    Para fazer com que sejam executadas na ordem correta, a função callback pode ser utilizada
*/

const f1 = (callback) => 
    setTimeout( function(){
        console.log('função 1')
        if (callback) callback()
    }, 5000 )

const f2 = (callback) => 
    setTimeout( function(){
        console.log('função 2')
        if (callback) callback()
    }, 2000 )

const f3 = (callback) =>
    setTimeout( function(){
        console.log('função 3')
        if (callback) callback()
    }, 7000 )

    f1(f1Callback)

    function f1Callback() {
      f2(f2Callback)
    }

    function f2Callback() {
      f3(f3Callback)
    }

    function f3Callback() {
      console.log('Valeu natalina')
    }
