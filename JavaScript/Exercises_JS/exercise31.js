// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

contaNegativos = vetor => {
    negativos = 0
    for(i=0; i<vetor.length; i++){
        if(vetor[i]>0){
            negativos++
        }
    }
    console.log(`Há ${negativos} valores negativos no vetor`)
}

contaNegativos([-1, 1, -2, 2, -3, 3, 2, -4])

/*

GABARITO

function numerosNegativos (vetor) {
    let qtdNegativos = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            qtdNegativos++
        }
    }
    return qtdNegativos
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(numerosNegativos(vetor))

*/