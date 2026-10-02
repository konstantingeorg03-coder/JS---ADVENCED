function solve(){
    let hotel1 = {
        pricePerNight: 50
    }

    let hotel2 = {
        pricePerNight: 80
    }

    let details = [3, 20];

    function calculateStay(nights, fee){
        return this.pricePerNight * nights + fee;
    }

    let result = calculateStay.apply(hotel1,details);
    let resutl2 = calculateStay.apply(hotel2, details);

    console.log(result);
    console.log(resutl2);
}

solve();