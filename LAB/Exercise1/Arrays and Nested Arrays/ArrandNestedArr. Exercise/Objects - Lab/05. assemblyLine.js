function assemblyLine(){

    function hasClima(obj){
        obj.temp = 21;

        obj.tempSettings = 21;

        function adjustTemp(){
            if(obj.temp < obj.tempSettings){
                obj.temp += 1;
            }else if(obj.temp > obj.tempSettings){
                obj.temp -= 1;
            }
        }

        obj.adjustTemp = adjustTemp;
    }

    function hasAudio(obj){
        obj.currentTrack = null;

        function nowPlaying(){
            if(obj.currentTrack !== null){
                console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
            }
        }

        obj.nowPlaying = nowPlaying;
    }

    function hasParktronic(obj){
        
        function checkDistance(distance){
            if(distance < 0.1){
                console.log('"Beep! Beep! Beep!"');

            }else if(distance <= 0.25){
                console.log("Beep! Beep!");

            }else if(distance >= 0.25 && distance < 0.5){
                console.log("Beep!");

            }else{
                console.log('');
            }
        }

        obj.checkDistance = checkDistance;
    }

    let result = {};

    result.hasClima = hasClima;
    result.hasParktronic = hasParktronic;
    result.hasAudio = hasAudio;

    return result;
}

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

