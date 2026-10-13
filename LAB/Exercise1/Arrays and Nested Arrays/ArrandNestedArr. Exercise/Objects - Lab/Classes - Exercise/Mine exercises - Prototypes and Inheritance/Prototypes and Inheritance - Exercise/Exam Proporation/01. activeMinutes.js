function solve() {
    const typeInput = document.getElementById('type');
    const intensityInput = document.getElementById('intensity');
    const caloriesInput = document.getElementById('calories');
    const durationInput = document.getElementById('duration');
    const dateInput = document.getElementById('date');
    const button = document.getElementById('add-activity');
    const previewList = document.getElementById('preview-activity');
    const tableBody = document.getElementById('activities-table');

    button.addEventListener('click', () => {
        let typeValue = typeInput.value;
        let intensityValue = intensityInput.value;
        let caloriesValue = caloriesInput.value;
        let durationValue = durationInput.value;
        let dateValue = dateInput.value;

        if (typeValue === '' || intensityValue === '' || caloriesValue === '' || durationValue === '' || dateValue === '') {
            return;
        }

        let newEl = document.createElement('li');
        let article = document.createElement('article');
        newEl.appendChild(article);
        previewList.appendChild(newEl);

        let paragraph = document.createElement('p');
        paragraph.textContent = `Activity: ${typeValue}`;
        article.appendChild(paragraph);

        let intensityPar = document.createElement('p');
        intensityPar.textContent = `Intensity: ${intensityValue}`;
        article.appendChild(intensityPar);

        let durationPar = document.createElement('p');
        durationPar.textContent = `Duration: ${durationValue} min.`;
        article.appendChild(durationPar);

        let datePar = document.createElement('p');
        datePar.textContent = `Date: ${dateValue}`;
        article.appendChild(datePar);

        let caloriesPar = document.createElement('p');
        caloriesPar.textContent = `Calories: ${caloriesValue}`;
        article.appendChild(caloriesPar);

        let btnContainer = document.createElement('div');
        btnContainer.className = 'btn-container';
        newEl.appendChild(btnContainer);

        let buttonEdit = document.createElement('button');
        buttonEdit.textContent = 'Edit';
        buttonEdit.className = 'edit-btn';
        btnContainer.appendChild(buttonEdit);

        let buttonNext = document.createElement('button');
        buttonNext.textContent = 'Next';
        buttonNext.className = 'next-btn';
        btnContainer.appendChild(buttonNext);

        typeInput.value = '';
        intensityInput.value = '';
        durationInput.value = '';
        dateInput.value = '';
        caloriesInput.value = '';

        button.disabled = true;

        buttonEdit.addEventListener('click', () => {
            typeInput.value = typeValue;
            intensityInput.value = intensityValue;
            durationInput.value = durationValue;
            dateInput.value = dateValue;
            caloriesInput.value = caloriesValue;

            newEl.remove();

            button.disabled = false;
        });

        buttonNext.addEventListener('click', () => {
            let row = document.createElement('tr');

            let typeCell = document.createElement('td');
            typeCell.textContent = typeValue;
            typeCell.className = 'type-cell';
            row.appendChild(typeCell);

            let durationCell = document.createElement('td');
            durationCell.textContent = durationValue;
            durationCell.className = 'duration-cell';
            row.appendChild(durationCell);

            let caloriesCell = document.createElement('td');
            caloriesCell.textContent = caloriesValue;
            caloriesCell.className = 'calories-cell';
            row.appendChild(caloriesCell);

            let dateCell = document.createElement('td');
            dateCell.textContent = dateValue;
            dateCell.className = 'date-cell';
            row.appendChild(dateCell);

            let intensityCell = document.createElement('td');
            intensityCell.textContent = intensityValue;
            intensityCell.className = 'intensity-cell';
            row.appendChild(intensityCell);

            let btnCell = document.createElement('td');
            btnCell.className = 'btn-cell';
            row.appendChild(btnCell);

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            btnCell.appendChild(deleteBtn);

            tableBody.appendChild(row);

            newEl.remove();
            button.disabled = false;

            deleteBtn.addEventListener('click', () => {
                row.remove();
            });
        });
    });
}