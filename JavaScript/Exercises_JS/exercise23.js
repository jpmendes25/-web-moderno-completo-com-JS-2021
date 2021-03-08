// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

imprimeResultado = (codigo, nota1, nota2, nota3) => {
    if(nota1 >= nota2 && nota1 >= nota3) {
        peso1 = 4
        peso2 = 3
        peso3 = 3
    }
    else if(nota2 >= nota1 && nota2 >= nota3) {
        peso1 = 3
        peso2 = 4
        peso3 = 3
    }
    else if(nota3 >= nota2 && nota3 >= nota3) {
        peso1 = 3
        peso2 = 3
        peso3 = 4
    }
    media = (nota1*peso1 + nota2*peso2 + nota3*peso3)/(peso1 + peso2 + peso3)
    if(media >= 5) {
        resultado = 'APROVADO'
    }
    else{
        resultado = 'REPROVADO'
    }
    console.log(`Código: ${codigo}`)
    console.log(`Nota 1: ${nota1} - Peso: ${peso1}`)
    console.log(`Nota 2: ${nota2} - Peso: ${peso2}`)
    console.log(`Nota 3: ${nota3} - Peso: ${peso3}`)
    console.log(`Status: ${resultado}`)
}

imprimeResultado(00001, 1, 1, 10)
imprimeResultado(00002, 1, 10, 1)
imprimeResultado(00003, 10, 1, 1)
imprimeResultado(00004, 10, 10, 1)
imprimeResultado(00005, 10, 1, 10)
imprimeResultado(00006, 1, 10, 10)
imprimeResultado(00007, 10, 10, 10)

// ***OBS.: Não fiz o for pois, como não foi ensinado como inserir valores via teclado, o programa ficaria em
// um loop infinito.

/*

GABARITO

function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)

*/