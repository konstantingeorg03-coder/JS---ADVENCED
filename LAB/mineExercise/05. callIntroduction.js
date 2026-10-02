function solve(){
    let person = {
        name: 'Konstantin'
    }

    function introduce(city){
        console.log(`${this.name} lives in ${city}`);
    }

    introduce.call(person, 'Sofia');
}

solve();