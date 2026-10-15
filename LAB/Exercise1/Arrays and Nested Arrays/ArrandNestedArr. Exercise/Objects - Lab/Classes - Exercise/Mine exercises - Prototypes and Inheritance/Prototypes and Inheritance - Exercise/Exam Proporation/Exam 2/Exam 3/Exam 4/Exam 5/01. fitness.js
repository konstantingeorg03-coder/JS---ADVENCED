window.addEventListener('load', solve);

function solve(){
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const contactNumInput = document.getElementById('contact-number');
    const classTypeInput = document.getElementById('class-type');
    const classTimeInput = document.getElementById('class-time');
    const nextBtn = document.getElementById('next-btn');
    const previewList = document.querySelector('.class-info');
    const confirmList = document.querySelector('.confirm-class');

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let nameInputValue = nameInput.value;
        let emailInputValue = emailInput.value;
        let contactNumInputValue = contactNumInput.value;
        let classTypeInputValue = classTypeInput.value;
        let classTimeInputValue = classTimeInput.value;

        if(nameInputValue === '' || emailInputValue === '' || contactNumInputValue === '' || classTypeInputValue === '' || classTimeInputValue === ''){
            return;
        }

        let dataUserForm = document.createElement('li');
        dataUserForm.className = 'info-item'
        let article = document.createElement('article');
        article.className = 'personal-info';
        dataUserForm.appendChild(article);
        previewList.appendChild(dataUserForm);

        let paragraphName = document.createElement('p');
        paragraphName.textContent = `${nameInputValue}`;
        article.appendChild(paragraphName);

        let paragraphEmail = document.createElement('p');
        paragraphEmail.textContent = `${emailInputValue}`;
        article.appendChild(paragraphEmail);

        let paragraphContact = document.createElement('p');
        paragraphContact.textContent = `${contactNumInputValue}`;
        article.appendChild(paragraphContact);

        let paragraphClassType = document.createElement('p');
        paragraphClassType.textContent = `${classTypeInputValue}`;
        article.appendChild(paragraphClassType);

        let paragraphClassTime = document.createElement('p');
        paragraphClassTime.textContent = `${classTimeInputValue}`;
        article.appendChild(paragraphClassTime);

        let editBtn = document.createElement('button'); editBtn.className = 'edit-btn'; editBtn.textContent = 'Edit';
        let continueBtn = document.createElement('button'); continueBtn.className = 'continue-btn'; continueBtn.textContent = 'Continue';

        dataUserForm.appendChild(editBtn);
        dataUserForm.appendChild(continueBtn);

        nameInput.value = '';
        emailInput.value = '';
        contactNumInput.value = '';
        classTypeInput.value = '';
        classTimeInput.value = '';

        nextBtn.disabled = true;

        editBtn.addEventListener('click', () => {
            nameInput.value = nameInputValue;
            emailInput.value = emailInputValue;
            contactNumInput.value = contactNumInputValue;
            classTypeInput.value = classTypeInputValue;
            classTimeInput.value = classTimeInputValue;

            dataUserForm.remove();

            nextBtn.disabled = false;
        });

        continueBtn.addEventListener('click', () => {
            editBtn.remove();
            continueBtn.remove();

            dataUserForm.className = 'continue-info';
            confirmList.appendChild(dataUserForm);

            let cancelBtn = document.createElement('button'); cancelBtn.className = 'cancel-btn'; cancelBtn.textContent = 'Cancel';
            let confirmBtn = document.createElement('button'); confirmBtn.className = 'confirm-btn'; confirmBtn.textContent = 'Confirm';

            dataUserForm.appendChild(cancelBtn);
            dataUserForm.appendChild(confirmBtn);

            cancelBtn.addEventListener('click', () => {
                dataUserForm.remove();

                nextBtn.disabled = false;
            });

            confirmBtn.addEventListener('click', () => {
                const body = document.getElementById('body');
                const main = document.getElementById('main');

                main.remove();

                let text = document.createElement('h1');

                text.id = 'thank-you';

                text.textContent = 'Thank you for scheduling your appointment, we look forward to seeing you!';

                body.appendChild(text);

                let doneBtn = document.createElement('button'); doneBtn.id = 'done-btn'; doneBtn.textContent = 'Done';

                body.appendChild(doneBtn);

                doneBtn.addEventListener('click', () => {
                    location.reload();
                });
            });
        });
    });
}