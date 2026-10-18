class Garden {
    constructor(spaceAvailable){
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired){
        if(spaceRequired > this.spaceAvailable){
            throw new Error ('Not enough space in the garden.');
        }

        this.plants.push({plantName, spaceRequired, ripe: false, quantity: 0});

        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity){
        let plantFind = this.plants.find(p => p.plantName === plantName);

        if(!plantFind){
            throw new Error (`There is no ${plantName} in the garden.`);
        }

        if(plantFind.ripe === true){
            throw new Error (`The ${plantName} is already ripe.`);
        }

        if(quantity <= 0){
            throw new Error ('The quantity cannot be zero or negative.');
        }

        plantFind.ripe = true;

        plantFind.quantity += quantity;

        if(quantity === 1){
            return `${quantity} ${plantName} has successfully ripened.`;
        }else{
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName){
        let plantFind = this.plants.find(p => p.plantName === plantName);

        if(!plantFind){
            throw new Error (`There is no ${plantName} in the garden.`);
        }

        if(plantFind.ripe === false){
            throw new Error (`The ${plantName} cannot be harvested before it is ripe.`);
        }

        let index = this.plants.indexOf(plantFind);

        this.plants.splice(index, 1);

        this.storage.push({plantName, quantity: plantFind.quantity});

        this.spaceAvailable += plantFind.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport(){
        let result = [];

        result.push(`The garden has ${this.spaceAvailable} free space left.`);

        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));

        let names = [];

        for(let plant of this.plants){
            names.push(plant.plantName);
        }

        result.push(`Plants in the garden: ${names.join(', ')}`);

        if(this.storage.length === 0){
            result.push('Plants in storage: The storage is empty.');
        }else{
            let stored = [];

            for(let plant of this.storage){
                stored.push(`${plant.plantName} (${plant.quantity})`);
            }

            result.push(`Plants in storage: ${stored.join(', ')}`);
        }

        return result.join('\n');
    }
}