function rotateArray(arr, amount){
    for(let i = 0; i < amount; i++){
        let lastElement = arr.pop();

        arr.unshift(lastElement);
    }

    console.log(arr.join(' '));
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2);