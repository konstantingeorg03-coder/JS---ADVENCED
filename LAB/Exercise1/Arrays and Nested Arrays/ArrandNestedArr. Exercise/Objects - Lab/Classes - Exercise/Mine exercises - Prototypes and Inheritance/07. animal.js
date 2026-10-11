let animal = {
    sound: '...',
    speak(){
        return `I say ${this.sound}`;
    }
}

let dog = Object.create(animal);

dog.sound = 'wooof!';

console.log(animal.speak());   // ???
console.log(dog.speak());      // ???
console.log(Object.keys(dog)); // ???