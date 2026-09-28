function attachEventsListeners(){
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const daysButton = document.getElementById('daysBtn');
    const hoursButton = document.getElementById('hoursBtn');
    const minutesButton = document.getElementById('minutesBtn');
    const secondsButton = document.getElementById('secondsBtn');

    daysButton.addEventListener('click', () => {
        let daysValue = Number(days.value);
        hours.value = daysValue * 24;
        minutes.value = daysValue * 24 * 60;
        seconds.value = daysValue * 24 * 60 * 60;
    });

    hoursButton.addEventListener('click', () => {
        let hoursValue = Number(hours.value);
        days.value = hoursValue / 24;
        minutes.value = hoursValue * 60;
        seconds.value = hoursValue * 60 * 60;
    });

    minutesButton.addEventListener('click', () => {
        let minutesValue = Number(minutes.value);
        days.value = minutesValue / 60 / 24;
        hours.value = minutesValue / 60;
        seconds.value = minutesValue * 60; 
    });

    secondsButton.addEventListener('click', () => {
        let secondsValue = Number(seconds.value);
        days.value = secondsValue / 24 / 60 / 60;
        hours.value = secondsValue / 60 / 60;
        minutes.value = secondsValue / 60;
    });
}