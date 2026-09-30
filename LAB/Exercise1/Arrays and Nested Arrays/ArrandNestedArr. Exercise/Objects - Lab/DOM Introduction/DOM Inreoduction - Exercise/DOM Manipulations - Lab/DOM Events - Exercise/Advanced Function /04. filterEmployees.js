function solve(data, criteria){
    let employees = JSON.parse(data);

    let [property, value] = criteria.split('-');

    if(criteria === 'all'){
        let index = 0;

        for(let employee of employees){
            console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);

            index++;
        }

    }else{
        let index = 0;

        for (let employee of employees) {
            if (employee[property] === value) {
                console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        
                index++;
            }
        }
    }
}

solve(
    `[{
        "id": "1",
        "first_name": "Peter",
        "last_name": "Pan",
        "email": "peter@pan.com",
        "gender": "Male"
    }, {
        "id": "2",
        "first_name": "Maria",
        "last_name": "Petrova",
        "email": "maria@gmail.com",
        "gender": "Female"
    }, {
        "id": "3",
        "first_name": "Anna",
        "last_name": "Ivanova",
        "email": "anna@yahoo.com",
        "gender": "Female"
    }]`,
    "gender-Female"
);