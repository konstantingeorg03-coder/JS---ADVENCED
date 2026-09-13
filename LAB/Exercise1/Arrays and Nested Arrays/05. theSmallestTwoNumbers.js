function solve(arr){
    arr.sort((a, b) => a - b);

    let smallestNums = arr.slice(0, 2);

    console.log(smallestNums)
}

solve([3, 0, 10, 4, 7, 3]);