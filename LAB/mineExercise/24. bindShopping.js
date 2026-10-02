function solve(){
    const product = {
        name: 'Book',
        price: 12
    }

    function calculateTotal(quantity){
        return this.price * quantity;
    }

    let result = calculateTotal.bind(product);

    console.log(result(2));
    console.log(result(5));
}

solve();