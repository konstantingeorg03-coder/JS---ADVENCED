function lockedProfile(){
    const profiles = Array.from(document.getElementsByClassName('profile'));

    profiles.forEach((profile) => {
        const button = profile.querySelector('button');
        const hiddenFields = profile.querySelector('[id$=HiddenFields]');
        
        button.addEventListener('click', () => {
            const radio = profile.querySelector('input[type="radio"]:checked');
            if(radio.value === 'lock') return;

            if(button.textContent === 'Show more'){
                hiddenFields.style.display = 'block';
                button.textContent = 'Hide it';

            }else{
                hiddenFields.style.display = 'none';
                button.textContent = 'Show more';
            }
        });


    })
}