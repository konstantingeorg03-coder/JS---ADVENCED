function solve(){
    const firstNameInput = document.getElementById('fname');
    const lastNameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const dateOfBirthInput = document.getElementById('birth');
    const positionInput = document.getElementById('position');
    const salaryInput = document.getElementById('salary');
    const addWorkerBtn = document.getElementById('add-worker');
    const tbody = document.getElementById('tbody');
    const sumSpan = document.getElementById('sum');
    let budget = 0;

    addWorkerBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let firstNameInputValue = firstNameInput.value;
        let lastNameInputValue = lastNameInput.value;
        let emailInputValue = emailInput.value;
        let dateOfBirthInputValue = dateOfBirthInput.value;
        let positionInputValue = positionInput.value;
        let salaryInputValue = salaryInput.value;

        if(firstNameInputValue === '' || lastNameInputValue === '' || emailInputValue === '' || dateOfBirthInputValue === '' || positionInputValue === '' || salaryInputValue === ''){
            return;
        }

        let tr = document.createElement('tr');

        let worker = document.createElement('td');
        worker.textContent = firstNameInputValue;
        tr.appendChild(worker);

        let lastName = document.createElement('td');
        lastName.textContent = lastNameInputValue;
        tr.appendChild(lastName);

        let email = document.createElement('td');
        email.textContent = emailInputValue;
        tr.appendChild(email);

        let dateBirth = document.createElement('td');
        dateBirth.textContent = dateOfBirthInputValue;
        tr.appendChild(dateBirth);

        let position = document.createElement('td');
        position.textContent = positionInputValue;
        tr.appendChild(position);

        let salary = document.createElement('td');
        salary.textContent = salaryInputValue;
        tr.appendChild(salary);

        let btnTd = document.createElement('td');
        let editBtn = document.createElement('button'); editBtn.className = 'edit'; editBtn.textContent = 'Edit';
        let firedBtn = document.createElement('button'); firedBtn.className = 'fired'; firedBtn.textContent = 'Fired';
        
        btnTd.appendChild(firedBtn); btnTd.appendChild(editBtn);
        tr.appendChild(btnTd);

        tbody.appendChild(tr);

        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        dateOfBirthInput.value = '';
        positionInput.value = '';
        salaryInput.value = '';

        budget += Number(salaryInputValue);

        sumSpan.textContent = budget.toFixed(2);

        editBtn.addEventListener('click', () => {
            firstNameInput.value = firstNameInputValue;
            lastNameInput.value = lastNameInputValue;
            emailInput.value = emailInputValue;
            dateOfBirthInput.value = dateOfBirthInputValue;
            positionInput.value = positionInputValue;
            salaryInput.value = salaryInputValue;

            tr.remove();

            budget -= Number(salaryInputValue);

            sumSpan.textContent = budget.toFixed(2);
        });

        firedBtn.addEventListener('click', () => {
            tr.remove();

            budget -= Number(salaryInputValue);

            sumSpan.textContent = budget.toFixed(2);
        });
    });
}

solve();