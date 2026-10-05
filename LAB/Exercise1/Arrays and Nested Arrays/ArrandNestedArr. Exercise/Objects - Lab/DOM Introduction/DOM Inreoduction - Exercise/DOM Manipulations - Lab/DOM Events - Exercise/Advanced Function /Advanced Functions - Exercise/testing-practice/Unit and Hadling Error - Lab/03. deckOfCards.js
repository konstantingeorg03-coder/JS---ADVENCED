function deckOfCards(arrCards) {
    let result = [];

    function playingCards(face, suit) {
        let validFaces = [
            '2', '3', '4', '5', '6', '7', '8',
            '9', '10', 'J', 'Q', 'K', 'A'
        ];

        let validSuits = {
            S: '♠',
            H: '♥',
            D: '♦',
            C: '♣'
        };

        if (!validFaces.includes(face) || !validSuits[suit]) {
            throw new Error('Invalid card');
        }

        let obj = {
            face: face,
            suit: validSuits[suit]
        };

        obj.toString = function () {
            return obj.face + obj.suit;
        };

        return obj;
    }

    for (let card of arrCards) {
        let curFace = card.slice(0, -1);
        let curSuit = card.slice(-1);

        try {
            let createdCard = playingCards(curFace, curSuit);
            result.push(createdCard.toString());
        } catch (error) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }

    console.log(result.join(' '));
}

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);

