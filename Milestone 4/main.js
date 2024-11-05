// display area
var resumeForm = document.getElementById('Resume-form');
var displayForm = document.getElementById('Resume-display');
// form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // input value
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate resume
    var resume = "\n    <h2 style=\"padding-top:30px\"><center><b>Editable Resume</b></center></h2>\n    <hr style=\"color: black ; width: 90%;\">\n\n    <h3><u>Personal Information</u></h3>\n    <p><b>Name : </b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>email : </b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>phone : </b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3 styple=\"border-bottom:2px solid black;\">Education : </h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3><u>Experience : </u></h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3><u>Skills : </u></h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // display resume
    if (displayresume) {
        displayresume.innerHTML = resume;
    }
    else {
        console.error("The resume display element is missing");
    }
});
