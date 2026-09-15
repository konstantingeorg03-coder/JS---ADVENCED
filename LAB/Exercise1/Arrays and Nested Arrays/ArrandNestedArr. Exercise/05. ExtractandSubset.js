function extractAndSubset(arr){
    let result = [];

    let currentBiggestNum = arr[0];

    for(let i = 0; i < arr.length; i++){
        let currentNum = arr[i];

        if(currentNum >= currentBiggestNum){
            result.push(currentNum);

            currentBiggestNum = currentNum;

        }
    }

    return result;
}

console.log(extractAndSubset([1, 
3, 
8, 
4, 
10, 
12, 
3, 
2, 
24]));