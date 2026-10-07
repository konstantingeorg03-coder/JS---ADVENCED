function deckOfCard(arr){
    function playingCards(face, suit){
        let obj = {};

        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        let validSuits = {
            'S': '♠',
            'H': '♥',
            'D': '♦',
            'C': '♣'
        };

        obj.face = face;

        obj.suit = validSuits[suit];

        if(!validFaces.includes(face)){
            throw new Error ('Invalid card face');
        }

        if(!validSuits[suit]){
            throw new Error ('Invalid card suit');
        }
    
        obj.toString = function () {
            return obj.face + obj.suit;
        }

        return obj;
    }

    let neededArr = [];

    for(let card of arr){
        let currentFace = card.slice(0, -1);

        let currentSuit = card.slice(-1);

        try{
            let result = playingCards(currentFace, currentSuit);

            neededArr.push(result.toString());
        }catch (error){
            console.log(`Invalid card: ${card}`);

            return;
        }
    }

    console.log(neededArr.join(' '));
}
deckOfCard(['5S', '3D', 'QD', '1C']);
// Invalid card: 1C