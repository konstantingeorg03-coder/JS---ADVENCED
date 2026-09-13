function EvenPositionElement(data){
    let output = '';

    for(let i = 0; i < data.length; i++){
        if(i % 2 == 0){
            output += data[i];
            output += ' ';
        }
    }

    console.log(output);
}

EvenPositionElement(['20', '30', '40', '50', '60'])