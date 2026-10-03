function calculator(){
    let num1;
    let num2;
    let result;

    let obj = {
        init(selector1, selector2, selector3){
            num1 = document.querySelector(selector1);
            num2 = document.querySelector(selector2);
            result = document.querySelector(selector3);
        },

        add(){
            let value1 = Number(num1.value);
            let value2 = Number(num2.value);
            result.value = value1 + value2;
        },

        subtract(){
            let value1 = Number(num1.value);
            let value2 = Number(num2.value);
            result.value = value1 - value2;
        }
    }

    return obj;
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');