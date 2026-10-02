function solve(){
    let person = {
        name: 'Konstantin',
        age: 23,

        growOlder(years){
            this.age += years;
        },

        introduce(){
            console.log(`My name is ${this.name} and I am ${this.age}`);
        }
    }

    person.introduce();

    person.growOlder(5);

    person.introduce();
}

solve();