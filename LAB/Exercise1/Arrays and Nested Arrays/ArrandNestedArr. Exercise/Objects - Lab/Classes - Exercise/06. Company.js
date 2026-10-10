class Company {
    constructor(){
        this.departments = {};
    }

    addEmployee(name, salary, position, department){

        for(let param of [name, salary, position, department]){
            if(param === '' || param === undefined || param === null){
                throw new Error ('Invalid input!');
            }
        }

        if(salary < 0){
            throw new Error ('Invalid input!');
        }

        if(!this.departments[department]) this.departments[department] = [];

        this.departments[department].push({name, salary, position});

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment(){
        let bestName = '';

        let bestAvg = 0;

        for(let depName in this.departments){
            const employees = this.departments[depName];

            let sum = 0;

            for(let emp of employees){
                sum += emp.salary;
            }

            const avg = sum / employees.length;

            if(avg > bestAvg){
                bestAvg = avg;

                bestName = depName;
            }
        }

        const best = this.departments[bestName];

        best.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        let result = `Best Department is: ${bestName}\n`;
        result += `Average salary: ${bestAvg.toFixed(2)}\n`;

        for (let emp of best) {
            result += `${emp.name} ${emp.salary} ${emp.position}\n`;
        }

        return result.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());