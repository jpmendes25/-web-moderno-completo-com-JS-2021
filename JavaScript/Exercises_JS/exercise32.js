// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

calculaMediaInteiros = vetor => {
    soma = vetor[0]
    for (i=1; i<vetor.length; i++){
        soma = soma + vetor[i]
        media = soma/(i+1)
    }
    return media
}

console.log(calculaMediaInteiros([1, 2, 3, 4, 5, 6, 7, 8]))

/*

GABARITO

function mediaVetor (vetor) {
    let soma = 0
    for(let i=0; i<vetor.length; i++) {
        soma += vetor[i]
    }

    return soma/vetor.length
}

vetor = [1, 2, 3, 4, 5]

console.log(mediaVetor(vetor))

*/