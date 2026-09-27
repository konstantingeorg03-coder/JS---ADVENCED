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
    const outputDistanceResult = document.getElementById('outputDistance');

    const inputUnits = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');

    document.getElementById('convert').addEventListener('click', () => {
        const distanceMeters = Number(inputDistance.value) * conversionRates[inputUnits.value];
        outputDistanceResult.value = distanceMeters / conversionRates[outputUnits.value];
    });
}