function addCity(){
    let list = document.getElementById('cities');

    let text = document.getElementById('newCityText');

    let userText = text.value;

    let newElement = document.createElement('li');

    newElement.textContent = userText;

    list.appendChild(newElement);

    text.value = '';
}