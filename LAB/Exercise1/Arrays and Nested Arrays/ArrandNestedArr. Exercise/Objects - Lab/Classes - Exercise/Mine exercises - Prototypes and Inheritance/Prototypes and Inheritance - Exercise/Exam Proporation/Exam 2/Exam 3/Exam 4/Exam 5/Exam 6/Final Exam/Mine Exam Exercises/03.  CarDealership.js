class CarDealership {
    constructor(name){
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage){
        if (
            typeof model !== 'string' || model === '' ||
            !Number.isInteger(horsepower) || horsepower < 0 ||
            typeof price !== 'number' || price < 0 ||
            typeof mileage !== 'number' || mileage < 0) {
            throw new Error('Invalid input!');
        }

        this.availableCars.push({model, horsepower, price, mileage});

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage){
        let carFind = this.availableCars.find(c => c.model === model);

        if(!carFind){
            throw new Error (`${model} was not found!`);
        }

        let soldPrice = carFind.price

        if(carFind.mileage <= desiredMileage){
            soldPrice = carFind.price
        }else if(carFind.mileage <= desiredMileage + 40000){
            soldPrice *= 0.95;
        }else{
            soldPrice *= 0.90;
        }

        let index = this.availableCars.indexOf(carFind);

        this.availableCars.splice(index, 1);

        this.soldCars.push({ model, horsepower: carFind.horsepower, soldPrice });

        this.totalIncome += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar(){
        if(this.availableCars.length === 0){
            return 'There are no available cars';
        }else{
            let result = [];

            result.push('-Available cars:');

            for(let car of this.availableCars){
                result.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
            }

            return result.join('\n');
        }
    }

    salesReport(criteria){
        if(criteria !== 'horsepower' && criteria !== 'model'){
            throw new Error ('Invalid criteria!');
        }

        if(criteria === 'horsepower'){
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        }else if(criteria === 'model'){
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }

        let result = [];

        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);

        result.push(`-${this.soldCars.length} cars sold:`)

        for(let car of this.soldCars){
            result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`);
        }

        return result.join('\n');
    }
}