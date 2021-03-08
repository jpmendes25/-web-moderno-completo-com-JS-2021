// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

analisaInteiros = vetor => {
    maior = vetor[0]
    menor = vetor[0]
    for(i=1; i<vetor.length; i++){
        if(vetor[i]<menor){
            menor = vetor[i]
        }
        if(vetor[i]>maior){
            maior = vetor[i]
        }
    }
    console.log(`O menor número do vetor é ${menor} e o maior é ${maior}`)
}

analisaInteiros([30, 10, 60, 80, 20])
analisaInteiros([10, 5, 7, 3, 1, 3, 11, 20, 6, 9])

/*

GABARITO

function maiorMenor (vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor))

*/