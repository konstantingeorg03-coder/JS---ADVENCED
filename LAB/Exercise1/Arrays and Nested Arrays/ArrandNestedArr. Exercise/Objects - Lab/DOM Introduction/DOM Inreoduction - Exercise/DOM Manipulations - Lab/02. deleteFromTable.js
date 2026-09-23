function deleteByEmail(){
    let input = document.querySelector('[name = "email"]');

    let inputValue = input.value;

    let result = document.getElementById('result');

    let arr = Array.from(document.querySelectorAll('tbody tr'));

    let isFound = false;

    for(let row of arr){
        if(row.querySelectorAll('td')[1].textContent === inputValue){
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