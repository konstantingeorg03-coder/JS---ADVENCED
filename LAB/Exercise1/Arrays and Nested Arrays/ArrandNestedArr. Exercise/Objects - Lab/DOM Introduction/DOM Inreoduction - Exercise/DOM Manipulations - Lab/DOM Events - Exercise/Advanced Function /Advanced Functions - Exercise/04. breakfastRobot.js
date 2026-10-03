function breakfastRobot(){
    let recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20}, 
        burger: {carbohydrate: 5, fat: 7, flavour: 3}, 
        eggs: {protein: 5, fat: 1, flavour: 1}, 
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    let products = {
        protein: 0, carbohydrate: 0, fat: 0, flavour: 0
    };

    function solve(command){
        let [action, product, quantity] = command.split(' ');

        if(action === 'restock'){
            products[product] += Number(quantity);

            return 'Success';
            
        }else if(action === 'prepare'){
            let currentProduct = recipes[product];
            
            for(let ingredient in currentProduct){
                let quantityIngredient = currentProduct[ingredient] * Number(quantity);

                if(products[ingredient] < quantityIngredient){
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            for(let ingredient2 in currentProduct){
                products[ingredient2] -= Number(quantity) * currentProduct[ingredient2];
            }

            return 'Success';

        }else if(action === 'report'){
            return `protein=${products['protein']} carbohydrate=${products['carbohydrate']} fat=${products['fat']} flavour=${products['flavour']}`;
        }
    }

    return solve;
}

let manager = breakfastRobot();

console.log(manager('report'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 2'));
console.log(manager('report'));