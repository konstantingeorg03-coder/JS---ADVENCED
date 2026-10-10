class Restaurant {
    constructor(){
        this.categories = {};
    }

    addDish(name, price, category){
        for(let parm of [name, price, category]){
            if(parm === '' || parm === undefined || parm === null){
                throw new Error ('Invalid dish!');
            }
        }

        if(price <= 0){
            throw new Error ('Invalid dish!');
        }

        if(!this.categories[category]){
            this.categories[category] = [];
        }

        this.categories[category].push({name, price});

        return `Dish ${name} added to ${category}.`;
    }

    bestCategory(){
        let bestName = '';

        let bestAvg = 0;

        for(let restourant in this.categories){
            let sum = 0;

            for(let curRestaurant of this.categories[restourant]){
                sum += curRestaurant.price;
            }

            let avg = sum / this.categories[restourant].length;

            if(avg > bestAvg){
                bestAvg = avg;

                bestName = restourant;
            }
        }

        let sortetRest = this.categories[bestName].sort((a, b) => b.price - a.price || a.name.localeCompare(b.name));

        let result = `Best category: ${bestName}\n`;

        result += `Average price: ${bestAvg.toFixed(2)}\n`;

        for(let dish of sortetRest){
            result += `${dish.name} ${dish.price}\n`;
        }

        return result.trim();
    }
}

const rest = new Restaurant();
console.log(rest.addDish('Margarita', 10, 'Pizza'));
rest.addDish('Pepperoni', 12, 'Pizza');
rest.addDish('Calzone', 12, 'Pizza');
rest.addDish('Caesar', 9, 'Salad');
rest.addDish('Greek', 8, 'Salad');
console.log(rest.bestCategory());