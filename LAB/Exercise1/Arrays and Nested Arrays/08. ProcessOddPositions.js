function solve(arr){
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 1){
            result.push(arr[i] * 2);
        }
    }

    let resultReverse = result.reverse().join(' ');

    console.log(resultReverse);
}

solve([10, 15, 20, 25]);