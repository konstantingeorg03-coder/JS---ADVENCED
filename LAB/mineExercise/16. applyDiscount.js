function solve(){
    let product = {
        name: 'Keyboard',
        price: 100
    }

    const details = [3, 10];

    function calculateTotal(quantity, discountPercent){
        let totalPrice = this.price * quantity;
        let discount = totalPrice / 100 * discountPercent;

        return totalPrice - discount;
    }

    let result = calculateTotal.apply(product, details);

    console.log(result);
}

solve();