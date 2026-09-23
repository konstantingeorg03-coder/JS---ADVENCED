function addItem(){
    let list = document.getElementById('items');
    
    let text = document.getElementById('newItemText');

    let textValue = text.value;

    let newEl = document.createElement('li');

    newEl.textContent = textValue;

    list.appendChild(newEl);

    text.value = '';
}