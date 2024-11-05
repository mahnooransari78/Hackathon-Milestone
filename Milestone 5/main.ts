
// Get references to the form and display area
const form_resume = document.getElementById('resume-form') as HTMLFormElement;
const resume_DisplayElement = document.getElementById('resume-display') as HTMLDivElement;

const shareable_LinkContainer = document.getElementById('link-container') as HTMLDivElement;
const shareable_LinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;

const download_PdfButton = document.getElementById('pdf') as HTMLButtonElement;

// Handle form submission
form_resume.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload
 // Collect input values
   const username = (document.getElementById('username') as HTMLInputElement).value;

    const name = (document.getElementById('name') as HTMLInputElement).value;

    const email = (document.getElementById('email') as HTMLInputElement).value;

   const phone = (document.getElementById('phone') as HTMLInputElement).value;
 
   const education = (document.getElementById('education') as HTMLTextAreaElement).value;
 
   const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
 
   const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

 // Save form data in localStorage with the username as the key
 const resumeData = {
 name,
 email,
 phone,
 education,
 experience,
 skills
 };
 localStorage.setItem(username, JSON.stringify(resumeData)); // Saving thedata locally
 // Generate the resume content dynamically
 const resumeHTML = `
 <h2 style="padding-top:20px; text-align:center;"><u>Editable Resume</u></h2>

 <h3><u><b>Personal Information</b></u></h3>

 <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
 <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
 <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
 
 <h3>Education</h3>
 <p contenteditable="true">${education}</p>
 
 <h3>Experience</h3>
 <p contenteditable="true">${experience}</p>
 
 <h3>Skills</h3>
 <p contenteditable="true">${skills}</p>
 `;
 // Display the generated resume
 resume_DisplayElement.innerHTML = resumeHTML;
 // Generate a shareable URL with the username only
 const shareableURL =`${window.location.origin}?username=${encodeURIComponent(username)}`;
 // Display the shareable link
 shareable_LinkContainer.style.display = 'block';
 shareable_LinkElement.href = shareableURL;
 shareable_LinkElement.textContent = shareableURL;
});
// Handle PDF download
download_PdfButton.addEventListener('click', () => {
 window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
 const urlParams = new URLSearchParams(window.location.search);
 const username = urlParams.get('username');
 if (username) {
 // Autofill form if data is found in localStorage
 const savedResumeData = localStorage.getItem(username);
 if (savedResumeData) {
 
    const resumeData = JSON.parse(savedResumeData);

 (document.getElementById('username') as HTMLInputElement).value = username;
 
(document.getElementById('name') as HTMLInputElement).value = resumeData.name;

 (document.getElementById('email') as HTMLInputElement).value =resumeData.email;
 
(document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;

(document.getElementById('education') as HTMLTextAreaElement).value =resumeData.education;

(document.getElementById('experience') as HTMLTextAreaElement).value= resumeData.experience;

 (document.getElementById('skills') as HTMLTextAreaElement).value =resumeData.skills;
     }
   }
});