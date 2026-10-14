function solve(){
    const colors = document.getElementById('colors');
    const models = document.getElementById('motorcycles');
    const date = document.getElementById('datetime');
    const userInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const testButton = document.getElementById('test-ride-btn');
    const veiwList = document.getElementById('preview-list');
    const completeList = document.getElementById('complete-list');
    const classBtn = document.querySelector('.data-view');

    testButton.addEventListener('click', () => {
        let colorsValue = colors.value;
        let modelsValue = models.value;
        let dateValue = date.value;
        let userInputValue = userInput.value;
        let emailInputValue = emailInput.value;

        if(colorsValue === '' || modelsValue === '' || dateValue === '' || userInputValue === '' || emailInputValue === ''){
            return;
        }

        let newEl = document.createElement('li');
        let article = document.createElement('article');

        newEl.appendChild(article);
        veiwList.appendChild(newEl);

        let paragraphColors = document.createElement('p');
        paragraphColors.textContent = `Color: ${colorsValue}`;
        article.appendChild(paragraphColors);

        let paragraphModels = document.createElement('p');
        paragraphModels.textContent = `Model: ${modelsValue}`;
        article.appendChild(paragraphModels);

        let paragraphName = document.createElement('p');
        paragraphName.textContent = `For: ${userInputValue}`;
        article.appendChild(paragraphName);

        let paragraphEmail = document.createElement('p');
        paragraphEmail.textContent = `Contact: ${emailInputValue}`;
        article.appendChild(paragraphEmail);

        let paragrapgDate = document.createElement('p');
        paragrapgDate.textContent = `Test Ride On: ${dateValue}`;
        article.appendChild(paragrapgDate);

        let newDiv = document.createElement('div'); newDiv.className = 'btn-container';
        newEl.appendChild(newDiv);

        let editBtn = document.createElement('button'); editBtn.className = 'edit-btn'; newDiv.appendChild(editBtn);
        let nextBtn = document.createElement('button'); nextBtn.className = 'next-btn'; newDiv.appendChild(nextBtn);

        editBtn.textContent = 'Edit';
        nextBtn.textContent = 'Next';

        colors.value = '';
        models.value = '';
        date.value = '';
        userInput.value = '';
        emailInput.value = '';

        testButton.disabled = true;

        editBtn.addEventListener('click', () => {
            colors.value = colorsValue;
            models.value = modelsValue;
            date.value = dateValue;
            userInput.value = userInputValue;
            emailInput.value = emailInputValue;

            newEl.remove();

            testButton.disabled = false;
        });

        nextBtn.addEventListener('click', () => {
            newDiv.remove();

            let newBtn = document.createElement('button');
            newBtn.textContent = 'Complete';
            newBtn.className = 'complete-btn';
            article.appendChild(newBtn);

            completeList.appendChild(newEl);


            newBtn.addEventListener('click', () => {
                newEl.remove();
                let confirmButton = document.createElement('button');
                confirmButton.textContent = 'Your Test Ride is Confirmed';
                confirmButton.className = 'confirm-btn';
                classBtn.appendChild(confirmButton);

                confirmButton.addEventListener('click', () => {
                    location.reload();
                });
            });
        });
    });
}