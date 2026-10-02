function solve(){
    let cart = {
        total: 0
    }

    let purchase = [4, 3];

    function addPurchase(price, quantity){
        this.total += price * quantity;
    }

    addPurchase.apply(cart, purchase);

    console.log(cart.total);
}
solve();