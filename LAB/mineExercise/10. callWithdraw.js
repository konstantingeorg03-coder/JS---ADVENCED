function solve(){
    let account1 = {
        owner: 'Viktor',
        balance: 200
    };

    let account2 = {
        owner: 'Ivan',
        balance: 80
    };

    function withdraw(amount){
        if(this.balance >= amount){
            this.balance -= amount;

            console.log('Successfull withdrawal');
        }else{
            console.log('Not enough money');
        }
    }

    withdraw.call(account1, 150);
    withdraw.call(account2, 100);

    console.log(account1.balance);
    console.log(account2.balance);
}

solve();