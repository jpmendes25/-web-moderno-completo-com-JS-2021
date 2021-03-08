// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

regimeJurosSimples = (capitalInicial, taxaJuros, tempoAplicacao) => {
    montanteJurosSimples = `O montante a juros simples é ${capitalInicial + capitalInicial * taxaJuros * tempoAplicacao}`
    return montanteJurosSimples
}

regimeJurosCompostos = (capitalInicial, taxaJuros, tempoAplicacao) => {
    montanteJurosCompostos = `O montante a juros compostos é ${capitalInicial * (1 + taxaJuros) ** tempoAplicacao}`
    return montanteJurosCompostos
}

console.log(regimeJurosSimples(1000, 0.1, 3))
console.log(regimeJurosCompostos(1000, 0.1, 3))

/*

GABARITO

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));

*/