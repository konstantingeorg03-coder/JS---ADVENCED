function addItem(){
    const inputItem = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');

    const option = document.createElement('option');

    option.textContent = inputItem.value;
    option.value = valueInput.value;

    document.getElementById('menu').appendChild(option);

    inputItem.value = '';
    valueInput.value = '';
}