class FlightBookingSystem {
    constructor(agencyName){
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight (flightNumber, destination, departureTime, price) {
        let flightFind = this.flights.find(f => f.flightNumber === flightNumber);

        if(flightFind){
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        this.flights.push({flightNumber, destination, departureTime, price});

        return `Flight ${flightNumber} to ${destination} has been added to the system.`
    }

    bookFlight (passengerName, flightNumber) {
        let flightFind = this.flights.find(f => f.flightNumber === flightNumber);

        if(!flightFind){
            return `Flight ${flightNumber} is not available for booking.`;
        }

        this.bookings.push({passengerName, flightNumber});

        this.bookingsCount += 1;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
    }

    cancelBooking(passengerName, flightNumber) {
        let fligthReservetion = this.bookings.find(r => r.flightNumber === flightNumber && r.passengerName === passengerName);

        if(!fligthReservetion){
            throw new Error (`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        }

        let index = this.bookings.indexOf(fligthReservetion);

        this.bookings.splice(index, 1);

        this.bookingsCount -= 1;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {
        if(this.bookings.length === 0){
            throw new Error ('No bookings have been made yet.');
        }

        let result = [];

        if(criteria === 'all'){
            result.push(`All bookings(${this.bookingsCount}):`);

            for(let reservetion of this.bookings){
                result.push(`${reservetion.passengerName} booked for flight ${reservetion.flightNumber}.`);
            }

            return result.join('\n');
        }

        if(criteria === 'cheap'){
            let cheap = [];

            for(let reservation of this.bookings){
            let flight = this.flights.find(f => f.flightNumber === reservation.flightNumber);

            if(flight.price <= 100){
                cheap.push(`${reservation.passengerName} booked for flight ${reservation.flightNumber}.`);
            }
        }

        if(cheap.length === 0){
            return 'No cheap bookings found.';
        }

        return 'Cheap bookings:\n' + cheap.join('\n');
        }

        if(criteria === 'expensive'){
            let expensive = [];

            for(let reservation of this.bookings){
            let flight = this.flights.find(f => f.flightNumber === reservation.flightNumber);

            if(flight.price > 100){
                expensive.push(`${reservation.passengerName} booked for flight ${reservation.flightNumber}.`);
            }
        }

        if(expensive.length === 0){
            return 'No expensive bookings found.';
        }

        return 'Expensive bookings:\n' + expensive.join('\n');
        }
    }
}