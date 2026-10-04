function checkStock(stock){
    if(stock < 0){
        throw new Error('Invalid stock');
    }else{
        return 'Valid stock';
    }
}

try {
    console.log(checkStock(-10));

}catch(error){
    console.error(error.message);
}