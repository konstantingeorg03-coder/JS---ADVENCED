function create(words){
    const content = document.getElementById('content');

    words.forEach((word) => {
        const div = document.createElement('div');

        const paragraph = document.createElement('p');

        paragraph.textContent = word;

        paragraph.style.display = 'none';

        div.addEventListener('click', () => {
            paragraph.style.display = 'block';
        });

        div.appendChild(paragraph);

        content.appendChild(div);
    });
}