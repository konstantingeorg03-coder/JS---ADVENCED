function solve(){
    let person = {
        name: 'Ivan'
    }

    function introduce(city){
        console.log(`${this.name} lives in ${city}`);
    }

    let result = introduce.bind(person);

    result('Sofia');
    result('Varna');
}

solve();