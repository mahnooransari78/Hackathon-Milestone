// display area
var form = document.getElementById('Resume-form');
var displayresume = document.getElementById('Resume-display');
// form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // input value
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate resume
    var resume = "\n    <h2><center><b>Resume</b></center></h2>\n    <hr style=\"color: black ; width: 90%;\">\n\n    <h3><u>Personal Information</u></h3>\n    <p><b>Name : </b>".concat(name, "</p>\n    <p><b>email : </b>").concat(email, "</p>\n    <p><b>phone : </b>").concat(phone, "</p>\n\n    <h3><u>Education : </u></h3>\n    <p>").concat(education, "</p>\n\n    <h3><u>Experience : </u></h3>\n    <p>").concat(experience, "</p>\n\n    <h3><u>Skills : </u></h3>\n    <p>").concat(skills, "</p>\n    ");
    // display resume
    if (displayresume) {
        displayresume.innerHTML = resume;
    }
    else {
        console.error("The resume display element is missing");
    }
});
