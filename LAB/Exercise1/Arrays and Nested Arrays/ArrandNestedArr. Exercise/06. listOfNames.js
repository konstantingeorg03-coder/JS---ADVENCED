function listOfNames(obj){
    obj = obj.sort((a, b) => a.localeCompare(b));

    for(let i = 0; i < obj.length; i++){
        console.log(`${i + 1}.${obj[i]}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);

