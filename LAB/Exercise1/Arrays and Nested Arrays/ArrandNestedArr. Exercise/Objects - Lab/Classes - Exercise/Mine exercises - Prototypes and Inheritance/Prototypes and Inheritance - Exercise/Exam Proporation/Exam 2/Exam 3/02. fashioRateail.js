class FashionRetailInventory {
    constructor(storehouse, location){
        this.storehouse = storehouse
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price){
        let productFind = this.productStock.find(p => p.size === size && p.productName === productName);

        if(!productFind){
            this.productStock.push({productName, size, quantity, price});

            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }

        productFind.quantity += quantity;

        return `You added ${quantity} more pieces of product ${productName} size ${size}`;
    }

    sendProduct (productName, size){
        let productFind = this.productStock.find(p => p.size === size && p.productName === productName);

        if(!productFind){
            throw new Error (`The product ${productName}, size ${size} is not in the inventory`);
        }

        let index = this.productStock.indexOf(productFind);

        this.productStock.splice(index, 1);

        return `The product ${productName}, size ${size} was successfully removed from the inventory`;
    }

    findProductsBySize(size){
        let products = this.productStock.filter(p => p.size === size);

        if(products.length === 0){
            return 'There are no products available in that size';
        }

        let result = [];

        for(let p of products){
            result.push(`${p.productName}-${p.quantity} pieces`);
        }

        return result.join(', ');
    }

    listProducts(){
        let finalProducts = this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));

        if(finalProducts.length === 0){
            return `${this.storehouse} storehouse is empty`
        }

        let result = [];

        result.push(`${this.storehouse} storehouse in ${this.location} available products:`);

        for(let stock of finalProducts){
            result.push(`${stock.productName}/Size:${stock.size}/Quantity:${stock.quantity}/Price:${stock.price}$`)
        }

        return result.join('\n');
    }
}