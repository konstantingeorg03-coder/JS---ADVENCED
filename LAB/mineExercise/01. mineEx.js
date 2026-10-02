function solve(){
    let obj = {
        name: 'Konstantin',
        introduce(){
            console.log(`My name is ${this.name}`);
        }
    }

    obj.introduce();
}

solve();