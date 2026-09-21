function colorSize(){
    let rows = document.querySelectorAll('tr');

    for(let col = 1; col < rows.length; col += 2){
        rows[col].style.backgroundColor = 'Teal';
    }
}

