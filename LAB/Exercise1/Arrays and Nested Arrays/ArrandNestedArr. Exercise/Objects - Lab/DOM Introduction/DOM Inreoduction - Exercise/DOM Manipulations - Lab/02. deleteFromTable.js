function deleteByEmail() {
    let input = document.querySelector('[name="email"]');
    let usersInput = input.value;

    let result = document.getElementById('result');

    let rows = document.querySelectorAll('tbody tr');
    let arr = Array.from(rows);

    let isFound = false;

    for (let row of arr) {
        let cells = row.querySelectorAll('td');
        let email = cells[1].textContent;

        if (email === usersInput) {
            row.remove();
            result.textContent = 'Deleted.';
            isFound = true;
            break;
        }
    }

    if (isFound === false) {
        result.textContent = 'Not found.';
    }
}