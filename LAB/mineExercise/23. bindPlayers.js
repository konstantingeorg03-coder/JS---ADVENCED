function solve(){
    let player1 = {
        name: 'Ivan',
        score: 10
    }

    let player2 = {
        name: 'Maria',
        score: 20
    }

    function addPoints(points){
        this.score += points;

        console.log(`${this.name} has ${this.score} points`);
    }

    let result = addPoints.bind(player1, 5);
    let result2 = addPoints.bind(player2, 3);
    let result3 = addPoints.bind(player1, 2);

    result();
    result2();
    result3();
}

solve();