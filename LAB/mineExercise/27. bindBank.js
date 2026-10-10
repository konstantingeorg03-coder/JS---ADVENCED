class Team {
    constructor(){
        this.teams = {};
    }

    addPlayer(name, points, team){
        if(!this.teams[team]){
            this.teams[team] = [];
        }

        this.teams[team].push({name, points});
    }

    teamAverage(team){
        if(!this.teams[team]){
            throw new Error ('Team not found!');

        }else{
            let sum = 0;

            for(let player of this.teams[team]){
                sum += player.points;
            }

            let avgPoints = sum / this.teams[team].length;

            return `${team} average: ${avgPoints.toFixed(2)}`;
        }
    }
}

const t = new Team();
t.addPlayer('Kosio', 10, 'Lions');
t.addPlayer('Ivan', 20, 'Lions');
t.addPlayer('Petar', 5, 'Tigers');
console.log(t.teamAverage('Lions'));   // Lions average: 15.00
console.log(t.teamAverage('Tigers'));  // Tigers average: 5.00
t.teamAverage('Bears');                // Error: Team not found!