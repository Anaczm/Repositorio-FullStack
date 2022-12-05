/* Exercício 1 - aula 60
Escreva uma função que receba 2 números e retorne o maior deles*/

    const compara = (n1, n2) => n1 > n2 ? n1 : n2
    console.log(compara(10, 12))

/* Exercício 2 - aula 61
Escreva uma função chamada ePaisagem que recebe 2 argumentos(largura e altura da iamgem(number))
Retorne TRUE se a imagem estiver no modo paisagem*/

    const ePaisagem = (largura, altura) => largura > altura

    console.log(ePaisagem(1980, 1080))

/*Exercício 3 - aula 62
Escreva uma função que receba um número e execute as seguintes condições:
Número divisíel por 3 = "Fizz"
Número divisíel por 5 = "Buzz"
Número divisíel por 3 e 5 = "Fizz Buzz"
Número NÃO divisíel por 3 e 5 = retorna o número
Checar se o número é realmente um número
Usar a função com números de 0 a 100*/

    const fizzBuzz = (numero) => {
        if (typeof numero !== 'number') return numero

        if (numero % 3 === 0 && numero % 5 === 0)
            return 'Fizz Buzz'
        
        if (numero % 3 === 0)
            return 'Fizz'

        if (numero % 5 === 0)
            return 'Buzz'

            return numero
    }

        for (let i = 0; i <= 100; i ++){
            console.log(i, fizzBuzz(i))
        }
