function solve(){
    let shop = {
        price: 10
    }

    function calculateOrder(quantity, deliveryFee){
        return this.price * quantity + deliveryFee;
    }

    let result = calculateOrder.bind(shop, 3);

    console.log(result(5));
    console.log(result(8));
}

solve();