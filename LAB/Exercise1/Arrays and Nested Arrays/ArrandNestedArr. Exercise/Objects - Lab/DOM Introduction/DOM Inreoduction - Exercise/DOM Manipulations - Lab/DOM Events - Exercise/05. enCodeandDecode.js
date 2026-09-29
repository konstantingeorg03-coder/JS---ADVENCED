function encodeAndDecodeMessages(){
    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', () => {
        let userText = textAreas[0].value;

        let encodeMessage = '';
        
        for(let symbol of userText){
            let neededSymbol = symbol.charCodeAt(0) + 1;

            encodeMessage += String.fromCharCode(neededSymbol);
        }

        textAreas[0].value = '';
        textAreas[1].value = encodeMessage;
    });

    buttons[1].addEventListener('click', () => {
        let decodedMessage = textAreas[1].value;

        let decodeText = '';

        for(let symbol of decodedMessage){
            let neededLetter = symbol.charCodeAt(0) - 1;

            decodeText += String.fromCharCode(neededLetter);
        }

        textAreas[1].value = decodeText;
    });
}