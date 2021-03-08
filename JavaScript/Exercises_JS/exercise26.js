// 26) Fazer um programa para encontrar todos os pares entre 1 e 100.

acharPares = (i=1) => {
    pares = []
    n=0
    while(i<=100){
        paridade = i % 2
        if(paridade == 0){
            pares[n] = i
            n++
        }
        i++    
    }
    console.log(pares)
}

acharPares()

/*

GABARITO

function acharPares () {
    for (let i = 1; i <= 100; i++){
        if (i%2==0) {
            console.log(i)
        }
    }
}

acharPares()

*/