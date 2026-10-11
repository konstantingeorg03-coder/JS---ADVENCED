let phone = {brand: 'Samsung', model: 'S23'};

Object.defineProperty(phone, 'pin', {value: 1234, enumerable: true});

console.log(phone.pin);

console.log(Object.keys(phone));