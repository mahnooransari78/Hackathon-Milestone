const hidenbutton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillssection = document.getElementById('Profile') as HTMLElement
hidenbutton.addEventListener('click', ()=> {
    if (skillssection.style.display === 'none') {
        skillssection.style.display = 'block'
        
    } else {
        skillssection.style.display ='none'
    }
});