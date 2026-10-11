function juiceFlavors(arr){
    let juices = new Map();

    let bottles = new Map();

    for(let juice of arr){
        let [product, quantity] = juice.split(' => ');

        quantity = Number(quantity);

        if(juices.has(product)){
            juices.set(product, juices.get(product) + quantity);

        }else{
            juices.set(product, quantity);
        }

        let total = juices.get(product);

        if(total >= 1000){
            let newBottles = Math.floor(total / 1000);

            if(bottles.has(product)){
                bottles.set(product, bottles.get(product) + newBottles);

            }else{
                bottles.set(product, newBottles);
            }

            juices.set(product, total % 1000);
        }
    }

    for(let [name, count] of bottles){
        console.log(`${name} => ${count}`);
    }
}

juiceFlavors(['Kiwi => 234',
 'Pear => 2345',
 'Watermelon => 3456',
 'Kiwi => 4567',
 'Pear => 5678',
 'Watermelon => 6789']);