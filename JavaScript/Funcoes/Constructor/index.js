/*  Função construtora -> retorna objetos

    A função construtora não utiliza o padrão camelCase no nome da função 
    "new" cria um novo objeto vazio e o "this" aponta para o objeto que esta sendo utilizado
    Ou seja, ao utilizar "this", o objeto ou método pode ser acessado fora de seu escopo.
*/

function Pessoa(nome){

    // atributo e método privado
    const id = 1234
    const metodoInterno = () =>{

    }

    // atributos e métodos públicos
    this.nome = nome
    this.metodo = function(){
        console.log(this.nome + ': -Sou um método')
    }
}


const p1 = new Pessoa('Paulo')
p1.metodo()