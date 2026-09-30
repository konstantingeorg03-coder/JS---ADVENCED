function solve(commands){
    let list = [];

    let processorObj = {
        add(word){
            list.push(word);
        },

        remove(secondWord){
            list = list.filter(item => item !== secondWord);
        },

        print(){
            console.log(list.join(','));
        }
    }; 

    for(let command of commands){
        let [action, word] = command.split(' ');

        processorObj[action](word);
    }
}

let commands = [
    'add hello',
    'add again',
    'remove hello',
    'add again',
    'print'
    ];

solve(commands);