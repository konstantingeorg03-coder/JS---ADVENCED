function solve(){
    let buttonSearch = document.getElementById('searchBtn');

    let searchField = document.getElementById('searchField');

    let rows = document.querySelectorAll('tbody tr');

    buttonSearch.addEventListener('click', onSearch);

    function onSearch(){
        let searchText = searchField.value.toLowerCase();

        for(let i = 0; i < rows.length; i++){
            let row = rows[i];

            row.classList.remove('select');

            let textRow = row.textContent.toLowerCase();

            if(searchText !== '' && textRow.includes(searchText)){
                row.classList.add('select');
            }
        }

        searchField.value = '';
    }
}