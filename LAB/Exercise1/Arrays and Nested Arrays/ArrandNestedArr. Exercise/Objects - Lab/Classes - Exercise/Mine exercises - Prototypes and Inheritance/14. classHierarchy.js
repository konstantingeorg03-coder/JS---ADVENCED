function classHierarchy(){
    class Figure {
        constructor(units = 'cm'){
            this.units = units;
        }

        get area(){
            return 0;
        }

        changeUnits(newUnits){
            this.units = newUnits;
        }

        toString(){
            return `Figures units: ${this.units}`;
        }

        get Factor(){
            if(this.units === 'm'){
                return 0.01;

            }else if(this.units === 'cm'){
                return 1;

            }else if(this.units === 'mm'){
                return 10;
            }
        }
    }

    class Circle extends Figure {
        constructor(radius, units){
            super(units);

            this.radius = radius;
        }

        get area(){
            let r = this.radius * this.Factor;

            return Math.PI * r * r;
        }

        toString(){
            let r = this.radius * this.Factor;

            return `${super.toString()} Area: ${this.area} - radius: ${r}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units){
            super(units);

            this.width = width;

            this.height = height;
        }

        get area(){
            let w = this.width * this.Factor;

            let h = this.height * this.Factor;

            return w * h;
        }

        toString(){    
        let w = this.width * this.Factor;

        let h = this.height * this.Factor;

        return `${super.toString()} Area: ${this.area} - width: ${w}, height: ${h}`;
        }
    }

    return { Figure, Circle, Rectangle };
}
let { Figure, Circle } = classHierarchy();   // 1. вади класовете от функцията
let c = new Circle(5);                       // 2. създава кръг с радиус 5 см
console.log(c.area);                         // 78.53981633974483
console.log(c.toString());                   // Figures units: cm Area: ... - radius: 5
c.changeUnits('mm');
console.log(c.area);         // 7853.981633974483
console.log(c.toString());   // Figures units: mm Area: 7853.981633974483 - radius: 50