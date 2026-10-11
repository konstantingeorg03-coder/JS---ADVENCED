function createPerson(firstName, lastName){
    let person = {firstName, lastName};

    Object.defineProperty(person, 'fullName', {
        get(){
            return `${this.firstName} ${this.lastName}`;
        },
        set(value){
            let parts = value.split(' ');

            if(parts.length === 2){
                this.firstName = parts[0];

                this.lastName = parts[1];
            }
        }
    });

    return person;

}

let person = createPerson("Albert", "Simpson");

person.fullName = "Peter";          // само една дума, НЕВАЛИДНО
console.log(person.firstName);      // Simon   ← не се е сменило
console.log(person.lastName);       // Simpson ← не се е сменило