// 12) Faça um algoritmo que calcule o fatorial de um número

calculaFatorial = numero => {
    fatorial = numero
    if(numero == 0){
        return 1
    }
    else{
        for(i=numero; i>0; i--){
            fatorial = fatorial + (numero - i) 
        
        }
        return fatorial
    }
}

console.log(calculaFatorial(0))
console.log(calculaFatorial(4))
console.log(calculaFatorial(6))

/*

GABARITO

function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))

*/