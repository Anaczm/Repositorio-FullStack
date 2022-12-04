    //Anotações sobre alguns tipos de for(for clássico, for in, for of, for each)

    // For clássico
    const lista = ["mouse", "teclado", "lápis", "notebook"]

    for(let i = 0; i < lista.length; i++){
        console.log(lista[i])
    }

    //  For in -> lê/retorna os índices ou chaves de um objeto

    for(let i in lista){
        console.log(i)

        // leitura dos valores da lista
        console.log(lista[i])
    }

    const usuario = {
        nome: 'Ana',
        email: 'ana@gmail.com',
        senha: '12345'
    }

    for(let key in usuario){
        console.log(usuario[key])
    }

    // For of -> lê/retorna o valor   
    for(let valor of lista){
        console.log(lista)
    }

    // For each -> 
    lista.forEach(function(valor, indice){
        console.log(valor, indice)
    })