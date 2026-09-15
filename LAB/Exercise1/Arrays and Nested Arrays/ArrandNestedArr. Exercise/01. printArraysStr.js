function printArraysStr(arr, delimeter){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        result.push(arr[i]);
    }

    console.log(result.join(delimeter));
}

printArraysStr(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-');