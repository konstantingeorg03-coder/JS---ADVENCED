function SortanArrayby2(arr){
    arr.sort((a, b) => {
        if(a.length === b.length){
            return a.localeCompare(b);
        }else{
            return a.length - b.length;
        }
    })

    for(let word of arr){
        console.log(word);
    }
}

SortanArrayby2(['alpha', 
'beta', 
'gamma'])