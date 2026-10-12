function balloons(){
    class Balloon {
        constructor(color, gasWeight){
            this.color = color;

            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbenColor, ribbonLength){
            super(color, gasWeight);

            this.ribbenColor = ribbenColor;

            this.ribbonLength = ribbonLength;

            this._ribbon = {
                color: ribbenColor,
                length: ribbonLength
            }
        }

        get ribbon(){
            return this._ribbon;

        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbenColor, ribbonLength, text){
            super(color, gasWeight, ribbenColor, ribbonLength);

            this._text = text;
        }

        get text(){
            return this._text;
        }
    }

    return {Balloon, PartyBalloon, BirthdayBalloon};
}