function sameNumbers(num){
    const numberStr = String(num);

    const firstDigit = numberStr[0];

    let sum = 0;

    let isSame = true;

    for(let digit of numberStr){
        sum += Number(digit);

        if(digit !== firstDigit) isSame = false;
    }

    console.log(isSame);

    console.log(sum);
}

sameNumbers(1234);