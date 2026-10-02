function solve(){
    let account = {
        owner: 'Ivan',
        balance: 500
    }

    function withdraw(fee, amount){
        if(this.balance >= fee + amount){
            return this.balance -= fee + amount;
        }else{
            return 'Not enough money';
        }
    }

    let result = withdraw.bind(account, 5);

    console.log(result(100));
    console.log(result(200));
    console.log(result(200));
}

solve();