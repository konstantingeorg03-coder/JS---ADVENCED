class Race {
    constructor(){
        this.runners = [];
    }

    addRunner(name, time){
        this.runners.push({name, time});
    }

    ranking(){
        this.runners.sort((a, b) => a.time - b.time || a.name.localeCompare(b.name));

        let result = '';

        for(let i = 0; i < this.runners.length; i++){
            const runner = this.runners[i];

            result += `${i + 1}. ${runner.name} - ${runner.time}\n`;
        }

        return result.trim();
    }
}

const r2 = new Race();
r2.addRunner('Stan', 10);
r2.addRunner('Ana', 15);
r2.addRunner('Bobi', 10);
r2.addRunner('Dimo', 8);
console.log(r2.ranking());