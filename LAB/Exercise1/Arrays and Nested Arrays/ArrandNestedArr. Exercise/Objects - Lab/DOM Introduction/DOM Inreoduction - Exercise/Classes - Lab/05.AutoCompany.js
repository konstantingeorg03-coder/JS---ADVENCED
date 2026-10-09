function solve(input) {
    const cars = new Map();

    for (const line of input) {
        const [brand, model, countText] = line.split(' | ');
        const count = Number(countText);

        if (!cars.has(brand)) {
            cars.set(brand, new Map());
        }

        const models = cars.get(brand);

        if (models.has(model)) {
            models.set(model, models.get(model) + count);
        } else {
            models.set(model, count);
        }
    }

    for (const [brand, models] of cars) {
        console.log(brand);
        for (const [model, count] of models) {
            console.log(`###${model} -> ${count}`);
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