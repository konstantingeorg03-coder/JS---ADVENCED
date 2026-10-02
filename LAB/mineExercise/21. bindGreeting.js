function solve(){
    let person = {
        name: 'Konstantin'
    }

    function greet(){
        console.log(`Hello ${this.name}`);
    }

    let boundGreeting = greet.bind(person);

    boundGreeting();
}

solve();