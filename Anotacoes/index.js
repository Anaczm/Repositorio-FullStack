// laço for

const lista = ["mouse", "teclado", "lápis", "notebook"]

for(let i = 0; i < lista.length; i++){
    console.log(lista[i])
}

    // exercício/aula 53
    const elementos = [
        {tag: 'h1', texto: 'tapioca homofóbica'},
        {tag: 'h2', texto: 'tapioca homofóbica2'},
        {tag: 'h3', texto: 'tapioca homofóbica3'}
    ]

    const content = document.querySelector('content')
    const h1 = document.createElement('h1')

    for(i = 0; i < elementos.length; i++){
        let {tag, texto} = elementos[i]
        let tagCriada = document.createElement(tag)
        let textoCriado = document.createTextNode(texto)

        textoCriado.appendChild(textoCriado)
        h1.appendChild(tagCriada)
    }

    content.appendChild(h1)

    // DOM: documents objetive model
