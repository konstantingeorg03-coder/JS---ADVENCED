function toggle(){
    let buttonElement = document.getElementsByClassName('button')[0];

    let extraElement = document.getElementById('extra');
    
    if(buttonElement.textContent === 'More'){
        extraElement.style.display = 'block';

        buttonElement.textContent = 'Less';

    }else{
        extraElement.style.display = 'none';

        buttonElement.textContent = 'More';
    }
}