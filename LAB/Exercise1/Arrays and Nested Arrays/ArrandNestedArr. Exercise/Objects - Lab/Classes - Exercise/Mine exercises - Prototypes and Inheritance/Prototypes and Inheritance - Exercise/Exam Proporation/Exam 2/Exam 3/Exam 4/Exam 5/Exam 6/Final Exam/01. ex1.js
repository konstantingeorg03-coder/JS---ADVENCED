function solve(){
    const modelInput = document.getElementById('car-model');
    const yearInput = document.getElementById('car-year');
    const partNameInput = document.getElementById('part-name');
    const partNumInput = document.getElementById('part-number');
    const conditionInput = document.getElementById('condition');
    const nextBtn = document.getElementById('next-btn');
    const infoList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');
    const completeImg = document.getElementById('complete-img');
    const completeText = document.getElementById('complete-text');

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let modelInputValue = modelInput.value;
        let yearInputValue = yearInput.value;
        let partNameInputValue = partNameInput.value;
        let partNumInputValue = partNumInput.value;
        let conditionInputValue = conditionInput.value;

        if(modelInputValue === '' || yearInputValue === '' || partNameInputValue === '' || partNumInputValue === '' || conditionInputValue === '' || Number(yearInputValue) < 1960 || Number(yearInputValue) > 2025){
            return;
        }

        let userInfoData = document.createElement('li'); userInfoData.className = 'part-content';
        let article = document.createElement('article');
        userInfoData.appendChild(article);
        infoList.appendChild(userInfoData);

        let paragraphModel = document.createElement('p');
        paragraphModel.textContent = `Car Model: ${modelInputValue}`;
        article.appendChild(paragraphModel);

        let paragraphYear = document.createElement('p');
        paragraphYear.textContent = `Car Year: ${yearInputValue}`;
        article.appendChild(paragraphYear);

        let paragraphPartName = document.createElement('p');
        paragraphPartName.textContent = `Part Name: ${partNameInputValue}`;
        article.appendChild(paragraphPartName);

        let parahraphPartNum = document.createElement('p');
        parahraphPartNum.textContent = `Part Number: ${partNumInputValue}`;
        article.appendChild(parahraphPartNum);

        let paragraphCondition = document.createElement('p');
        paragraphCondition.textContent = `Condition: ${conditionInputValue}`; 
        article.appendChild(paragraphCondition);

        let editBtn = document.createElement('button'); editBtn.className = 'edit-btn'; editBtn.textContent = 'Edit';
        let continueBtn = document.createElement('button'); continueBtn.className = 'continue-btn'; continueBtn.textContent = 'Continue';

        userInfoData.appendChild(editBtn);
        userInfoData.appendChild(continueBtn);

        completeImg.style.visibility = 'hidden';
        completeText.textContent = '';

        modelInput.value = '';
        yearInput.value = '';
        partNameInput.value = '';
        partNumInput.value = '';
        conditionInput.value = '';

        nextBtn.disabled = true;

        editBtn.addEventListener('click', () => {
            modelInput.value = modelInputValue;
            yearInput.value = yearInputValue;
            partNameInput.value = partNameInputValue;
            partNumInput.value = partNumInputValue;
            conditionInput.value = conditionInputValue;

            userInfoData.remove();
            nextBtn.disabled = false;
        });

        continueBtn.addEventListener('click', () => {
            editBtn.remove();
            continueBtn.remove();
            confirmList.appendChild(userInfoData);

            let confirmBtn = document.createElement('button'); confirmBtn.className = 'confirm-btn'; confirmBtn.textContent = 'Confirm';
            let cancelBtn = document.createElement('button'); cancelBtn.className = 'cancel-btn'; cancelBtn.textContent = 'Cancel';

            userInfoData.appendChild(confirmBtn);
            userInfoData.appendChild(cancelBtn);

            confirmBtn.addEventListener('click', () => {
                userInfoData.remove(); 
                nextBtn.disabled = false;
                completeImg.style.visibility = 'visible';
                completeText.textContent = 'Part is Ordered!';    
            });

            cancelBtn.addEventListener('click', () => {
                userInfoData.remove();
                nextBtn.disabled = false;
            });
        });
    });
}