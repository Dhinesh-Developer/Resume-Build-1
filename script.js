function addSkill() {
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter Skill";
    input.className = "form-control mb-2 skill";

    document.getElementById("skillsSection").appendChild(input);
}

function addProject() {
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter Project";
    input.className = "form-control mb-2 project";

    document.getElementById("projectSection").appendChild(input);
}

function generateResume() {
    let name = document.getElementById("name").value;
    let linkedin = document.getElementById("linkedin").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let education = document.getElementById("education").value;
    let achievements = document.getElementById("achievements").value;

    let skills = document.querySelectorAll(".skill");
    let skillList = "";
    skills.forEach(skill => {
        if (skill.value.trim() !== "") {
            skillList += `<li>${skill.value}</li>`;
        }
    });

    let projects = document.querySelectorAll(".project");
    let projectList = "";
    projects.forEach(project => {
        if (project.value.trim() !== "") {
            projectList += `<li>${project.value}</li>`;
        }
    });

    let resume = `
    <div class="resume-box">

        <h1 class="name">${name}</h1>

        <div class="contact">
            ${phone} | ${email} | 
            <a href="${linkedin}" target="_blank">${linkedin}</a>
        </div>

        <div class="section">
            <h4>Education</h4>
            <p>${education}</p>
        </div>

        <div class="section">
            <h4>Skills</h4>
            <ul>${skillList}</ul>
        </div>

        <div class="section">
            <h4>Projects</h4>
            <ul>${projectList}</ul>
        </div>

        <div class="section">
            <h4>Achievements</h4>
            <p>${achievements}</p>
        </div>

    </div>
    `;

    document.getElementById("output").innerHTML = resume;
}
 
function downloadPDF() {
    const element = document.getElementById("output");

    html2pdf()
        .set({
            margin: 0.5,
            filename: 'ATS_Resume.pdf',
            html2canvas: {
                scale: 2,
                scrollY: 0
            },
            jsPDF: {
                unit: 'in',
                format: 'a4',
                orientation: 'portrait'
            }
        })
        .from(element)
        .save();
}
function generateAndDownload() {
    generateResume();

    setTimeout(() => {
        downloadPDF();
    }, 700);
}