function lowestPrices(arr){
    let cityStats = {};

    for(let city of arr){
        let tokens = city.split(' | ');

        let town = tokens[0];

        let product = tokens[1];

        let price = Number(tokens[2]);

        if(!cityStats[product]){
            cityStats[product] = {
                town: town,
                price: price
            };
        }else{
            if(cityStats[product].price > price){
                cityStats[product].town = town;
                cityStats[product].price = price;
            }
        }
    }

    for(let product in cityStats){
        let town = cityStats[product].town;
        
        let price = cityStats[product].price;

        console.log(`${product} -> ${price} (${town})`);
    }
}

lowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);