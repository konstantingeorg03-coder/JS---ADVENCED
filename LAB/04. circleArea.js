function circleArea(input){
    let result;

    let typeOff = typeof(input);

    if(typeOff === 'number'){
        result = Math.pow(input, 2) * Math.PI;

        console.log(result.toFixed(2));

    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeOff}.`);
    }
}
circleArea(5);

circleArea('name');
