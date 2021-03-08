// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

funcaoResultadoResto = (dividendo, divisor) => {
    console.log (`O resultado é ${Math.floor(dividendo / divisor)}`)
    console.log (`O resto é ${dividendo % divisor}`)
}

funcaoResultadoResto(7,2)

/*

GABARITO

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)

*/