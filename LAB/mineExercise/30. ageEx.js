function checkAge(age){
    if(age < 0){
        throw new Error('Invalid age');

    }else{
        return 'Valid age';
    }
}

try {
    console.log(checkAge(30));

}catch(error){
    console.log(error.message);
}