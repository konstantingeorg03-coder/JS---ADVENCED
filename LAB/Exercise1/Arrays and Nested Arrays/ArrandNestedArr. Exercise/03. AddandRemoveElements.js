function AddandRemoveElements(arr){
    let result = [];

    let num = 1;

    for(let i = 0; i < arr.length; i++){
        let command = arr[i];

        if(command === 'add'){
            result.push(num);
        }else if(command === 'remove'){
            result.pop();
        }else{

        }

        num++;
    }

    if(result.length === 0){
        console.log('Empty');

    }else{
        console.log(result.join('\n'));
    }
}

AddandRemoveElements(['add', 
'add', 
'add', 
'add']);