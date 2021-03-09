// 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
// bem como a soma dos elementos.

progressaoAritmetica = (n, a1, r)=>{
    let pa = []
    for(i=0; i<n; i++){
        pa[i] = a1 + ((i+1)-1) * r
    }
    somaAritmetica = (a1 + pa[n-1])*n/2
    console.log(`Progressão Aritmética => ${pa}; Soma dos elementos = ${somaAritmetica}`)
}

progressaoGeometrica = (n, a1, r)=>{
    let pg = []
    for(i=0; i<n; i++){
        pg[i] = a1 * (r ** ((i+1)-1))
    }
    somaGeometrica = a1 * ((r ** n) - 1)/(r - 1)
    console.log(`Progressão Geométrica => ${pg}; Soma dos elementos = ${somaGeometrica}`)
}

progressaoAritmetica(7,25,3)
progressaoGeometrica(7,25,3)

/*

GABARITO

function pA (n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r*i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
}

function pG (n, a1, r) {
    //console.log(a1)
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}

pA(10, 10, 15)
console.log('----------------');
pG(10, 10, 15)

*/