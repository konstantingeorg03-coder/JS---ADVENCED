class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    get area(){
        return this.width * this.height;
    }

    get perimeter(){
        return 2 * this.width + 2 * this.height;
    }
}

const r = new Rectangle(3, 4);
console.log(r.area);        // 12
console.log(r.perimeter);   // 14

r.width = 10;
console.log(r.area);        // 40
console.log(r.perimeter);   // 28