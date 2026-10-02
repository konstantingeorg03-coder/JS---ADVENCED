function solve(){
    let person1 = {
        name: 'Konstantin'
    };

    let person2 = {
        name: 'Ivan'
    };

    function greet(){
        console.log(`Hello ${this.name}!`);
    }

    greet.call(person1);

    greet.call(person2);
    
}

solve();