export function sum(arr){
    let needSum = 0;
    for(let num of arr){
        needSum += Number(num)
    }

    return needSum;
}