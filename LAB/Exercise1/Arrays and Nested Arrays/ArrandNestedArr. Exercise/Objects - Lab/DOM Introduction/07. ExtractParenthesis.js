function extract(elementID){
    let textEl = document.getElementById(elementID);

    let text = textEl.textContent;

    let regexp = /\(([^)]+)\)/g;

    let match = text.match(regexp);

    if(match){
        let result = [];

        for(let element of match){
            result.push(element.slice(1. -1));
        }

        result = result.join('; ');

        return result;
    }else{
        return '';
    }
}

console.log(extract('content'));