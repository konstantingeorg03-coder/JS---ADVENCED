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

console.log(playingCards('A', 'X').toString());
