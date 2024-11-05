// display area
const form = document.getElementById('Resume-form') as HTMLFormElement;
const displayresume = document.getElementById('Resume-display') as HTMLDivElement;
 
// form submission

form.addEventListener('submit', (event : Event)=> {
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
    <h2><center><b>Resume</b></center></h2>
    <hr style="color: black ; width: 90%;">

    <h3><u>Personal Information</u></h3>
    <p><b>Name : </b>${name}</p>
    <p><b>email : </b>${email}</p>
    <p><b>phone : </b>${phone}</p>

    <h3><u>Education : </u></h3>
    <p>${education}</p>

    <h3><u>Experience : </u></h3>
    <p>${experience}</p>

    <h3><u>Skills : </u></h3>
    <p>${skills}</p>
    `;

    // display resume

    if(displayresume){
        displayresume.innerHTML = resume;
    }else{
        console.error("The resume display element is missing");
    }
    
});