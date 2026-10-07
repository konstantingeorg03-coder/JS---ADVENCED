function validate(){
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const company = document.getElementById('company');
    const companyNumber = document.getElementById('companyNumber');
    const companyInfo = document.getElementById('companyInfo');
    const button = document.querySelector('button');
    const valid = document.getElementById('valid');

    company.addEventListener('change', () => {
        if(company.checked){
            companyInfo.style.display = 'block';
        }else{
            companyInfo.style.display = 'none'; 
        }
    });

    button.addEventListener('click', (e) => {
        e.preventDefault();

        let isValid = true;

        let validUsername = /^[a-zA-Z0-9]{3,20}$/;
        let validPassword = /^\w{5,15}$/;
        let validEmail = /^.*@.*\..*$/;

        if(validUsername.test(username.value)){
            username.style.border = 'none';
        }else{
            username.style.borderColor = 'red';

            isValid = false;
        }

        if(validPassword.test(password.value) && validPassword.test(confirmPassword.value) && password.value === confirmPassword.value){
            password.style.border = 'none';

            confirmPassword.style.border = 'none';

        }else{
            password.style.borderColor = 'red';

            confirmPassword.style.borderColor = 'red';

            isValid = false;
        }

        if(validEmail.test(email.value)){
            email.style.border = 'none';

        }else{
            email.style.borderColor = 'red';

            isValid = false;
        }

        if(company.checked){
            if(companyNumber.value >= 1000 && companyNumber.value <= 9999){
                companyNumber.style.border = 'none';

            }else{
                companyNumber.style.borderColor = 'red';

                isValid = false;
            }
        }

        if(isValid){
            valid.style.display = 'block';
        }else{
            valid.style.display = 'none';
        }
    });
}