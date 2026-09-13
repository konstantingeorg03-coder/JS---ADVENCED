function LastKNumbersSequence(num1, num2){
    let arr = [1];

    for(let i = 1; i < num1; i++){
        let numsK = arr.slice(-num2);

        let sum = 0;

        for(let j = 0; j < numsK.length; j++){
            sum += numsK[j];

        }

        arr.push(sum);
    }

    return arr;
}

LastKNumbersSequence(6, 3);