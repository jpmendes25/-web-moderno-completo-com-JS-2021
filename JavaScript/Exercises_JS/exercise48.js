// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.
// Exemplo:
// multiplicar(5, 5) // retornará 25
// multiplicar(0, 7) // retornará 0

multiplicar = (numero1, numero2) => {
    let multiplicado = 0
    for(i=1; i<=numero2; i++){
        multiplicado = multiplicado + numero1
    }
    console.log(multiplicado)
}

multiplicar(5, 5)
multiplicar(0, 7)

/*

GABARITO

function multiplicar(numeroA, numeroB) {
let resultado = 0
// a otimização feita para diminuir a quantidade de chamadas recursivas pode ser
// realizada aqui para diminuir a quantidade de loops
for(let i = 0; i < numeroB; i++)
resultado += numeroA
return resultado
}

function multiplicar(numero, multiplicador) {
if (numero === 0 || multiplicador === 0) return 0
return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador-1)
}

function multiplicar(numeroA, numeroB) {
if (numeroA === 0 || numeroB === 0) return 0
const maiorNumero = Math.max(numeroA, numeroB)
const menorNumero = Math.min(numeroA, numeroB)
function multiplicarRecursivamente(numero, multiplicador) {
return (
multiplicador === 1 ?
numero :
numero + multiplicarRecursivamente(numero, multiplicador-1)
)
}
// nessa versão, garantimos que o multiplicador será será o menor número, portanto haverá o mínimo de chamadas recursivas
return multiplicarRecursivamente(maiorNumero, menorNumero )
}

*/