// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.

// Exemplos:
// simboloMais(2) // retornará "++"
// simboloMais(4) // retornará "++++"

simboloMais = (numero) => {
    let stringFinal = ''
    for(i=1; i<=numero; i++){
        stringFinal = stringFinal.concat('+')
    }
    console.log(stringFinal)
}

simboloMais(2)
simboloMais(4)

/*

GABARITO

function simboloMais(quantidade) {
let resultado = ''
for(let i = 0; i < quantidade; i++)
resultado += '+'
return resultado
}

function simboloMais(quantidade) {
return Array(quantidade).fill('+').join('')
}

function simboloMais(quantidade) {
return "+".repeat(quantidade)
}

*/