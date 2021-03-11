// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
// o segundo será o número de vezes que haverá repetição. Um array será retornado.

// Exemplos:
// repetir("código", 2) // retornará ["código", "código"]
// repetir(7, 3) // retornará [7, 7, 7]

repetir = (elemento, quantidade) => {
    let vetor = []
    for(let i=0; i<quantidade; i++){
        vetor.push(elemento)
    }
    console.log(vetor)
}

repetir("código", 2)
repetir(7, 3)

/*

GABARITO

function repetir(item, quantidade) {
let resultado = []
for (let i = 0; i < quantidade; i++)
resultado.push(item)
return resultado
}

function repetir(item, quantidade) {
return Array(quantidade).fill(item)
}

*/