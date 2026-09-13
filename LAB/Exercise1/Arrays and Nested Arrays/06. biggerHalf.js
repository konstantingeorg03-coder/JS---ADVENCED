function solve(arr){
    arr.sort((a, b) => a - b);

    let middle = Math.floor(arr.length / 2);

    let output = [];

    for(let i = middle ; i < arr.length; i++){
        output.push(arr[i]);
    }

    return output;
}

console.log(solve([4, 7, 2, 5]))