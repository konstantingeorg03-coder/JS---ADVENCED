function solve(){
    let shop = {
        price: 10, 
        stock: 6
    }

    let orders = [[2], [3], [4]];

    function buy(quantity){
        if(this.stock >= quantity){
            this.stock -= quantity;
            return this.price * quantity;
        }else{
            return 'Not enouht stock';
        }
    }

    for(let order of orders){
        let result = buy.apply(shop, order);

        console.log(result);
    }
}

solve();