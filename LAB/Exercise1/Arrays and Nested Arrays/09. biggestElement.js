function solve(arr){
    let biggestNum = arr[0][0];

    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] > biggestNum){
                biggestNum = arr[i][j];
            }
        }
    }

    return biggestNum;
}

console.log(solve([[20, 50, 10],
 [8, 33, 145]]));