function townPopulation(arr){
    let cityStats = {};

    for(let cityChars of arr){
        let tokens = cityChars.split(' <-> ');

        let city = tokens[0];

        let population = Number(tokens[1]);

        if(cityStats[city]){
            cityStats[city].population += population;

        }else{
            cityStats[city] = {population};
        }
    }

    for(let city in cityStats){
        let population = cityStats[city].population;

        console.log(`${city} : ${population}`);
    }
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);
