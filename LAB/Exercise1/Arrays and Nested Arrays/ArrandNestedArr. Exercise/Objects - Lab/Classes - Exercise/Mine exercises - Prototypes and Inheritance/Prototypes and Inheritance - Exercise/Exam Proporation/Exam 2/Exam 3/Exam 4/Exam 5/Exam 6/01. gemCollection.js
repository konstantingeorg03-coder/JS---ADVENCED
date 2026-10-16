window.addEventListener("load", solve);
function solve(){
    const gemNameInput = document.getElementById('gem-name');
    const colorInput = document.getElementById('color');
    const caratsInput = document.getElementById('carats');
    const priceInput = document.getElementById('price');
    const levelInput = document.getElementById('type');
    const addBtn = document.getElementById('add-btn');
    const previewList = document.getElementById('preview-list');
    const collectionList = document.getElementById('collection');

    addBtn.addEventListener('click', () => {
       let gemNameInputValue = gemNameInput.value;
       let colorInputValue = colorInput.value;
       let caratsInputValue = caratsInput.value;
       let priceInputValue = priceInput.value;
       let levelInputValue = levelInput.value;

       if(gemNameInputValue === '' || colorInputValue === '' || caratsInputValue === '' || priceInputValue === '' || levelInputValue === ''){
        return;
       }

       let userData = document.createElement('li'); userData.className = 'gem-info'; 
       let article  = document.createElement('article');
       userData.appendChild(article);
       previewList.appendChild(userData);
       
       let namePar = document.createElement('h4');
       namePar.textContent = gemNameInputValue;
       article.appendChild(namePar);

       let paragraphColor = document.createElement('p');
       paragraphColor.textContent = `Color: ${colorInputValue}`;
       article.appendChild(paragraphColor);

       let paragraphCarats = document.createElement('p');
       paragraphCarats.textContent = `Carats: ${caratsInputValue}`;
       article.appendChild(paragraphCarats);

       let paragraphPrice = document.createElement('p');
       paragraphPrice.textContent = `Price: ${priceInputValue}$`;
       article.appendChild(paragraphPrice);

       let paragraphLevel = document.createElement('p');
       paragraphLevel.textContent = `Type: ${levelInputValue}`;
       article.appendChild(paragraphLevel);

       let saveBtn = document.createElement('button'); saveBtn.className = 'save-btn'; saveBtn.textContent = 'Save to Collection'
       let editBtn = document.createElement('button'); editBtn.className = 'edit-btn'; editBtn.textContent = 'Edit Information';
       let cancelBtn = document.createElement('button'); cancelBtn.className = 'cancel-btn'; cancelBtn.textContent = 'Cancel';

       userData.appendChild(saveBtn); userData.appendChild(editBtn); userData.appendChild(cancelBtn);

       gemNameInput.value = '';
       colorInput.value = '';
       caratsInput.value = '';
       priceInput.value = '';
       levelInput.value = '';

       addBtn.disabled = true;

       editBtn.addEventListener('click', () => {
        gemNameInput.value = gemNameInputValue;
        colorInput.value = colorInputValue;
        caratsInput.value = caratsInputValue;
        priceInput.value = priceInputValue;
        levelInput.value = levelInputValue;

        userData.remove();

        addBtn.disabled = false;
       });

       saveBtn.addEventListener('click', () => {
        let newEl = document.createElement('li');
        let paragraph = document.createElement('p'); paragraph.className = 'collection-item';
        paragraph.textContent = `${gemNameInputValue} - Color: ${colorInputValue}/ Carats: ${caratsInputValue}/ Price: ${priceInputValue}$/ Type: ${levelInputValue}`;
        newEl.appendChild(paragraph);
        collectionList.appendChild(newEl);
        userData.remove();

        addBtn.disabled = false;
       });

       cancelBtn.addEventListener('click', () => {
        userData.remove();

        addBtn.disabled = false;
       });
    });
}