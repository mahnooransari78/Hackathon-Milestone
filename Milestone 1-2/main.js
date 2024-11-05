var hidenbutton = document.getElementById('toggle-skills');
var skillssection = document.getElementById('Profile');
hidenbutton.addEventListener('click', function () {
    if (skillssection.style.display === 'none') {
        skillssection.style.display = 'block';
    }
    else {
        skillssection.style.display = 'none';
    }
});
