class ShadyCarDealership {
    constructor(dealerName){
        this.dealerName = dealerName;
        this.availableCars = [];
        this.soldCars = [];
        this.revenue = 0;
    }

    addCar(model, year, mileage, price){
        if(typeof model !== 'string' || model === '' || typeof year !== 'number' || year < 1950 ||
            typeof mileage !== 'number' || mileage < 0 || typeof price !== 'number' || price < 0){
                throw new Error ('Invalid car!');
        }else{
            this.availableCars.push({model, year, mileage, price});

            return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
        }
    }

    prepareCarForSale(model){
        let car = this.availableCars.find(c => c.model === model);

        if (!car) {
            return `${model} was not found for preparation!`;
        }

        car.mileage = car.mileage / 2;

        car.price = car.price * 1.3;

        return `${model} (${car.year}) is prepared for sale with ${car.mileage} km. - ${car.price.toFixed(2)}$`;
    }

    sellCar(model, desiredYear){
        let carFind = this.availableCars.find(c => c.model === model);

        if(!carFind){
            return `${model} was not found!`;
        }

        let soldPrice = carFind.price;

        if(carFind.year >= desiredYear){

        }else if(desiredYear - carFind.year <= 5){
            soldPrice = soldPrice * 0.9;
        }else{
            soldPrice *= 0.8;
        }

        let index = this.availableCars.indexOf(carFind);
        this.availableCars.splice(index, 1);

        this.soldCars.push({
            model: carFind.model,
            year: carFind.year,
            mileage: carFind.mileage,
            soldPrice
        });

        this.revenue += soldPrice;

        return `${model} (${carFind.year}) was sold for ${soldPrice.toFixed(2)}$`;
    }

    salesJournal(criteria){
        if(criteria !== 'year' && criteria !== 'model'){
            throw new Error('Invalid criteria!');
        }

        if(criteria === 'year'){
            this.soldCars.sort((a, b) => b.year - a.year);
        }else{
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }

        let result = [];
        result.push(`${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$`);
        result.push(`${this.soldCars.length} cars sold:`);

        for(let car of this.soldCars){
            result.push(`${car.model} (${car.year}) / ${car.mileage} km. / ${car.soldPrice.toFixed(2)}$`);
        }

        return result.join('\n');
    }
}