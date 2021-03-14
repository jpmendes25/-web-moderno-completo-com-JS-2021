// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.
// Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele por
// 2 é zero.

// Exemplos:
// receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
// receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]

receberSomenteOsParesDeIndicesPares = arrayPares => {
    let arrayRetornado = []
    for(i=0; i<arrayPares.length; i++){
        if((i%2===0) && (arrayPares[i]%2===0)){
            arrayRetornado.push(arrayPares[i])
        }
    }
    console.log(arrayRetornado)
}

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])

/*

GABARITO

function receberSomenteOsParesDeIndicesPares(numeros) {
let resultado = []
for(let i = 0; i < numeros.length; i += 2){
const numeroPar = numeros[i] % 2 === 0
if(numeroPar)
resultado.push(numeros[i])
}
return resultado
}

function receberSomenteOsParesDeIndicesPares(numeros) {
return numeros.filter((numero, indice) => {
const numeroPar = numero % 2 === 0
const indicePar = indice % 2 === 0
return numeroPar && indicePar
})
}

*/