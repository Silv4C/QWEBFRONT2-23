searchFruit.addEventListener("click", search)
addToCart.addEventListener("click", addCart)
function addCart() {
    fruit = [
        idFruit.value, fruitName.innerHTML, fruitAmount.innerHTML, fruitPrice.innerHTML
    ]
    showCart(fruit)
}

function showCart(fruit){
        cart.innerHTML += `<p class="item">${fruit[0]} - ${fruit[1]} - ${fruit[2]} - ${fruit[3]}</p>`
    }


function search(){
    fetch("Script/frutas.json").then(
        (informacoes) => {
            informacoes.json().then(
                (fruits) => {
                    fruits.frutas.forEach(
                        (fruta) => {
                            if (fruta.codigo == idFruit.value){
                                fruitName.innerText = fruta.nome;
                                fruitAmount.innerText = fruta.quantidade;
                                fruitPrice.innerText = fruta.preco;
                            }
                        }
                    )
                }
            )
        }
    )
}
