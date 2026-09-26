function addItem(){
    let items = document.getElementById('items');

    let input = document.getElementById('newItemText');

    let userText = input.value;

    let newElement = document.createElement('li');

    newElement.textContent = userText;
    
    items.appendChild(newElement);

    let secondElement = document.createElement('a');

    secondElement.textContent = '[Delete]';

    secondElement.href = '#';

    newElement.appendChild(secondElement);

    secondElement.addEventListener('click', function(){
        newElement.remove();
    })

    input.value = '';
}