function solution(n){

    function add(number){
        return n + number;
    }

    return add;
}

let add = solution(5);

console.log(add(2));
console.log(add(3));