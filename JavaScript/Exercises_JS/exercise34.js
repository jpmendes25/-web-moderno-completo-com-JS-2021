// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

funcaoCaracteres = (string1, string2) => {
    ok1 = []
    comparador1 = false
    ok2 = []
    comparador2 = false
    for(i=0; !!string1.charAt(i) == true; i++){
        for(j=0; !!string1.charAt(j) == true; j++){
            if(string1.charAt(i).toUpperCase() === string2.charAt(j).toUpperCase()){
                ok1[i]='ok'
            }
        }
    }
    if(ok1.length === string1.length){
        comparador1 = true
    }
    for(i=0; !!string2.charAt(i) == true; i++){
        for(j=0; !!string2.charAt(j) == true; j++){
            if(string2.charAt(i).toUpperCase() === string1.charAt(j).toUpperCase()){
                ok2[i]='ok'
            }
        }
    }
    if(ok2.length === string2.length){
        comparador2 = true
    }
    if(comparador1 && comparador2 == true){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

funcaoCaracteres('qwe','ewq')
funcaoCaracteres('qwe','qw')
funcaoCaracteres('qw','qwe')


/*

GABARITO

function verificacaoDeString (string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let caractereString2 = string2.charAt(j).toLowerCase()
            if(caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido
 }

 console.log(verificacaoDeString('abc','cba'))

*/