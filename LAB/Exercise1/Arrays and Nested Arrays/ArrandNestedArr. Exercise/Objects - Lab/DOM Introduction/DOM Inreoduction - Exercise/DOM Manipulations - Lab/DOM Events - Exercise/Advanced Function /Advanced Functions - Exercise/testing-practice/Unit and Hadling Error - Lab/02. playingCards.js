function playingCards(face, suit){
    let obj = {};

    let arr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let validSuits = {
        'S': '♠',
        'H': '♥',
        'D': '♦',
        'c': '♣'
    };

    if(!arr.includes(face)){
        throw new Error ('Invalid card face');

    }

    obj.face = face;

    obj.suit = validSuits[suit];

    obj.toString = function () {
        return obj.face + obj.suit;
    }

    return obj;
}
console.log(playingCards('A', 'S').toString());