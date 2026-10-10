class League {
    constructor(){
        this.teams = {};
    }

    addPlayer(name, goals, position, team){
        for(let parm of [name, goals, position, team]){
            if(parm === '' || parm === undefined || parm === null){
                throw new Error ('Invalid input!');
            }
        }

        if(goals < 0){
            throw new Error ('Invalid input!');
        }

        if(!this.teams[team]){
            this.teams[team] = [];
        }

        this.teams[team].push({name, goals, position});

        return `Player ${name} joined ${team}. Position: ${position}`;
    }

    bestTeam(){
        let bestName = '';

        let bestAvg = 0;

        for(let player in this.teams){
            let sum = 0;

            for(let stats of this.teams[player]){
                sum += stats.goals;
            }

            let avg = sum / this.teams[player].length;

            if(avg > bestAvg){
                bestAvg = avg;

                bestName = player;
            }
        }

        let sortetPlayers = this.teams[bestName].sort((a, b) => b.goals - a.goals || a.name.localeCompare(b.name));

        let result = `Best team is: ${bestName}\n`;

        result += `Average goals: ${bestAvg.toFixed(2)}\n`;

        for(let players of sortetPlayers){
            result += `${players.name} ${players.goals} ${players.position}\n`;
        }

        return result.trim();
    }
}

const l = new League();
console.log(l.addPlayer('Kosio', 5, 'striker', 'Levski'));
l.addPlayer('Ivan', 3, 'defender', 'Levski');
l.addPlayer('Stan', 5, 'midfielder', 'Levski');
l.addPlayer('Maria', 4, 'striker', 'CSKA');
console.log(l.bestTeam());