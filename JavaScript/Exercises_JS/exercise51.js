// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:

// Exemplos:
// receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
// receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]

receberPrimeiroEUltimoElemento = (arrayRecebido) => {
    let primeiro = arrayRecebido[0]
    let ultimo = arrayRecebido[arrayRecebido.length-1]
    console.log([primeiro, ultimo])
}

receberPrimeiroEUltimoElemento([7,14,"olá"])
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16])

/*

GABARITO

function receberPrimeiroEUltimoElemento(elementos) {
const indiceDoPrimeiroElemento = 0
const indiceDoUltimoElemento = elementos.length - 1
const primeiroElemento = elementos[indiceDoPrimeiroElemento]
const ultimoElemento = elementos[indiceDoUltimoElemento]
return [primeiroElemento, ultimoElemento]
}

function receberPrimeiroEUltimoElemento(elementos) {
const primeiroElemento= elementos.shift()
const ultimoElemento = elementos.pop()
return [primeiroElemento, ultimoElemento]
}

function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
const ultimoElemento = elementosRestantes.pop()
return [primeiroElemento, ultimoElemento]
}

*/