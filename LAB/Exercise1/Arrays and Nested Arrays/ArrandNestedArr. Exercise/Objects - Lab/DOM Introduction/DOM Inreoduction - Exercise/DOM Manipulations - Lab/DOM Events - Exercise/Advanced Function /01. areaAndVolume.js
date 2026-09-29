function solve(area, vol, input){
    const jsonInput = JSON.parse(input);

    let result = [];

    for(let figure of jsonInput){
        let currentArea = area.call(figure);
        let currentVol = vol.call(figure);

        let currentResult = {
            area: currentArea,
            volume: currentVol
        };

        result.push(currentResult);
    }

    return result;
}

