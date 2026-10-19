function solve(){
    const recipientNameInput = document.getElementById('recipientName');
    const titleInput = document.getElementById('title');
    const messageInput = document.getElementById('message');
    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');
    const listMails = document.getElementById('list');
    const sentList = document.querySelector('.sent-list');
    const deleteList = document.querySelector('.delete-list');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

       let recipientNameInputValue = recipientNameInput.value;
       let titleInputValue = titleInput.value;
       let messageInputValue = messageInput.value;

       if(recipientNameInputValue === '' || titleInputValue === '' || messageInputValue === ''){
        return;
       }

       let userData = document.createElement('li'); 
       listMails.appendChild(userData);

       let h4Title = document.createElement('h4');
       h4Title.textContent = `Title: ${titleInputValue}`;
       userData.appendChild(h4Title);

       let h4Recipient = document.createElement('h4');
       h4Recipient.textContent = `Recipient Name: ${recipientNameInputValue}`;
       userData.appendChild(h4Recipient);

       let paragraphMessage = document.createElement('span');
       paragraphMessage.textContent = messageInputValue;
       userData.appendChild(paragraphMessage);

       recipientNameInput.value = '';
       titleInput.value = '';
       messageInput.value = '';

       let div = document.createElement('div'); div.id = 'list-action';

       let sendBtn = document.createElement('button'); sendBtn.id = 'send'; sendBtn.textContent = 'Send';
       let deleteBtn = document.createElement('button'); deleteBtn.id = 'delete'; deleteBtn.textContent = 'Delete';

       div.appendChild(sendBtn); div.appendChild(deleteBtn);

       userData.appendChild(div);

       sendBtn.addEventListener('click', () => {
            userData.remove();

            let li = document.createElement('li');
            let spanRecipient = document.createElement('span');
            spanRecipient.textContent = `To: ${recipientNameInputValue}`;
            li.appendChild(spanRecipient)

            let spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${titleInputValue}`;
            li.appendChild(spanTitle);

            let needDiv = document.createElement('div');
            needDiv.className = 'btn'; 
            let divBtn = document.createElement('button'); divBtn.className = 'delete'; divBtn.textContent = 'Delete';

            needDiv.appendChild(divBtn);
            li.appendChild(needDiv);

            sentList.appendChild(li);

            divBtn.addEventListener('click', () => {
                li.remove();

                let sendLi = document.createElement('li');

                let recipientSpan2 = document.createElement('span');
                recipientSpan2.textContent = `To: ${recipientNameInputValue}`;
                sendLi.appendChild(recipientSpan2);

                let tiSpan = document.createElement('span');
                tiSpan.textContent = `Title: ${titleInputValue}`;
                sendLi.appendChild(tiSpan);

                deleteList.appendChild(sendLi);
            });
       });

       deleteBtn.addEventListener('click', () => {
        userData.remove();

        let newLi = document.createElement('li');
        let span1 = document.createElement('span');
        span1.textContent = `To: ${recipientNameInputValue}`;
        newLi.appendChild(span1);

        let span2 = document.createElement('span');
        span2.textContent = `Title: ${titleInputValue}`;
        newLi.appendChild(span2);

        deleteList.appendChild(newLi);
       });
    });

    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();

        recipientNameInput.value = '';
        titleInput.value = '';
        messageInput.value = '';

    });
}

solve();