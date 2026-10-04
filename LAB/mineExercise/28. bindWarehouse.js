function solve(){
    let warehouse = {
        price: 20,
        stock: 8
    }

    function buy(discount, quantity){
        if(this.stock >= quantity){
            let totalprice = quantity * this.price;

            let discountAmount = totalprice * discount / 100;

            return totalprice - discountAmount;
        }else{
            return 'Not enough stock';
        }
    }

    let result = buy.bind(warehouse, 10);

    console.log(result(2));
    console.log(result(3));
    console.log(result(4));
}

solve();