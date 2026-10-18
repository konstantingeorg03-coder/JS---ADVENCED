window.addEventListener("load", solve);
function solve(){
    const titleInput = document.getElementById('post-title');
    const categoryInput = document.getElementById('post-category');
    const contentInput = document.getElementById('post-content');
    const clearBtn = document.getElementById('clear-btn');
    const reviewList = document.getElementById('review-list');
    const publishList = document.getElementById('published-list');
    const publishBtn = document.getElementById('publish-btn');
    

    publishBtn.addEventListener('click', () => {
        let titleInputValue = titleInput.value;
        let categoryInputValue = categoryInput.value;
        let contentInputValue = contentInput.value;
        
        if(titleInputValue === '' || categoryInputValue === '' || contentInputValue === ''){
            return;
        }

        let newPost = document.createElement('li'); newPost.className = 'rpost'; 
        let article = document.createElement('article');

        newPost.appendChild(article);
        reviewList.appendChild(newPost);

        let h4Title = document.createElement('h4');
        h4Title.textContent = titleInputValue;
        article.appendChild(h4Title);

        let paragraphCategory = document.createElement('p');
        paragraphCategory.textContent = `Category: ${categoryInputValue}`;
        article.appendChild(paragraphCategory);

        let paragraphContent = document.createElement('p');
        paragraphContent.textContent = `Content: ${contentInputValue}`;
        article.appendChild(paragraphContent);

        let editBtn = document.createElement('button'); editBtn.className = 'action-btn edit'; editBtn.textContent = 'Edit';
        let approveBtn = document.createElement('button'); approveBtn.className = 'action-btn approve'; approveBtn.textContent = 'Approve';

        newPost.appendChild(editBtn);
        newPost.appendChild(approveBtn);

        titleInput.value = '';
        contentInput.value = '';
        categoryInput.value = '';

        editBtn.addEventListener('click', () => {
            titleInput.value = titleInputValue;
            contentInput.value = contentInputValue;
            categoryInput.value = categoryInputValue;

            newPost.remove();
        });

        approveBtn.addEventListener('click', () => {
            publishList.appendChild(newPost);

            editBtn.remove();
            approveBtn.remove();
        });
    });

    clearBtn.addEventListener('click', () => {
        publishList.innerHTML = '';
    });
}