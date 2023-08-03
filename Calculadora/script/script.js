//Para pegar o valor digitado no input se é utilizado o método value
form.addEventListener("submit", (event) =>{
    event.preventDefault();
});

btnSomar.addEventListener("click", somar);

function somar(){
let numero1 = Number(primeiroNumero.value);
let numero2 = Number(segundoNumero.value);
let soma = numero1 + numero2;
resultado.value = soma;
btnNovaConta.style.display = "block"
};

btnSubtrair.addEventListener("click", Subtrair);

function Subtrair(){
let numero1 = Number(primeiroNumero.value);
let numero2 = Number(segundoNumero.value);
let subtracao = numero1 - numero2;
resultado.value = subtracao;
btnNovaConta.style.display = "block"
};

btnMultiplicar.addEventListener("click", Multiplicar);

function Multiplicar(){
let numero1 = Number(primeiroNumero.value);
let numero2 = Number(segundoNumero.value);
let multiplicacao = numero1 * numero2;
resultado.value = multiplicacao;
btnNovaConta.style.display = "block"
};

btnDividir.addEventListener("click", Dividir);

function Dividir(){
let numero1 = Number(primeiroNumero.value);
let numero2 = Number(segundoNumero.value);
let divisao = numero1 / numero2;
resultado.value = divisao;
btnNovaConta.style.display = "block"
};

btnMedia.addEventListener("click", CalcularMedia);

function CalcularMedia(){
let numero1 = Number(primeiroNumero.value);
let numero2 = Number(segundoNumero.value);
let media = (numero1 + numero2) / 2;
resultado.value = media;
btnNovaConta.style.display = "block"
};

btnNovaConta.addEventListener("click", redefinirValores)

function redefinirValores(){
    primeiroNumero.value = ""
    segundoNumero.value = ""
    resultado.value = ""
    btnNovaConta.style.display = "none"
}