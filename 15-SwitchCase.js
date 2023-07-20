const fruta = "Maçã";

switch (fruta.toLowerCase())
{
    case "mamão":
    case "mamao":
        console.log("Quitandanda danda");
        console.log("O preço do mamão é de R$ 10,00")
    break;
    case "banana":
        console.log("Quitandanda danda");
        console.log("O preço da banana é de R$ 50,00/kg");
    break;
    case "maçã":
    case "maça":
    case "maca":
        console.log("Quitandanda danda");
        console.log("O preço da maçã é de R$ 0,99/unidade");
    break;

    default:
        console.log("Quitandanda danda");
        console.log("A fruta informada não está disponível");
}





