// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

calculaAltura = (altura1, taxa1, altura2, taxa2) => {
    if(altura1>altura2){
        console.log('A criança 2 é menor que a criança 1')
        i=0
        let alturaFinal1 = altura1
        let alturaFinal2 = altura2
        while(alturaFinal1>alturaFinal2){
            alturaFinal1 = altura1 + i * taxa1
            alturaFinal2 = altura2 + i * taxa2
            i++
            if(i>=21){
                break
            }
        }
        if(alturaFinal1>alturaFinal2){
            console.log('A criança 2 não ultrapassa a criança 1')
        }
        else{
            console.log(`A criança 2 ultrapassa a criança 1 em ${i-1} ano(s)`)
        }
    }
    if(altura2>altura1){
        console.log('A criança 1 é menor que a criança 2')
        j=0
        let alturaFinal1 = altura1
        let alturaFinal2 = altura2
        while(alturaFinal2>alturaFinal1){
            alturaFinal1 = altura1 + j * taxa1
            alturaFinal2 = altura2 + j * taxa2
            j++
            if(j>=21){
                break
            }
        }
        if(alturaFinal2>alturaFinal1){
            console.log('A criança 1 não ultrapassa a criança 2')
        }
        else{
            console.log(`A criança 1 ultrapassa a criança 2 em ${i-1} ano(s)`)
        }
    }
    if(altura1===altura2){
        console.log('As crianças possuem o mesmo tamanho')
        if(taxa1>taxa2){
            console.log('A criança 1 ultrapassará a criança 2 neste ano')
        }
        if(taxa2>taxa1){
            console.log('A criança 2 ultrapassará a criança 1 neste ano')
        }
        if(taxa1===taxa2){
            console.log('Ambas as crianças terão sempre a mesma altura')
        }
    }
}

calculaAltura(130,10,120,5)
console.log('________________________________________________')
calculaAltura(130,5,120,10)
console.log('________________________________________________')
calculaAltura(120,5,130,10)
console.log('________________________________________________')
calculaAltura(120,10,130,5)
console.log('________________________________________________')
calculaAltura(120,10,120,5)
console.log('________________________________________________')
calculaAltura(120,5,120,10)
console.log('________________________________________________')
calculaAltura(120,5,120,5)

/*

GABARITO

function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return calcularTempo(altura2, taxa2, altura1, taxa1) 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return calcularTempo(altura1, taxa1, altura2, taxa2) 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4));

*/