function solve(){
    let obj = {
        owner: 'Konstantin',
        balance: 100,
        
        deposit(sum){
            this.balance += sum;
        },

        withrdaw(amount){
            this.balance -= amount;
        }
    }

    obj.deposit(33);
    obj.withrdaw(40);

    console.log(obj.balance);
}
solve();