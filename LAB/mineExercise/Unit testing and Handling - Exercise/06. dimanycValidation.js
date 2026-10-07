function validate(){
    let input = document.getElementById('email');

    input.addEventListener('change', () => {
        let validEmail = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if(!validEmail.test(input.value)){
            input.classList.add('error');
        }else{
            input.classList.remove('error');
        }
    });
}