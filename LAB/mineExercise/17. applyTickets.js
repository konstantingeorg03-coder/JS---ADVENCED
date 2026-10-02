function solve(){
    let cinema = {
        ticketPrice: 12
    }

    let details = [4, 5];

    function calculateBooking(count, fee){
        return this.ticketPrice * count + fee;
    }

    let result = calculateBooking.apply(cinema, details);

    console.log(result);
}
solve();