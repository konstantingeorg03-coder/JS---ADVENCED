function deleteByEmail() {
    let table = document.getElementById('customers');

    let input = document.querySelector('[name="email"]');

    let userText = input.value;

    let rows = document.querySelectorAll('tbody tr');

    let result = document.getElementById('result');

    let isFound = false;

    for(let row of rows){
        let cells = row.querySelectorAll('td');

        let email = cells[1].textContent;

        if(email === userText){
            row.remove();

            result.textContent = 'Deleted.';

            isFound = true;

            break;
        }        
    }

    if(isFound === false){
        result.textContent = 'Not found.';
    }
}