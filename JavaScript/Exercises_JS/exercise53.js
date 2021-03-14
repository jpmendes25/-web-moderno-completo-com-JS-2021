// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.

// Exemplos:
// filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
// filtrarNumeros(["a", "c"]) // retornará []

filtrarNumeros = arrayDeElementos => {
    let novoArray = []
    for(i=0; i<arrayDeElementos.length; i++){
        if(typeof(arrayDeElementos[i])==='number'){
            novoArray.push(arrayDeElementos[i])
        }
    }
    console.log(novoArray)
}

filtrarNumeros(["Javascript", 1, "3", "Web", 20])
filtrarNumeros(["a", "c"])

/*

GABARITO



*/