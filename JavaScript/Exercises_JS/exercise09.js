// 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
// classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
// possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
// que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
// arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
// 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
// seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
// e o aluno será aprovado.

resultado = nota => {
    if(nota>=38 && nota<=100){
        resto = nota % 5
        if(resto > 2) {notaArredondada = nota - resto + 5}
        else{notaArredondada = nota}
        console.log(`Aprovado! Nota=${nota}, Arredondamento=${notaArredondada}`)
    } 
    else if(nota<38 && nota>=0){
        console.log(`Reprovado! Nota=${nota}, Arredondamento=${nota}`)
    }
    else {
        console.log('Valor de nota inválido!!!')
    }
}

resultado(100)
resultado(84)
resultado(72)
resultado(38)
resultado(29)
resultado(101)
resultado(-1)

/*

GABARITO

function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)

*/