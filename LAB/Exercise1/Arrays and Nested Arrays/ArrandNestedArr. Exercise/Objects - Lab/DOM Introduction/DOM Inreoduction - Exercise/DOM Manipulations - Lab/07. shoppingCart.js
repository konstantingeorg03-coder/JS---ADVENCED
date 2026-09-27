function solve() {
    let addButtons = document.querySelectorAll('.add-product');

    let buttonCheckout = document.querySelector('.checkout');

    let textArea = document.querySelector('textarea');

    let products = [];

    let totalPrice = 0;

    for(let button of addButtons){
        button.addEventListener('click', addProduct);
    }

    buttonCheckout.addEventListener('click', checkout);

    function addProduct(event){
        let product = event.target.parentElement.parentElement;

        let name = product.querySelector('.product-title').textContent;

        let price = Number(product.querySelector(`.product-line-price`).textContent);

        if(!products.includes(name)){
            products.push(name);
        }

        totalPrice += price;

        textArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`; 
    }

    function checkout(){
        textArea.value += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`;

        for(let button of addButtons){
            button.disabled = true;
        }

        buttonCheckout.disabled = true;
    }
}