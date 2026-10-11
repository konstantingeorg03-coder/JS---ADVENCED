function Cat(name){
    this.name = name;
}

Cat.prototype.legs = 4;

Cat.prototype.meow = function() {
    return `${this.name} says meow`;
};

let tom = new Cat('Tom');
let kitty = new Cat('Kitty');

console.log(tom.meow());     // Tom says meow
console.log(kitty.meow());   // Kitty says meow

console.log(tom.name, tom.legs);       // Tom 4
console.log(kitty.name, kitty.legs);   // Kitty 4
console.log(Object.keys(tom));         // ???