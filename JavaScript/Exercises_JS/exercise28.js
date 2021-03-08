// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

leNumerosInteiros = vetor => {
    pares = 0
    impares = 0
    for(i=0; i<vetor.length; i++){
        if (vetor[i] % 2 === 0){
            pares++
        }
        if (vetor[i] % 2 === 1){
            impares++
        }
    }
    console.log(`O vetor possui ${pares} números pares e ${impares} números ímpares`)
}

leNumerosInteiros([12, 14, 16, 18, 13, 15, 17])
leNumerosInteiros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])

/*

GABARITO

function paresImpares(vetorNumeros) {
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor)

*/