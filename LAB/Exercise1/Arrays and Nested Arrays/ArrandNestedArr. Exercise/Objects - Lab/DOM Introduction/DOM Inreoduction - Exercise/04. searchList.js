function search(){
    let text = document.getElementById('searchText').value;

    let towns = document.querySelectorAll('#towns li');

    let result = document.getElementById('result');

    let matches = 0;

    for(let i = 0; i < towns.length; i++){
        let currentTown = towns[i];

        let townName = currentTown.textContent;

        currentTown.style.fontWeight = 'normal';
        
        currentTown.style.textDecoration = 'none';

        if(townName.includes(text)){
            currentTown.style.fontWeight = 'bold';

            currentTown.style.textDecoration = 'underline';

            matches++;
        }
    }

    result.textContent = `${matches} matches found`;
}