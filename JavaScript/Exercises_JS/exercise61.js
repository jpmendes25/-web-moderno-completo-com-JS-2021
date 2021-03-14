// Criar uma função que receba um array de números e retorne o menor número desse array.

// Exemplos:
// menorNumero([10, 5, 35, 65]) // retornará 5
// menorNumero([5, -15, 50, 3]) // retornará -15

menorNumero = arrayDeNumeros => {
    menor = arrayDeNumeros[0]
    for(i=1; i<arrayDeNumeros.length; i++){
        if(arrayDeNumeros[i]<menor){
            menor = arrayDeNumeros[i]
        }
    }
    console.log(menor)
}

menorNumero([10, 5, 35, 65])
menorNumero([5, -15, 50, 3])

/*

GABARITO

function menorNumero(numeros) {
let menor = numeros[0]
for (let i in numeros)
if (numeros[i] < menor)
menor = numeros[i]
return menor
}

function menorNumero(numeros) {
return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}

function menorNumero(numeros) {
return Math.min(...numeros);
}

*/