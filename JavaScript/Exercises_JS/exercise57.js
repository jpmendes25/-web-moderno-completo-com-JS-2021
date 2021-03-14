// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

// Exemplos:
// somarNumeros([10, 10, 10]) // retornará 30
// somarNumeros([15, 15, 15, 15]) // retornará 60

somarNumeros = arraySoma => {
    let soma = 0
    for(i=0; i<arraySoma.length; i++){
        soma = soma + arraySoma[i]
    }
    console.log(soma)
}

somarNumeros([10, 10, 10])
somarNumeros([15, 15, 15, 15])

/*

GABARITO

function somarNumeros(numeros) {
const quantidadeDeNumeros = numeros.length
return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
}

function somarNumeros(numeros) {
let soma = 0
numeros.forEach(numero => soma += numero)
return soma
}

function somarNumeros(numeros) {
const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)
return soma
}

*/