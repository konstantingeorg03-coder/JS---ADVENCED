class Store {
    constructor(){
        this.categories = {};
    }

    addProduct(name, price, category){
        if(!this.categories[category]){
            this.categories[category] = [];
        }

        this.categories[category].push({name, price});
    }

    topProducts(category){
        this.categories[category].sort((a, b) => b.price - a.price || a.name.localeCompare(b.name));

        let result = '';

        for(let product of this.categories[category]){
            result += `${product.name} - ${product.price}\n`;
        }    

        return result.trim();
    }
}

const st = new Store();
st.addProduct('Milk', 2.5, 'food');
st.addProduct('Cheese', 8, 'food');
st.addProduct('Bread', 2.5, 'food');
st.addProduct('Cola', 3, 'drinks');
console.log(st.topProducts('food'));