function carFactory(obj){
    let engine;

    if(obj.power <= 90){
        engine = {power: 90, volume: 1800};

    }else if(obj.power <= 120){
        engine = {power: 120, volume: 2400};

    }else{
        engine = {power: 200, volume: 3500};
    }

    let carriage = {
        type: obj.carriage,
        color: obj.color
    }

    if(obj.wheelsize % 2 === 0){
        obj.wheelsize -= 1;
    }

    let wheels = [];

    for(let i = 0; i < 4; i++){
        wheels.push(obj.wheelsize);
    }

    let car = {
        model: obj.model,
        engine: engine,
        carriage: carriage,
        wheels: wheels
    };

    return car;
}

console.log(carFactory({ model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14 }));
