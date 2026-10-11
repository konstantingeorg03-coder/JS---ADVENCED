let config = {};

Object.defineProperty(config, 'version', {value: 1, writable: false});

config.version = 2;

console.log(config.version);