function solve(arr) {
    const cars = new Map();

    for(let carsStats of arr){
        let [brand, model, count] = carsStats.split(' | ');

        count = Number(count);

        if(!cars.has(brand)){
            cars.set(brand, new Map());
        }

        const brands = cars.get(brand);

        if(brands.has(model)){
            brands.set(model, brands.get(model) + count);
        }else{
            brands.set(model, count);
        }
    }

    for(let [bard, checkCars] of cars){
        console.log(bard);

        for(let [car, count] of checkCars){
            console.log(`###${car} -> ${count}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);