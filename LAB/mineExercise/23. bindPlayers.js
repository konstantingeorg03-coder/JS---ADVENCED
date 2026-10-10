class Hotel {
    constructor(){
        this.hotels = {};
    }

    addGuest(name, nights, hotel){
        if(!this.hotels[hotel]){
            this.hotels[hotel] = [];
        }

        this.hotels[hotel].push({name, nights});
    }

    bestHotel(){
        let bestName = '';

        let bestTotal = 0;

        for(let curHotel in this.hotels){
            let sum = 0;

            for(let guest of this.hotels[curHotel]){
                sum += guest.nights;
            }

            if(sum > bestTotal){
                bestTotal = sum;

                bestName = curHotel;
            }
        }

        const guests = this.hotels[bestName];

        guests.sort((a, b) => b.nights - a.nights || a.name.localeCompare(b.name));

        let result = `Best hotel: ${bestName}\n`;
                  
        result += `Total nights: ${bestTotal}\n`;
 
        for (let guest of guests) {
            result += `${guest.name} ${guest.nights}\n`;
        }

        return result.trim();
    }
}