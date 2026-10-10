class Shop {
    constructor(){
        this.categories = {};
    }

    addProduct(name, price, category){
        for(let param of [name, price, category]){
            if(param === '' || param === undefined || param === null){
                throw new Error ('Invalid product!');
            }
        }

        if(price <= 0){
            throw new Error ('Invalid product!');
        }

        if(!this.categories[category]){
            this.categories[category] = [];
        }

        this.categories[category].push({name, price});

        return `Product ${name} added.`;
    }
}

const shop = new Shop();
console.log(shop.addProduct('Milk', 2.5, 'food'));   // Product Milk added.
console.log(shop.addProduct('Cheese', 8, 'food'));   // Product Cheese added.
shop.addProduct('', 3, 'food');                      // Error: Invalid product!
shop.addProduct('Bread', -1, 'food');                // Error: Invalid product!
shop.addProduct('Water', 0, 'drinks');               // Error: Invalid product!
shop.addProduct('Juice', 3, null);                   // Error: Invalid product!