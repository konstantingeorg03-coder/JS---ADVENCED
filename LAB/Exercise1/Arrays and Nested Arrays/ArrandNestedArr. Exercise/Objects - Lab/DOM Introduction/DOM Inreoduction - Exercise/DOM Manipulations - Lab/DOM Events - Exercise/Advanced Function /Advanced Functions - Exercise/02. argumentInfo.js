function argumentInfo(...args) {
    let count = {};

    for(let arg of args){
        let type = typeof arg;

        console.log(`${type}: ${arg}`);

        if(!count[type]){
            count[type] = 1;

        }else{
            count[type] += 1;
        }
    }

    let arr = Object.entries(count);

    arr.sort((a, b) => b[1] - a[1]);

    for(let current of arr){
        console.log(`${current[0]} = ${current[1]}`);
    }
}

argumentInfo('cat', 42, 'dog');