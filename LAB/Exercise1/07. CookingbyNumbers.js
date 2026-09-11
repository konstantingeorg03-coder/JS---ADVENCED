function CookingbyNumbers(number, op1, op2, op3, op4, op5){
    number = Number(number);

    let operations = [op1, op2, op3, op4, op5];

    for(let operation of operations){
        switch(operation){
            case 'chop':
                number /= 2;
                break;

            case 'dice':
                number = Math.sqrt(number);
                break;

            case 'spice':
                number++;
                break;

            case 'bake':
                number *= 3;
                break;

            case 'fillet':
                number *= 0.80;
                break;
        }

        console.log(number);
    }
}

CookingbyNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');