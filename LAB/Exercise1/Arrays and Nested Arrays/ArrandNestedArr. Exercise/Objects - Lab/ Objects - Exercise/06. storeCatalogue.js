function storeCatalogue(arr){
    let productsStats = {};

    for(let products of arr){
        let tokens = products.split(' : ');

        let name = tokens[0];

        let price = Number(tokens[1]);

        productsStats[name] = price;
    }

    let sortedProducts = Object.keys(productsStats);

    sortedProducts.sort((a, b) => a.localeCompare(b));

    let previousLetter = '';

    for(let product of sortedProducts){
        let firstLetter = product[0];

        if(firstLetter !== previousLetter){
            console.log(firstLetter);

            previousLetter = firstLetter;
        }

        console.log(`  ${product}: ${productsStats[product]}`);
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']

);