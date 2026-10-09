function tickets(arr, sortedCommand){
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let ourTickets = [];

    for(let currentTicket of arr){
        let [city, price, text] = currentTicket.split('|');

        ourTickets.push(new Ticket(city, Number(price), text));
    }

    if(sortedCommand === 'price'){
        ourTickets.sort((a, b) => a.price - b.price);
    }else{
        ourTickets.sort((a, b) => a[sortedCommand].localeCompare(b[sortedCommand]));
    }

    return ourTickets;
}

console.log(tickets(['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'destination'));