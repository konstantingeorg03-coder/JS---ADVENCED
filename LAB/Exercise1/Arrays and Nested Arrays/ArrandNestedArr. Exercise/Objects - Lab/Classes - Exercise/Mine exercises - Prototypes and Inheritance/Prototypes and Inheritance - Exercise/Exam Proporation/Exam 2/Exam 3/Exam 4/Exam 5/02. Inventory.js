class InventoryManager {
    constructor(capacity){
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity){
        if(quantity <= 0){
            throw new Error ('Quantity must be greater than zero.');
        }

        if(this.items.length >= this.capacity){
            throw new Error ('The inventory is already full.');
        }

        let itemsFind = this.items.find(i => i.itemName === itemName);

        if(!itemsFind){
            this.items.push({itemName, quantity});
        }else{
            itemsFind.quantity += quantity;
        }

        return `Added ${quantity} ${itemName}(s) to the inventory.`
    }

    sellItem(itemName, quantity){
        if(quantity <= 0){
            throw new Error('Quantity must be greater than zero.');
        }

        let itemFind = this.items.find(i => i.itemName === itemName);

        if(!itemFind){
            throw new Error (`The item ${itemName} is not available in the inventory.`);
        }

        if(quantity > itemFind.quantity){
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }

        itemFind.quantity -= quantity;

        if(itemFind.quantity === 0){
            let index = this.items.indexOf(itemFind);

            this.items.splice(index, 1);

            this.outOfStock.push(itemName);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }

    restockItem(itemName, quantity){
        if(quantity <= 0){
            throw new Error ('Quantity must be greater than zero.');
        }

        let stockFind = this.items.find(s => s.itemName === itemName);

        if(stockFind){
            stockFind.quantity += quantity;
        }else{
            this.items.push({itemName, quantity});
        }

        let index = this.outOfStock.indexOf(itemName);

        if(index !== -1){
            this.outOfStock.splice(index, 1);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }

    getInventorySummary(){
        let result = [];

        result.push('Current Inventory:');

        for(let item of this.items){
            result.push(`${item.itemName}: ${item.quantity}`);
        }

        if(this.outOfStock.length > 0){
            result.push(`Out of Stock: ${this.outOfStock.join(', ')}`);
        }
        return result.join('\n');
    }
}