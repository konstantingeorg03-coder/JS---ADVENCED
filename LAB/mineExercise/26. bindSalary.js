function solve(){
    let employee = {
        name: 'Ivan',
        salary: 1000
    }

    function increaseSalary(percent, bonus){
        return this.salary += this.salary * percent / 100 + bonus;
    }

    let result = increaseSalary.bind(employee, 10);

    console.log(result(50));
    console.log(result(0));
}

solve();