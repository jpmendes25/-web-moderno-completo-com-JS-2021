// 35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
// inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
// e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
// final das operações imprima os vetores no console.

adicionaVetor = (vetorPilha, vetorAdiciona) => {
    contador1 = 0
    contador2 = 0
    vetorResultado = [ ]
    for(i=0; i>=0; i++){
        if(!!vetorPilha[i] == true){
            contador1++
        }
        else{
            break
        }
    }
    for(i=0; i>=0; i++){
        if(!!vetorAdiciona[i] == true){
            contador2++
        }
        else{
            break
        }
    }
    for(i=0; i<=(contador1+contador2-1); i++){
        if(!!vetorPilha[i] == true){
            vetorResultado[i] = vetorPilha[i] 
        }
        else{
            vetorResultado[i] = vetorAdiciona[i-contador1]
        }
    }
    console.log(vetorResultado)
}

adicionaVetor([1, 2, 3, 4, 5],[6, 7, 8, 9, 10])

/*

GABARITO

let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor(vetorInicial, vetorAdicionar) {
    for(let i = 0; i < vetorAdicionar.length; i++) {
        console.log(vetorAdicionar[i])
        vetorInicial.push(vetorAdicionar[i])
    }
    console.log('Vetor adicionado: ' + vetorAdicionar)
    console.log('Vetor resultado: ' + vetorInicial)
}

adicionaVetor(vetorPilha, vetorAdiciona)

*/