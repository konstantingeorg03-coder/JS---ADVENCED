function lockedProfile(){
    const profiles = Array.from(document.getElementsByClassName('profile'));

    profiles.forEach((profile) => {
        const button = profile.querySelector('button');
        
        button.addEventListener('click', () => {
            const lockRadio = profile.querySelector('input[type="radio"]:checked');

            if(lockRadio.value === 'lock') return;

            const hiddenFields = profile.querySelector('[id$=HiddenFields]');

            if(button.textContent === 'Show more'){
                hiddenFields.style.display = 'block';
                button.textContent = 'Hide it';
            }else{
                hiddenFields.style.display = 'none';
                button.textContent = 'Show more';
            }
        });
    });
}