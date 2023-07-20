//Array - Arranjo de dados - Lista de Valores
//Método Push - adiciona um item ao final do Array
//Método pop - Remove o último item do final do Array
//Método lenght - Mostra a quantidade de valores no Array
//Método UnShift - Adiciona um item para o começo da Array
//Método Shift - Remove o primeiro item de uma Array
//Método IndexOf - Mostra a posição de algum item dentro de uma Array
//Método Splice(indice do item, quantidade para excluir) - remove um item de dentro do Array

let carros = ["Gol", "Celta Preto","Fox","Opala","Ferrari", "Kia Soul"];
//A lista começa no 0, não no 1
/*
console.log(carros.length);
carros.unshift("Logan","Doblo");
console.log(carros[0]);
carros.shift();
console.log(carros[0]);
*/

let itemParaExcluir = (carros.indexOf("Opala"))
carros.splice(itemParaExcluir,1)