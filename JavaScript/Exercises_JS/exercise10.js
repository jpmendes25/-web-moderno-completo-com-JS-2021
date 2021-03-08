// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

funcaoDivisivel3 = numero => {
    resto = numero % 3
    if(resto == 0){
        return true
    }
    else{
        return false
    }
}

console.log(funcaoDivisivel3(0))
console.log(funcaoDivisivel3(2))
console.log(funcaoDivisivel3(9))
console.log(funcaoDivisivel3(-16))
console.log(funcaoDivisivel3(-9))

/*

GABARITO

function verificaNumero (numero) {
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(verificaNumero(3))
console.log(verificaNumero(2))
console.log(verificaNumero(150))

*/