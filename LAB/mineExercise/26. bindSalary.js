class Scores {
    constructor(){
        this.classes = {};
    }

    addScore(name, score, className){
        if(!this.classes[className]){
            this.classes[className] = [];
        }

        this.classes[className].push({name, score});
    }

    bestClass(){
        let bestName = '';

        let bestAvg = 0;

        for(let className in this.classes){
            let sum = 0;

            for(let name of this.classes[className]){
                sum += name.score;
            }

            let avg = sum / this.classes[className].length;

            if(avg > bestAvg){
                bestAvg = avg;

                bestName = className;
            }
        }

        return `Best class: ${bestName} (${bestAvg.toFixed(2)})`;
    }
}

const s = new Scores();
s.addScore('Kosio', 50, '10A');
s.addScore('Maria', 40, '10A');
s.addScore('Ivan', 60, '10B');
console.log(s.bestClass());