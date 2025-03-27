function addSection(type) {
    let container = document.getElementById(`${type}-section`);
    let div = document.createElement('div');
    div.innerHTML = `<label>Heading: <input type="text" class="${type}-heading input-field"></label>
                     <label>Subheading: <input type="text" class="${type}-subheading input-field"></label>`;
    container.appendChild(div);
}

function addEducationExperience(type) {
    let container = document.getElementById(`${type}-section`);
    let div = document.createElement('div');
    div.innerHTML = `<label>Course: <input type="text" class="${type}-course input-field"></label>
                     <label>Institute: <input type="text" class="${type}-institute input-field"></label>
                     <label>Location: <input type="text" class="${type}-location input-field"></label>
                     <label>Duration (dd/mm/yy): <input type="text" class="${type}-duration input-field"></label>`;
    container.appendChild(div);
}

function updateResume() {
    document.getElementById('resume-name').innerText = document.getElementById('name').value;
    document.getElementById('resume-email').innerText = document.getElementById('email').value;
    document.getElementById('resume-links').innerHTML = document.getElementById('linkedin').value + ' | ' + document.getElementById('github').value;
    function updateSection(inputClass, resumeId, title) {
let inputs = document.querySelectorAll(`.${inputClass}`);
let section = document.getElementById(resumeId);
section.innerHTML = inputs.length > 0 ? `<h2>${title}</h2>` : ""; // Add title only if there's content

inputs.forEach(input => {
    if (input.value.trim() !== "") {
        let p = document.createElement('p');
        p.innerText = input.value;
        section.appendChild(p);
    }
});
}
function loadPhoto(event) {
    let output = document.getElementById('resume-photo');
    output.src = URL.createObjectURL(event.target.files[0]);
}
function loadPhoto(event) {
    let output = document.getElementById('resume-photo');
    output.src = URL.createObjectURL(event.target.files[0]);
}

// Update Education & Experience (with multiple fields)
function updateMultiFieldSection(type, resumeId, title) {
let courses = document.querySelectorAll(`.${type}-course`);
let institutes = document.querySelectorAll(`.${type}-institute`);
let locations = document.querySelectorAll(`.${type}-location`);
let durations = document.querySelectorAll(`.${type}-duration`);
let section = document.getElementById(resumeId);

section.innerHTML = courses.length > 0 ? `<h2>${title}</h2>` : ""; // Add title only if there's content

courses.forEach((course, index) => {
    if (course.value.trim() !== "") {
        let div = document.createElement('div');
        div.innerHTML = `<p><strong>${course.value}</strong> - ${institutes[index].value}, ${locations[index].value} (${durations[index].value})</p>`;
        section.appendChild(div);
    }
});
}
function loadPhoto(event) {
    let output = document.getElementById('resume-photo');
    output.src = URL.createObjectURL(event.target.files[0]);
}

updateMultiFieldSection("education", "resume-education", "Education");
updateMultiFieldSection("experience", "resume-experience", "Experience");

updateSection("achievements-heading", "resume-achievements", "Achievements");
updateSection("hobbies-heading", "resume-hobbies", "Hobbies & Interests");
updateSection("skills-heading", "resume-skills", "Skills");
updateSection("projects-heading", "resume-projects", "Projects");
updateSection("activities-heading", "resume-activities", "Activities");
}

function printResume() {
    // window.print();
    let resume = document.getElementById('resume').innerHTML;
let originalContent = document.body.innerHTML;

document.body.innerHTML = resume; // Replace full body content with only resume
window.print();
document.body.innerHTML = originalContent; 
}