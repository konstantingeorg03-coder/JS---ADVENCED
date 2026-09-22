function solve(){
    let firstInput = document.getElementById('text');

    let secondInput = document.getElementById('naming-convention');

    let resultElement = document.getElementById('result');

    let firstText = firstInput.value;

    let secondText = secondInput.value;

    firstText = firstText.toLowerCase();

    firstText = firstText.split(' ');

    if(secondText === 'Camel Case'){
        for(let i = 1; i < firstText.length; i++){
            firstText[i] = firstText[i][0].toUpperCase() + firstText[i].slice(1);
        }

        firstText = firstText.join('');

    }else if(secondText === 'Pascal Case'){
        for(let i = 0; i < firstText.length; i++){
            firstText[i] = firstText[i][0].toUpperCase() + firstText[i].slice(1);
        }

        firstText = firstText.join('');

    }else{
        firstText = 'Error!';
    }

    resultElement.textContent = firstText;
}