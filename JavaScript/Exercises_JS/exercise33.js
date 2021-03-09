// 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
// quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
// mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

funcaoConcat1 = (vetorInteiro, vetorString, vetorDouble) => {
    console.log(vetorInteiro.concat(vetorString).concat(vetorDouble))
}

funcaoConcat2 = (vetorInteiro, vetorString, vetorDouble) => {
    concatenado = vetorInteiro.concat(vetorString).concat(vetorDouble)
    console.log(concatenado)
}

funcaoConcat1([1, 2, 3, 4], ['a', 'b', 'c', 'd'], [1.1, 2.2, 3.3, 4.4])
funcaoConcat2([1, 2, 3, 4], ['a', 'b', 'c', 'd'], [1.1, 2.2, 3.3, 4.4])

/*

GABARITO

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))

*/