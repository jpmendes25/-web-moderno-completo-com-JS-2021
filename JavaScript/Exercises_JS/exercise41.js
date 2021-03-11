// Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
// função) e com ponto de exclamação "!" no final.

// Exemplos:
// cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
// cumprimentar("Maria") // retornará "Olá, Maria!"

cumprimentar = (text) => console.log `Olá, ${text}!`

cumprimentar("Leonardo")
cumprimentar("Maria")

/*

GABARITO

function cumprimentar(nome) {
const saudacao = "Olá"
return [saudacao, nome].join(', ').concat("!")
}

function cumprimentar(nome) {
return "Olá, " + nome + "!"
}

function cumprimentar(nome) {
return `Olá, ${nome}!`
}

*/