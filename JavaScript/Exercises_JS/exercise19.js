// 19) O cardápio de uma lanchonete é o seguinte:
// Código   Descrição do Produto   Preço
// 100      Cachorro Quente        R$ 3,00
// 200      Hamburguer Simples     R$ 4,00
// 300      Cheeseburguer          R$ 5,50
// 400      Bauru                  R$ 7,50
// 500      Refrigerante           R$ 3,50
// 600      Suco                   R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente

valorPago = (codigo, quantidade) => {
    switch(codigo){
        case 100:
            console.log(`${quantidade}x Cachorro Quente = R$ ${(quantidade * 3).toFixed(2).replace('.', ',')}`)
            break
        case 200:
            console.log(`${quantidade}x Hamburguer Simples = R$ ${(quantidade * 4).toFixed(2).replace('.', ',')}`)
            break
        case 300:
            console.log(`${quantidade}x Cheeseburguer = R$ ${(quantidade * 5.5).toFixed(2).replace('.', ',')}`)
            break
        case 400:
            console.log(`${quantidade}x Bauru = R$ ${(quantidade * 7.5).toFixed(2).replace('.', ',')}`)
            break
        case 500:
            console.log(`${quantidade}x Refrigerante = R$ ${(quantidade * 3.5).toFixed(2).replace('.', ',')}`)
            break
        case 600:
            console.log(`${quantidade}x Suco = R$ ${(quantidade * 2.8).toFixed(2).replace('.', ',')}`)
            break
        default:
            console.log('Produto inexistente')
    }
}

valorPago (100, 2)
valorPago (200, 3)
valorPago (300, 4)
valorPago (400, 5)
valorPago (500, 6)
valorPago (600, 7)
valorPago (700, 1)

/*

GABARITO

function calcularVenda(codigoProduto, qtd) {
    switch (codigoProduto) {
        case 100:
            return qtd * 3
        case 200:
            return qtd * 4
        case 300:
            return qtd * 5.5
        case 400:
            return qtd * 7.5
        case 500:
            return qtd * 3.5
        case 600:
            return qtd * 2.8
        default:
            return 'Produto não existente.'
    }
}

console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))

*/