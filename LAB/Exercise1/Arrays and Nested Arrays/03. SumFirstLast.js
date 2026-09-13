function SumFirstLast(arr){
    let first = Number(arr.shift());

    let second = Number(arr.pop());

    let sum = first + second;

    console.log(sum);
}

SumFirstLast(['20', '30', '40']);