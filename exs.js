// console.log("Ex 1")

// function VerificarValor(valor){
//     valor = prompt("Insira o número para verifica-lo")
//     if(valor > 0){
//         console.log("1 - Positivo")
//     }else if(valor == 0 ){
//         console.log("0")
//     }else if(valor < 0){
//         console.log("-1 - Negativo")
//     }
// }

// VerificarValor()

// 2. Faça um algoritmo que lê um valor inteiro de reais e calcula o
// menor valor possível de notas de 100, 50, 10, 5 e 1 que o
// valor lido pode ser decomposto. Exiba o valor lido e a
// decomposição. Ex.: 576 // 5 nota(s) de 100 1 nota(s) de 50 2
// notas(s) de 10 1 nota(s) de 5 1 nota(s) de 1

console.log("Ex 2")

var valor = parseInt(prompt("Insira o valor para decompor"))

function DecomporValor(num){
    var centena = Math.floor(num / 100)
    var cinquenta = Math.floor((num % 100) / 50)
    var dezena = Math.floor(((num % 100) % 50) / 10)
    var cinco =  Math.floor((((num % 100) % 50) % 10) / 5)
    var unidade = Math.floor(((((num % 100) % 50) % 10) % 5) / 1)

    console.log(`${num}: \n${centena} notas de 100 \n${cinquenta} notas de 50 \n${dezena} notas de 10 \n${cinco} notas de 5 \n${unidade} notas de 1`)
}

DecomporValor(valor)