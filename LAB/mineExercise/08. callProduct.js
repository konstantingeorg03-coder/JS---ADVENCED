function solve(){
    let product1 = {
        name: 'Bread',
        price: 2
    };

    let product2 = {
        name: 'Milk',
        price: 3
    }

    function calculateTotal(quantity){
        return this.price * quantity;
    }

    let total1 = calculateTotal.call(product1, 4);
    let total2 = calculateTotal.call(product2, 3);

    console.log(total1);
    console.log(total2);
}

solve();