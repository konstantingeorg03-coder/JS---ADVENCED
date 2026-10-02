function solve(){
    let employee = {
        name: 'Ivan'
    };

    function describeJob(position, company){
        console.log(`${this.name} works as ${position} at ${company}`);
    }

    describeJob.call(employee, 'Developer', 'SoftUni');
}

solve();