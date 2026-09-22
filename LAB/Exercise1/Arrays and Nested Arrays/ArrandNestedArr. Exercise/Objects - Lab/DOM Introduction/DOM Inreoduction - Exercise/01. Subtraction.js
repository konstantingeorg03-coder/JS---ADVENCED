function substract(){
    let firstInput = document.getElementById('firstNumber');

    let secondInput = document.getElementById('secondNumber');

    let firstNumber = Number(firstInput.value);

    let secondNumber = Number(secondInput.value);

    let result = firstNumber - secondNumber;

    let numberResult = document.getElementById('result');

    numberResult.textContent = result;
}