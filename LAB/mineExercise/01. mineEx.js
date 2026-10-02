function solve(){
    let obj = {
        name: 'Konstantin',
        age: 23,
        introduce(){
            console.log(`My name is ${this.name} and I am ${this.age}`);
        },

        haveBirthday(){
            this.age ++;
        }
    }

    obj.introduce();

    obj.haveBirthday();

    obj.introduce();
}

solve();