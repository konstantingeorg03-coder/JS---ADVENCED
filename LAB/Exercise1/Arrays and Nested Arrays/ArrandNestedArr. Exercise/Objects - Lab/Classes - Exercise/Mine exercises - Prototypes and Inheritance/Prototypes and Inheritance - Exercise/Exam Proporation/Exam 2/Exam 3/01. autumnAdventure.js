window.addEventListener('load', solve);
 function solve(){
    const timeInput = document.getElementById('time');
    const dateInput = document.getElementById('date');
    const placeInput = document.getElementById('place');
    const eventNameInput = document.getElementById('event-name');
    const emailInput = document.getElementById('email');
    const btn = document.getElementById('add-btn');
    const checkList = document.getElementById('check-list');
    const finishList = document.getElementById('finished-list');
    const clearBtn = document.getElementById('clear');
    const upcomeList = document.getElementById('upcoming-list');
    
    btn.addEventListener('click', () => {
        let timeValue = timeInput.value;
        let dateValue = dateInput.value;
        let placeInputValue = placeInput.value; 
        let eventNameInputValue = eventNameInput.value;
        let emailValue = emailInput.value;

        if(timeValue === '' || dateValue === '' || placeInputValue === '' || eventNameInputValue === '' || emailValue === ''){
            return;
        }

        let noteUser = document.createElement('li');
        noteUser.className = 'event-content';
        let article = document.createElement('article');
        checkList.appendChild(noteUser);
        noteUser.appendChild(article);

        let paragraphTimeandDate = document.createElement('p');
        paragraphTimeandDate.textContent = `Begins: ${dateValue} at: ${timeValue}`;
        article.appendChild(paragraphTimeandDate);

        let paragraphPlace = document.createElement('p');
        paragraphPlace.textContent = `In: ${placeInputValue}`;
        article.appendChild(paragraphPlace);

        let paragraphEvent = document.createElement('p');
        paragraphEvent.textContent = `Event: ${eventNameInputValue}`;
        article.appendChild(paragraphEvent);

        let paragraphContact = document.createElement('p');
        paragraphContact.textContent = `Contact: ${emailValue}`;
        article.appendChild(paragraphContact);

        let editBtn = document.createElement('button'); editBtn.className = 'edit-btn'; editBtn.textContent = 'Edit';
        let continueBtn = document.createElement('button'); continueBtn.className = 'continue-btn'; continueBtn.textContent = 'Continue';

        noteUser.appendChild(editBtn);
        noteUser.appendChild(continueBtn);

        timeInput.value = '';
        dateInput.value = '';
        placeInput.value = '';
        eventNameInput.value = '';
        emailInput.value = '';

        btn.disabled = true;

        editBtn.addEventListener('click', () => {
            timeInput.value = timeValue;
            dateInput.value = dateValue;
            placeInput.value = placeInputValue;
            eventNameInput.value = eventNameInputValue;
            emailInput.value = emailValue;

            btn.disabled = false;

            noteUser.remove();
        });

        continueBtn.addEventListener('click', () => {
            editBtn.remove();
            continueBtn.remove();

            let moveBtn = document.createElement('button');
            moveBtn.className = 'finished-btn';
            moveBtn.textContent = 'Move to Finished';
            noteUser.appendChild(moveBtn);
            upcomeList.appendChild(noteUser);

            continueBtn.disabled = true;

            moveBtn.addEventListener('click', () => {
                finishList.appendChild(noteUser);
                moveBtn.remove();


            });
        });
    });

    clearBtn.addEventListener('click', () => {
        finishList.innerHTML = '';
    });
}