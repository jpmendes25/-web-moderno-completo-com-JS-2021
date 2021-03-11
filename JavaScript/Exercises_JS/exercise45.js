// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
// números de strings.

// Exemplos:
// maiorOuIgual(0, 0) // retornará true
// maiorOuIgual(0, "0") // retornará false
// maiorOuIgual(5, 1) // retornará true

maiorOuIgual = (numero1, numero2) => {
    if ((typeof(numero1)&&typeof(numero2)) === 'number'){
        if(numero1 > numero2){console.log(true)}
        else{console.log(false)}
    }
    else{
        console.log(false)
    }
}

maiorOuIgual(0, 0)
maiorOuIgual(0, "0")
maiorOuIgual(5, 1)

/*

GABARITO

function maiorOuIgual(primeiro, segundo) {
if(typeof primeiro != typeof segundo) return false
return primeiro >= segundo
}

*/