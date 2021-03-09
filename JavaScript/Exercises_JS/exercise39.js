// 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente
// Faça a troca sem utilizar uma variável auxiliar.

inverteVetores = (vetorA, vetorB) => {
    if(vetorB.length === vetorA.length){
        for(i=0; i<vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
        console.log(`VetorA = ${vetorA}`)
        console.log(`VetorB = ${vetorB}`)
    }
    else {
        console.log('Vetores com tamanhos diferentes!!!')
    }
}

vetorA = [1, 2, 3, 4, 5]
vetorB = [6, 7, 8, 9, 0]
inverteVetores(vetorA,vetorB)

/*

GABARITO

function trocaValores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaValores(vetorA, vetorB)

*/