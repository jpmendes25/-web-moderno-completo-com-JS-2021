// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
// possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está
// desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.

// Exemplos:
// despesasTotais([
//     {nome: "Jornal online", categoria: "Informação", preco: 89.99},
//     {nome: "Cinema", categoria: "Entretenimento", preco: 150}
// ]) // retornará 239.99
// despesasTotais([
//     {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
//     {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
// ]) // retornará 34599.89

despesasTotais = servico => {
    let despesasTotais = 0
    for(i=0; i<servico.length; i++){
        despesasTotais = despesasTotais + servico[i].preco
    }
    console.log(`R$${despesasTotais}`)
}

despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
])
despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
])

/*

GABARITO

function despesasTotais(itens) {
var total = 0
for (let item of itens)
total += item.preco
return total
}

function despesasTotais(itens) {
return itens
.map(item => item.preco)
.reduce((acumulador, valorAtual) => acumulador + valorAtual)
}

function despesasTotais(itens) {
return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}

*/