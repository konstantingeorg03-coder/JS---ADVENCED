function extensibleObject(){
    let obj = {
        extend(template){
            for(let key in template){
                if(typeof template[key] === 'function'){
                    Object.getPrototypeOf(this)[key] = template[key];

                }else{
                    this[key] = template[key];
                }
            }
    }};

    return obj;
}