function notify(message){
    const hidddenNotification = document.getElementById('notification');

    hidddenNotification.textContent = message;

    hidddenNotification.style.display = 'block';

    hidddenNotification.addEventListener('click', () => {
        hidddenNotification.style.display = 'none';
    });
}