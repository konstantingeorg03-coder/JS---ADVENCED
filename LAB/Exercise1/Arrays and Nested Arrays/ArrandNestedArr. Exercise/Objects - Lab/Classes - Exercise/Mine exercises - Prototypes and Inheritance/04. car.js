let car = {brand: 'BMW', speed: 100};

Object.seal(car);

car.speed = 200;

car.color = 'red';

delete car.brand;

console.log(car);