function solve(){
    let person = {
        name: 'Ivan'
    }

    function intrduce(city, job){
        console.log(`${this.name} lives in ${city} and works as ${job}`);
    }

    intrduce.apply(person, ['Sofia', 'developer']);
}

solve();