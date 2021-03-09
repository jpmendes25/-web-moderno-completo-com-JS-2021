// 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

funcao1 = (vetor, numero) => {
    vetorResultado1 = []
    for(i=0; i<vetor.length; i++){
        vetorResultado1[i] = vetor[i] * numero
    }
    console.log(vetorResultado1)
}

funcao2 = (vetor, numero) => {
    vetorResultado2 = []
    for(i=0; i<vetor.length; i++){
        if(vetor[i]>5){
            vetorResultado2[i] = vetor[i] * numero
        }
        else {
            vetorResultado2[i] = vetor[i]
        }
    }
    console.log(vetorResultado2)
}

funcao1([1, 2, 3, 4, 5], 2)
funcao2([3, 4, 5, 6, 7], 2)

/*

GABARITO

let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetor, 3))

*/