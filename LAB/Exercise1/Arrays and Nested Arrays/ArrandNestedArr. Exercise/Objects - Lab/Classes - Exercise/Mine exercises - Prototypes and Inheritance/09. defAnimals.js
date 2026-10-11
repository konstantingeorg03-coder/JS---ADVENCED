class Animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        return `${this.name} makes a sound`;
    }
}


class Dog extends Animal{
    constructor(name, breed){
        super(name);

        this.breed = breed;
    }

    speak(){
        return `${super.speak()} and barks`;
    }
}

let d = new Dog('Rex', 'Labrador');
console.log(d.name);               // Rex
console.log(d.breed);              // Labrador
console.log(d instanceof Dog);     // ???
console.log(d instanceof Animal);  // ???

let a = new Animal('Generic');
console.log(a.speak());   // Generic makes a sound
console.log(d.speak());   // ???