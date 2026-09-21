function sumTable(){
    let cells = document.querySelectorAll('td');

    let total = 0;

    for(let cell = 1; cell < cells.length; cell += 2){
        let currentValue = Number(cells[cell].textContent);

        total += currentValue;
    }

    let totalId = document.getElementById('sum');

    totalId.textContent = total;  
}