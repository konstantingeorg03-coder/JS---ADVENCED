function solve(){
    let shop = {
        price: 15,
        stock: 5
    }

    function buy(quantity){
        if(this.stock >= quantity){
            this.stock -= quantity;

            return quantity * this.price;
        }else{
            return 'Not enough stock';
        }
    }

    let result1 = buy.apply(shop, [3]);
    let result2 = buy.apply(shop, [4]);

    console.log(result1, shop.stock);
    console.log(result2, shop.stock);
}

solve();