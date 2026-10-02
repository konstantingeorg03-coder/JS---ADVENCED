function solve(){
    let player1 = {
        name: 'Ivan',
        score: 10
    }

    let player2 = {
        name: 'Konstantin',
        score: 20
    }

    function addPoints(first, second){
        this.score += first + second;
    }

    addPoints.apply(player1, [5, 3]);
    addPoints.apply(player2, [10, 2]);

    console.log(player1.score);
    console.log(player2.score);
}

solve();