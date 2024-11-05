// Get references to the form and display area
var form_resume = document.getElementById('resume-form');
var resume_DisplayElement = document.getElementById('resume-display');
var shareable_LinkContainer = document.getElementById('link-container');
var shareable_LinkElement = document.getElementById('shareable-link');
var download_PdfButton = document.getElementById('pdf');
// Handle form submission
form_resume.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving thedata locally
    // Generate the resume content dynamically
    var resumeHTML = "\n <h2 style=\"padding-top:20px; text-align:center;\"><u>Editable Resume</u></h2>\n\n <h3><u><b>Personal Information</b></u></h3>\n\n <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n \n <h3>Education</h3>\n <p contenteditable=\"true\">").concat(education, "</p>\n \n <h3>Experience</h3>\n <p contenteditable=\"true\">").concat(experience, "</p>\n \n <h3>Skills</h3>\n <p contenteditable=\"true\">").concat(skills, "</p>\n ");
    // Display the generated resume
    resume_DisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareable_LinkContainer.style.display = 'block';
    shareable_LinkElement.href = shareableURL;
    shareable_LinkElement.textContent = shareableURL;
});
// Handle PDF download
download_PdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
