function checkPrice(price){
    if(price < 0){
        throw new Error('Невалидна цена');
    }else{
        return 'Валидна цена';
    }
}

try {
    checkPrice(-5);

}catch(error){
    console.error(error.message);
}