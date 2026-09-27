function create(words){
    const content = document.getElementById('content');

    words.forEach((word) => {
        const section = document.createElement('div');
        const paragraph = document.createElement('p');

        paragraph.textContent = word;
        paragraph.style.display = 'none';

        section.appendChild(paragraph);
        content.appendChild(section);

        section.addEventListener('click', () => {
            paragraph.style.display = 'block';
        });
    });
}