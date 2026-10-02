function fibonacci(){
    let previous = 0;
    let current = 1;

    return function(){
        const result = current;

        current += previous;
        previous = result;

        return result;
    }
}

let fib = fibonacci();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
