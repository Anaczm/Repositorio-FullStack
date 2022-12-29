/*  Factory function (função fábrica) -> retorna objetos
    Quando uma função está dentro de um objeto. é chamada de método.
    
    Neste caso, o this refere-se ao objeto em que o método está inserido.
*/

const criaPessoa = (nome, sobrenome, peso, altura) => {
    return {
        nome,
        sobrenome,

        // Getter -> pega o resultado de uma função como se fosse um atributo
        get nomeCompleto() {
            return `${nome} ${sobrenome}`    
        },

        // Set -> 
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },

        fala(assunto) {
            return `${nome.this} está falando sobre ${assunto}.`
        },
        peso: peso,
        altura: altura,

        // Getter 
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const pessoa1 = criaPessoa('João', 'Souza', 60, 1.90)
pessoa1.nomeCompleto = 'João Pereira Martins' 
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.imc)
