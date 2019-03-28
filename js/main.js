/**********JavaScript************/
// http://www.bestjquery.com/?_byoitV4
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
    var removeCartItemButtons = document.getElementsByClassName('remove-cart');
    console.log(removeCartItemButtons);
    for (var i = 0; i < removeCartItemButtons.length; i++ ) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++ )
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <=0){
        input.value = 1
    }
}
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++ ){
        var cartRow = cartRows[i]
            priceElement = cartRow.getElementsByClassName('cart-price')[0]
            quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
            price = parseFloat(priceElement.innerText.replace('R', ''))
            quantity = quantityElement.value
        total = total (price * quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = 'R' + total
}