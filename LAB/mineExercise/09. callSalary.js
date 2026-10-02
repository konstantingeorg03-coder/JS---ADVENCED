function solve(){
    let employee1 = {
        name: 'Konstantin',
        salary: 50000
    }

    let employee2 = {
        name: 'Ivan',
        salary: 1500
    }

    function increaseSalary(percent){
        this.salary += this.salary * (percent / 100);
    }

    increaseSalary.call(employee1, 10);
    increaseSalary.call(employee2, 20);
    
    console.log(employee1.salary);
    console.log(employee2.salary);
}

solve();