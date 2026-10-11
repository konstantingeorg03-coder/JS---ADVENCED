class Student {
    constructor(name){
        this.name = name;
    }
}

function addSchool(Class){
    Class.prototype.school = 'SoftUni';

    Class.prototype.info = function(){
        return `${this.name} studies at ${this.school}`;
    };
}

addSchool(Student);
let s = new Student('Kosio');
console.log(s.school);   // SoftUni
console.log(s.info());   // Kosio studies at SoftUni