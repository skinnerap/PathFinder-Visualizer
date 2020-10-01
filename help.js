// Triggers a Help popup modal when the help button is clicked
const help = document.querySelector('.help');
const openHelp = document.querySelector('.openHelp');
const closeHelp = document.querySelector('.closeHelp');

openHelp.addEventListener('click', () => {
    help.classList.add('showHelp');
})

closeHelp.addEventListener('click', () => {
    help.classList.remove('showHelp');
})