function create(words){
    const content = document.getElementById('content');

    words.forEach((word) => {
        const newElement = document.createElement('div');
        const paragraph = document.createElement('p');
        paragraph.style.display = 'none';

        paragraph.textContent = word;
        newElement.appendChild(paragraph);
        content.appendChild(newElement);

        newElement.addEventListener('click', () => {
            paragraph.style.display = 'block';
        });
    })
}