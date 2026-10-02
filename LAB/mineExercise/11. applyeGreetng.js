function solve(){
    let obj = {
        name: 'Konstantin'
    }

    function greet(message){
        console.log(`${message} ${this.name}`);
    }

    greet.apply(obj, ['Hello']);
}

solve();