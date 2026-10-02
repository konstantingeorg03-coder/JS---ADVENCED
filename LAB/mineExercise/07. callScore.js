function solve(){
    let player1 = {
        name: 'Konstantin',
        score: 10
    };

    let player2 = {
        name: 'Ivan',
        score: 20
    };

    function addPoints(points){
        this.score += points;
    }

    addPoints.call(player1, 5);
    addPoints.call(player2, 8);

    console.log(player1.score);
    console.log(player2.score);
}

solve();