class RefurbishedSmartphones{
    constructor(retailer){
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition){
        if(model === '' || typeof model !== 'string'){
            throw new Error ('Invalid smartphone!');
        }

        if(!Number.isInteger(storage) || storage < 0){
            throw new Error ('Invalid smartphone!');
        }

        if(typeof price !== 'number' || price < 0){
            throw new Error ('Invalid smartphone!');
        }

        if(typeof condition !== 'string' || condition.length === 0){
            throw new Error ('Invalid smartphone!');
        }

        this.availableSmartphones.push({ model, storage, price, condition });

        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone (model, desiredStorage){
        let findPhone = this.availableSmartphones.find(p => p.model === model);

        if(!findPhone){
            throw new Error (`${model} was not found!`);
        }

        let soldPrice = findPhone.price;

        if(findPhone.storage < desiredStorage){
            let diffence = desiredStorage - findPhone.storage;

            if(diffence <= 128){
                soldPrice *= 0.9;
            }else{
                soldPrice *= 0.8
            }
        }

        let index = this.availableSmartphones.indexOf(findPhone);

        this.availableSmartphones.splice(index, 1);

        this.soldSmartphones.push({model, storage: findPhone.storage, soldPrice});

        this.revenue += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    upgradePhones(){
        if(this.availableSmartphones.length === 0){
            throw new Error ('There are no available smartphones!');
        }

        let result = [];

        result.push('Upgraded Smartphones:');

        for(let phone of this.availableSmartphones){
            phone.storage *= 2;

            result.push(`${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`);
        }

        return result.join('\n');
    }

    salesJournal(criteria){
        if(criteria !== 'storage' && criteria !== 'model'){
            throw new Error('Invalid criteria!');
        }

        if(criteria === 'storage'){
            this.soldSmartphones.sort((a, b) => b.storage - a.storage);
        }else{
            this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
        }
        let result = [];

        result.push(`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`);

        result.push(`${this.soldSmartphones.length} smartphones sold:`);

        for(let soldPhone of this.soldSmartphones){
            result.push(`${soldPhone.model} / ${soldPhone.storage} GB / ${soldPhone.soldPrice.toFixed(2)}$`);
        }

        return result.join('\n');
    }
}