verResposta1.addEventListener("click",()=>{
    let n1 = +numero1.value
    let n2 =  +numero2.value
    let soma = n1 + n2
    resposta1.innerHTML = `Resposta: ${soma}`
})

verResposta2.addEventListener("click", ()=>{
    cardVermelho.style.backgroundColor = "red"
})

verResposta3.addEventListener("click", ()=>{
    for(let i=0; i<=5; i++){
        resposta3.innerHTML += "<br>" + i
    }
})

verResposta4.addEventListener("click", ()=>{
    let mediaAluno = +media.value

    if(mediaAluno>=6){
        resposta4.innerHTML = `Aprovado!`
    }
    else{
        resposta4.innerHTML = `Reprovado!`
    }

    //resposta4.innerHTML += (+media.value >= 6 ? "Aprovado" : "Reprovado")
})


