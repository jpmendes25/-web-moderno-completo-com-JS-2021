// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

funcaoOperadora = (valor1, valor2) => {
    console.log(`Soma = ${valor1 + valor2}`)
    console.log(`Subtração = ${valor1 - valor2}`)
    console.log(`Multiplicação = ${valor1 * valor2}`)
    console.log(`Divisão = ${valor1 / valor2}`)
}

funcaoOperadora(7, 3)

/*

GABARITO

function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)

*/