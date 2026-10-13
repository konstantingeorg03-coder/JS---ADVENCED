class Hotel {
    constructor(initialBudget){
        this.initialBudget = Number(initialBudget);

        this.roomAvailability = {};

        this.supplyStock = {};
    }

    restockSupplies(supplies){
        let messages = [];

        for(let supply of supplies){
            let [product, quantity, price] = supply.split(' ');

            quantity = Number(quantity);
            price = Number(price);

            if(price <= this.initialBudget){
                if(!this.supplyStock[product]){
                    this.supplyStock[product] = 0;
                }

                this.supplyStock[product] += quantity;

                this.initialBudget -= price;

                messages.push(`Successfully stocked ${quantity} ${product}`);

            }else{
                messages.push(`There was not enough money to restock ${quantity} ${product}`);
            }
        }

        return messages.join('\n');
    }

    addRoomType(roomType, neededSupplies, pricePerNight){
        if(this.roomAvailability[roomType]){
            return `The ${roomType} is already available in our hotel, try something different.`;
        }

        this.roomAvailability[roomType] = {neededSupplies, pricePerNight};

        return `Great idea! Now with the ${roomType}, we have ${Object.keys(this.roomAvailability).length} types of rooms available, any other ideas?`;
    }

    showAvailableRooms(){
        if(Object.keys(this.roomAvailability).length === 0){
            return `Our rooms are not ready yet, please come back later...`;
        }

        let arrKeys = [];

        for(let keys in this.roomAvailability){
            arrKeys.push(`${keys} - $ ${this.roomAvailability[keys].pricePerNight}`);
        }

        return arrKeys.join('\n');
    }

    bookRoom(roomType){
        if(!this.roomAvailability[roomType]){
            return `There is no ${roomType} available, would you like to book another room?`;
        }

        for(let supply of this.roomAvailability[roomType].neededSupplies){
            let [name, quantity] = supply.split(' ');

            quantity = Number(quantity);

            if(!this.supplyStock[name] || this.supplyStock[name] < quantity){
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`
            }
        }

        return `Your booking for ${roomType} has been confirmed! The price is $${this.roomAvailability[roomType].pricePerNight} per night.`
    }
}
