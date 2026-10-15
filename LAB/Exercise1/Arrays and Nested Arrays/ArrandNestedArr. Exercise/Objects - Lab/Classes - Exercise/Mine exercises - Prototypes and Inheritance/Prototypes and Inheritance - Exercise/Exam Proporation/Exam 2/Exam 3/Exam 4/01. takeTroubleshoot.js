window.addEventListener('load', solution);

function solution(){
    const employeeInput = document.getElementById('employee');
    const categoriInput = document.getElementById('category');
    const urgencyInput = document.getElementById('urgency');
    const teamInput = document.getElementById('team');
    const descriptionInput = document.getElementById('description');
    const previewList = document.querySelector('.preview-list');
    const pendingList = document.querySelector('.pending-list');
    const resolvedList = document.querySelector('.resolved-list');
    const addBtn = document.getElementById('add-btn');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let employeeInputValue = employeeInput.value;
        let categoriInputValue = categoriInput.value;
        let urgencyInputValue = urgencyInput.value;
        let teamInputValue = teamInput.value;
        let descriptionInputValue = descriptionInput.value;

        if(employeeInputValue === '' || categoriInputValue === '' || urgencyInputValue === '' || teamInputValue === '' || descriptionInputValue === ''){
            return;
        }

        let previewEl = document.createElement('li');
        previewEl.className = 'problem-content';
        let article = document.createElement('article');
        previewList.appendChild(previewEl);
        previewEl.appendChild(article);

        let paragraphEmployee = document.createElement('p');
        paragraphEmployee.textContent = `From: ${employeeInputValue}`;
        article.appendChild(paragraphEmployee);

        let paragraphCategory = document.createElement('p');
        paragraphCategory.textContent = `Category: ${categoriInputValue}`;
        article.appendChild(paragraphCategory);

        let paragrapgUrgency = document.createElement('p');
        paragrapgUrgency.textContent = `Urgency: ${urgencyInputValue}`;
        article.appendChild(paragrapgUrgency);

        let paragraphTeam = document.createElement('p');
        paragraphTeam.textContent = `Assigned to: ${teamInputValue}`;
        article.appendChild(paragraphTeam);

        let paragraphDescription = document.createElement('p');
        paragraphDescription.textContent = `Description: ${descriptionInputValue}`;
        article.appendChild(paragraphDescription);

        let editBtn = document.createElement('button'); 
        let continueBtn = document.createElement('button');

        editBtn.className = 'edit-btn'; editBtn.textContent = 'Edit';
        continueBtn.className = 'continue-btn'; continueBtn.textContent = 'Continue';

        previewEl.appendChild(editBtn);
        previewEl.appendChild(continueBtn);

        employeeInput.value = '';
        categoriInput.value = '';
        urgencyInput.value = '';
        teamInput.value = '';
        descriptionInput.value = '';

        addBtn.disabled = true;

        editBtn.addEventListener('click', () => {
           employeeInput.value = employeeInputValue;
           categoriInput.value = categoriInputValue;
           urgencyInput.value = urgencyInputValue;
           teamInput.value = teamInputValue;
           descriptionInput.value = descriptionInputValue;

           previewEl.remove();

           addBtn.disabled = false;
        });

        continueBtn.addEventListener("click", () => {
            editBtn.remove();
            continueBtn.remove();

            let resolvedBtn = document.createElement('button'); 
            resolvedBtn.className = 'resolve-btn'; 
            resolvedBtn.textContent = 'Resolved';
            previewEl.appendChild(resolvedBtn);

            pendingList.appendChild(previewEl);

            resolvedBtn.addEventListener("click", () => {
                resolvedList.appendChild(previewEl);

                resolvedBtn.remove();

                let clearBtn = document.createElement('button');
                clearBtn.className = 'clear-btn';
                clearBtn.textContent = 'Clear';
                previewEl.appendChild(clearBtn);

                clearBtn.addEventListener('click', () => {
                    previewEl.remove();
                });
            });
        });
    });
}