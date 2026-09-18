function extractText(){
    const items = document.querySelectorAll('li');

    let result = '';
    
    for(const item of items){
        result += item.textContent + '\n';
    }

    const textArea = document.querySelector('textarea');

    textArea.value = result;
}
