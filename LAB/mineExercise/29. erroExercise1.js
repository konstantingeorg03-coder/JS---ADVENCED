class Classroom {
    constructor(){
        this.classes = {};
    }

    addStudent(name, className){
        if(!this.classes[className]){
            this.classes[className] = [];
        }

        this.classes[className].push(name);
    }

    listClasses(){
        let result = '';

        for(let className in this.classes){
            result += `${className}: ${this.classes[className].length} students \n`;
        }

        return result.trim();
    }
}

const c = new Classroom();
c.addStudent('Kosio', '10A');
c.addStudent('Ivan', '10B');
c.addStudent('Maria', '10A');
console.log(c.listClasses());