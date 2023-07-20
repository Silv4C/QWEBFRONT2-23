//Senha do usuário recebida do Banco de dados
const BDSenha = 12345;

const SenhaInformada = 12345;
let usuarioLogado;

if(BDSenha==SenhaInformada)
{
     usuarioLogado = true
}
else
{
    usuarioLogado = false
}
console.log((usuarioLogado ? "Usuário logado\nAcesso permitido" : "Senha Incorreta\nTente novamente"))
