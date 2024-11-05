// display area
const resume_Form = document.getElementById('Resume-form') as HTMLFormElement;
const display_Form = document.getElementById('Resume-display') as HTMLDivElement;
 
// form submission

resume_Form.addEventListener('submit', (event : Event)=> {
    event.preventDefault();

    // input value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Generate resume

    const resume = `
    <h2 style="padding-top:30px"><center><b>Editable Resume</b></center></h2>
    <hr style="color: black ; width: 90%;">

    <h3><u>Personal Information</u></h3>
    <p><b>Name : </b><span contenteditable="true">${name}</span></p>
    <p><b>email : </b><span contenteditable="true">${email}</span></p>
    <p><b>phone : </b><span contenteditable="true">${phone}</span></p>

    <h3><u>Education : </u></h3>
    <p contenteditable="true">${education}</p>

    <h3><u>Experience : </u></h3>
    <p contenteditable="true">${experience}</p>

    <h3><u>Skills : </u></h3>
    <p contenteditable="true">${skills}</p>
    `;

    // display resume

    if(resume_Form){
        display_Form.innerHTML = resume;
    }else{
        console.error("The resume display element is missing");
    }
    
});