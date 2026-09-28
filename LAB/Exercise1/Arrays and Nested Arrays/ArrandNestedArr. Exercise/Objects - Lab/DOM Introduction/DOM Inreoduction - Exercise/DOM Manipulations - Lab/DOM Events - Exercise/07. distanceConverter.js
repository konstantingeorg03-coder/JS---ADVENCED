function attachEventsListeners(){
    const conversionRates = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254
    };

    const inputDistance = document.getElementById('inputDistance');
    const inputUnits = document.getElementById('inputUnits');

    const outputDistanceResult = document.getElementById('outputDistance');
    const outputUnits = document.getElementById('outputUnits');

    const buttonConvert = document.getElementById('convert');

    buttonConvert.addEventListener('click', () => {
        let valueNum = Number(inputDistance.value);
        let inputUnitsValue = inputUnits.value;
        let outputUnitsValue = outputUnits.value;

        valueNum *= conversionRates[inputUnitsValue];
        valueNum = valueNum / conversionRates[outputUnitsValue];
        outputDistanceResult.value = valueNum; 
    });
}