const n1 = 10
const n2 = 20
const n3 = 30
const n4 = 40

somar(n1,n1)
somar(n1,n2)
somar(n1,n3)
somar(n1,n4)

//função sem retorno onde é realizado os cálculos e não há devolutiva de algum valor
function somar(n1, n2) {
    const resultado = n1 + n2
    console.log(`O resultado da soma é: ${resultado}`)
}

console.log("O resultado da Multiplicação é: "+ Multiplicar(5,10))
//função com retorno, onde há uma devolutiva de algum valor
function Multiplicar(n1, n2) {
    const resultado = n1 * n2
    return resultado
}

console.log("Hoje é dia " + exibirDataAtual())

function exibirDataAtual(){
    const data = new Date()
    const hoje = data.getDate()
    const mes = data.getMonth()  + 1               
    const ano = data.getFullYear()
    const dataCompleta = hoje + "/"+ mes + "/" + ano
    return dataCompleta
}