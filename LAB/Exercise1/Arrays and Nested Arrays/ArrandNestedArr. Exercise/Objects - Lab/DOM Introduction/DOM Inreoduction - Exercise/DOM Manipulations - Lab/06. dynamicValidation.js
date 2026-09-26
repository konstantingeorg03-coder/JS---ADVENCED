function validate(){
    let userEmail = document.getElementById('email');

    userEmail.addEventListener('change', checkEmail);

    let regex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    function checkEmail(event){
        let email = event.target.value;

        let isValid = regex.test(email);

        if(isValid === false){
            event.target.classList.add('error');
        }else{
            event.target.classList.remove('error');
        }
    }
}