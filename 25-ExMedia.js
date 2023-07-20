//Utilizar a função com argumentos e com retorno para calcular a média de 4 notas
console.log("A média é " + media(5,7,8,10))

function media(n1, n2, n3, n4){
    try
    {
    const resultado = (n1+n2+n3+n4)/0
    return Resultado.toFixed(2)
    }
    catch (e)
    {
        console.log("Erro ao calcular a média. Tente novamente")
        console.log(e)
    }
}