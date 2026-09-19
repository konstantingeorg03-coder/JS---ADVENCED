function sortingNumbers(arr){
    arr = arr.sort((a, b) => a - b);

    let result = [];

    while(arr.length > 0){
        let first = arr.shift();

        let second = arr.pop();

        result.push(first, second);
    }

    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));