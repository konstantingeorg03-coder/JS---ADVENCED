function objectFactory(library, orders){
    const obj = [];

    for(let el of orders){
        let ordersObj = {};

        ordersObj = { ...el.template};

        for(let part of el.parts){
            ordersObj[part] = library[part];
        }

        obj.push(ordersObj);
    }

    return obj;
}

objectFactory()