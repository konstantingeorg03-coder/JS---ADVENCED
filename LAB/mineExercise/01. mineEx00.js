function createProduct(arr){
    let newArr = [];

    for(let letter of arr){
        let needLetter = letter.slice(0, -1);
        let letter2 = letter.slice(-1);

        let text = needLetter + '-' + letter2;

        newArr.push(text);
    }

    console.log(newArr.join(' '));
}

createProduct(['12A', '7B', '105C'])
