function solve(fruit, weight, pricePerKilos){
    let gr = weight / 1000;

    let neededMoney = gr * pricePerKilos;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${gr.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80);

