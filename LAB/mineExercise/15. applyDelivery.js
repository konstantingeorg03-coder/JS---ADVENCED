function solve(){
    let order = {
        total: 0
    }

    let details = [5, 4, 3];

    function calculateOrder(price, quantity, delivery){
        this.total = price * quantity + delivery;
    }

    calculateOrder.apply(order, details);

    console.log(order.total);
}

solve();