// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

leVetor = vetor => {
    entreIntervalo = 0
    for(i=0; i<vetor.length; i++){
        if(vetor[i]>=10 && vetor[i]<=20){
            entreIntervalo++
        }
    }
    console.log(`Dos ${vetor.length} números, ${entreIntervalo} estão dentro do intervalo e ${vetor.length-entreIntervalo} estão fora`)
}

leVetor([1, 2, 3, 10, 11, 12, 20, 30, 100])
leVetor([7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21])

/*

GABARITO

function observarIntervalo (vetor) {
    qtdNumerosNoIntervalo = 0
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20){
            qtdNumerosNoIntervalo++
        }
    }
    return `${qtdNumerosNoIntervalo} números dentro do intervalo.`
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(observarIntervalo(vetor))

*/