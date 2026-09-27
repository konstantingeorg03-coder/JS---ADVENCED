function lockedProfile(){
    const profiles = Array.from(document.getElementsByClassName('profile'));

    profiles.forEach((profile) => {
        const div = profile.querySelector('div[id$="HiddenFields"]');
        const button = profile.querySelector('button');
        const input = profile.querySelector('input[value="lock"]');

        button.addEventListener('click', () => {
            if(input.checked) return;

            const isHidden = div.style.display === 'none' || div.style.display === '';

            div.style.display = isHidden ? 'blovk' : 'none';
            button.textContent = isHidden ? 'Hide it' : 'Show more';

        });
    });
}