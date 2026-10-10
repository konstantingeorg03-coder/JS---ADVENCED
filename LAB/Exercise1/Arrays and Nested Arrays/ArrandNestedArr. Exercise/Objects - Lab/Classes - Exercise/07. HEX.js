class Hex {
    constructor(value){
        this.value = value;
    }

    valueOf(){
        return this.value;
    }

    toString(){
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(number){
        let num;

        if(number instanceof Hex){
            num = number.value;
        }else{
            num = number;
        }

        return new Hex(this.value + num);
    }

    minus(number){
        let num;

        if(number instanceof Hex){
            num = number.value;
        }else{
            num = number;
        }

        return new Hex(this.value - num);
    }

    parse(string){
        return parseInt(string, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());                      // 0xFF
console.log(FF.valueOf() + 1 == 256);            // true
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());               // 0xF
console.log(a.plus(b).toString() === '0xF');     // true
console.log(FF.parse('AAA'));   