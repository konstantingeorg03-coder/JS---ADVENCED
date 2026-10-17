class JobOffers {
    constructor(employer, position){
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates){
        const addedCandidates = [];

        for(let candidate of candidates){
            let [name, education, yearsExperience] = candidate.split('-');

            yearsExperience = Number(yearsExperience);

            let candidateFind = this.jobCandidates.find(c => c.name === name);

            if(candidateFind){
                if(yearsExperience > candidateFind.yearsExperience){
                    candidateFind.yearsExperience = yearsExperience;
                }
            }else{
                this.jobCandidates.push({name, education, yearsExperience});
            }

            if(!addedCandidates.includes(name)) addedCandidates.push(name);
        }

        return `You successfully added candidates: ${addedCandidates.join(', ')}.`;
    }

    jobOffer(chosenPerson){
        let [person, exp] = chosenPerson.split('-');

        exp = Number(exp);

        const personFind = this.jobCandidates.find(c => c.name === person);

        if(!personFind){
            throw new Error(`${person} is not in the candidates list!`);
        }

        if(exp > personFind.yearsExperience){
            throw new Error(`${person} does not have enough experience as ${this.position}, minimum requirement is ${exp} years.`);
        }

        personFind.yearsExperience = 'hired';
        return `Welcome aboard, our newest employee is ${person}.`;
    }

    salaryBonus(name){
        let candidateFind = this.jobCandidates.find(c => c.name === name);

        if(!candidateFind){
            throw new Error (`${name} is not in the candidates list!`);
        }

        let salary = '40,000';

        if(candidateFind.education === 'Bachelor'){
            salary = '50,000';
        }else if(candidateFind.education === 'Master'){
            salary = '60,000';
        }

        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $${salary} per year!`
    }

    candidatesDatabase(){
        if(this.jobCandidates.length === 0){
            throw new Error ('Candidate Database is empty!');
        }


        const result = ['Candidates list:'];
        [...this.jobCandidates]
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach(c => result.push(`${c.name}-${c.yearsExperience}`));

        return result.join('\n');
    }
}