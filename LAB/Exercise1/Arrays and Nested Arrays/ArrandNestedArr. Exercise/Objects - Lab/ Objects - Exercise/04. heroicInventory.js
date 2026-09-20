function heroicInventory(arr){
    let heroes = [];

    for(let hero of arr){
        if(hero === ''){
            continue;
        }
        let tokens = hero.split(' / ');

        let name = tokens[0];

        let level = Number(tokens[1]);

        let items = [];

        if(tokens[2]){
            items = tokens[2].split(', ');
        }

        let heroObj = {};
        
        heroObj = {
            name: name,
            level: level,
            items: items
        };

        heroes.push(heroObj);
    }

    heroes = JSON.stringify(heroes);

    return heroes;
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));
