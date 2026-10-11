function createRect(width, height){
    let rect = {width, height};

    Object.defineProperty(rect, 'area', {
        get(){
            return this.width * this.height;
        }
    })

    return rect;
}

let r = createRect(3, 4);
console.log(r.area);   // 12
r.width = 10;
console.log(r.area);   // 40