function generateResume() {
    const name = document.getElementById('name').value;
    const degree = document.getElementById('degree').value;
    const batch = document.getElementById('batch').value;
    const roll = document.getElementById('roll').value;
    const reg = document.getElementById('reg').value;

    const address = document.getElementById('address').value;
    const father = document.getElementById('father').value;
    const mother = document.getElementById('mother').value;

    const org = document.getElementById('org').value;
    const period = document.getElementById('period').value;
    const project = document.getElementById('project').value;

    const objective = document.getElementById('objective').value;
    const techSkills = document.getElementById('techSkills').value;
    const softSkills = document.getElementById('softSkills').value;
    const hobbies = document.getElementById('hobbies').value;
    const achievements = document.getElementById('achievements').value;
    const por = document.getElementById('por').value;
    const activities = document.getElementById('activities').value;

  



  
    const educationRows = document.querySelectorAll('#educationTable tbody tr');
let educationData = `<table border="1"><thead><tr><th>Year</th><th>Board/University</th><th>Institute</th><th>Percentage/CGPA</th></tr></thead><tbody>`;

educationRows.forEach(row => {
const year = row.querySelector('.edu-year').value;
const board = row.querySelector('.edu-board').value;
const institute = row.querySelector('.edu-institute').value;
const grade = row.querySelector('.edu-grade').value;

educationData += `<tr><td>${year}</td><td>${board}</td><td>${institute}</td><td>${grade}</td></tr>`;
});

educationData += `</tbody></table>`;
    document.getElementById('resumeOutput').innerHTML = `
     <div class="header">
            <img src="bit_logo.png" alt="BIT Logo">
            <h2>B.I.T. Sindri , Dhanbad, Jharkhand<br>
             (Dept. of Higher & Technical Education, Govt of Jharkand)   </h2>
          
            
            <img src="self_photo.png" alt="Your Photo">
        </div>
        <p>${name}</p>
        <p><strong>${degree}</strong></p>
        <p>Batch: ${batch} | Roll No: ${roll} | Reg No: ${reg}</p>

        <h3>Objective</h3>
        <p>${objective}</p>

        <h3>Education</h3>
        <table>${educationData}</table>
          
        


        <h3>Skills & Interests</h3>
        <table>
            <tr><td>Technical Skills</td><td>${techSkills}</td></tr>
            <tr><td>Soft Skills</td><td>${softSkills}</td></tr>
            <tr><td>Hobbies/Interests</td><td>${hobbies}</td></tr>
        </table>


        <h3>Personal Details</h3>
        <table>
            <tr><td>Address</td><td>${address}</td></tr>
            <tr><td>Father</td><td>${father}</td></tr>
            <tr><td>Mother</td><td>${mother}</td></tr>
        </table>
        <h3>Internship/Training</h3>
        <table>
            <tr><td>Organization</td><td>${org}</td></tr>
            <tr><td>Period</td><td>${period}</td></tr>
            <tr><td>Project</td><td>${project}</td></tr>
        </table>
    `;
}

function printResume() {
// Get the resume content
const resumeContent = document.getElementById('resumeOutput').innerHTML;

// Copy content to hidden div
const printSection = document.getElementById('printableResume');
printSection.innerHTML = resumeContent;

// Show the section, print, then hide it again
printSection.style.display = "block";
window.print();
// printSection.style.display = "none";
}
