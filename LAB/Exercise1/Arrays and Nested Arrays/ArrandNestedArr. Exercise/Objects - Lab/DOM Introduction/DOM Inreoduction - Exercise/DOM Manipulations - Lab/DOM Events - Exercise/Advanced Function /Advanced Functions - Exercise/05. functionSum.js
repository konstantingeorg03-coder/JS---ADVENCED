function add(number){
    let sum = number;

    function addNext(nextNumber){
        sum += nextNumber;

        return addNext;
    }

    addNext.toString = () => String(sum);

    return addNext;
}

console.log(add(1)(6)(-3).toString());