function encodeAndDecodeMessages(){
    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', () => {
        let userText = textAreas[0].value;
        
        let encodedMessage = '';

        for(let symbol of userText){
            let neededSymbol = symbol.charCodeAt(0) + 1;

            encodedMessage += String.fromCharCode(neededSymbol);
        }

        textAreas[0].value = '';
        textAreas[1].value = encodedMessage;
    });

    buttons[1].addEventListener('click', () => {
        let decodeText = textAreas[1].value;

        let decodeMessage = '';

        for(let symbol of decodeText){
            let neededDecodeSymbol = symbol.charCodeAt(0) - 1;
            
            decodeMessage += String.fromCharCode(neededDecodeSymbol);
        }

        textAreas[1].value = decodeMessage; 
    });
}