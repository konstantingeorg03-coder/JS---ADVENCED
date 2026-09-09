function stringLength(input1, input2, input3){
    const inputSum = input1.length + input2.length + input3.length;

    const averageLength = Math.floor(inputSum / 3);

    console.log(inputSum);

    console.log(averageLength);
}
stringLength('chocolate', 'ice cream', 'cake');
