let sportCodeInput = document.getElementById('sport-code');
for (let i = 0; i < sportCodes.length; i++) {
    let option = document.createElement('option');
    option.setAttribute('value', sportCodes[i].slice(0, 3));
    option.innerHTML = sportCodes[i];
    sportCodeInput.appendChild(option);
}

let uniState = false;
let sportState = false;

function revealForm(name) {
    let sportsContainer = document.getElementById('sportsContainer');
    let uniContainer = document.getElementById('uniContainer');
    let sportsBtn = document.getElementById('athletics-btn');
    let uniBtn = document.getElementById('university-btn');
    switch (name) {
        case 'uni':
            uniState = true;
            sportState = false;
            sportsContainer.style.display = 'none';
            uniContainer.style.display = 'block';
            sportsBtn.removeAttribute('class');
            sportsBtn.setAttribute('class', 'btn btn-outline-warning w-25');
            uniBtn.removeAttribute('class');
            uniBtn.setAttribute('class', 'btn btn-outline-warning w-25 active');
            break;
        case 'sport':
            uniState = false;
            sportState = true;
            sportsContainer.style.display = 'block';
            uniContainer.style.display = 'none';
            sportsBtn.removeAttribute('class');
            sportsBtn.setAttribute('class', 'btn btn-outline-warning w-25 active');
            uniBtn.removeAttribute('class');
            uniBtn.setAttribute('class', 'btn btn-outline-warning w-25');
            break;
        default:
            break;
    }
}

let dueDateInput = document.getElementById('due-date');
let campaignNameInput = document.getElementById('campaign-name');
let projectNameAthleticsInput = document.getElementById('project-name-athletics');
let projectNameAlumniInput = document.getElementById('project-name-alumni');
let athleticsSubmitBtn = document.getElementById('athletics-submit-btn');
let alumniSubmitBtn = document.getElementById('sport-submit-btn');

var selectedDate = "";
var sportCode = "";
var projectName = "";
var campaignName = "";

dueDateInput.addEventListener("focusout", () => {
    if (dueDateInput.value == "") {
        dueDateInput.removeAttribute('class');
        dueDateInput.setAttribute('class', 'form-control is-invalid');
    } else {
        var dateValue = dueDateInput.value;
        selectedDate = `${dateValue.slice(0,2)}${dateValue.slice(5,7)}${dateValue.slice(8)}`;
        console.log(selectedDate);
        dueDateInput.removeAttribute('class');
        dueDateInput.setAttribute('class', 'form-control is-valid');
    }
});

projectNameAthleticsInput.addEventListener('focusout', () => {
    if (projectNameAthleticsInput.value.length == "") {
        projectNameAthleticsInput.removeAttribute('class');
        projectNameAthleticsInput.setAttribute('class', 'form-control is-invalid');
    } else {
        projectName = projectNameAthleticsInput.value;
        console.log(projectName);
        projectNameAthleticsInput.removeAttribute('class');
        projectNameAthleticsInput.setAttribute('class', 'form-control is-valid');
    }
});

projectNameAlumniInput.addEventListener('focusout', () => {
    if (projectNameAlumniInput.value.length == "") {
        projectNameAlumniInput.removeAttribute('class');
        projectNameAlumniInput.setAttribute('class', 'form-control is-invalid');
    } else {
        projectName = projectNameAlumniInput.value;
        console.log(projectName);
        projectNameAlumniInput.removeAttribute('class');
        projectNameAlumniInput.setAttribute('class', 'form-control is-valid');
    }
});

campaignNameInput.addEventListener('focusout', () => {
    if (campaignNameInput.value.length == "") {
        campaignNameInput.removeAttribute('class');
        campaignNameInput.setAttribute('class', 'form-control is-invalid');
    } else {
        campaignName = campaignNameInput.value;
        console.log(campaignName);
        campaignNameInput.removeAttribute('class');
        campaignNameInput.setAttribute('class', 'form-control is-valid');
    }
});


let form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault();


    if (sportState) {
        if (validateAthletics()) {
            let folderName = `${selectedDate} ASU ${sportCodeInput.value} ${projectName}`
            document.getElementById('result-container').style.display = 'block';
            document.getElementById('result-text').innerText = folderName;
            document.getElementById('parent-folder').innerHTML = '<span class="material-icons">folder_open</span>' + ' ' + folderName;
            document.getElementById('final-folder').innerHTML = '<span class="material-icons">folder</span>' + ' ' + folderName + ' FINAL';
            document.getElementById('v1-file').innerHTML = '<span class="material-icons">description</span>' + ' ' + folderName + ' V1.ext'
            document.getElementById('final-file').innerHTML = '<span class="material-icons">description</span>' + ' ' + folderName + ' FINAL.ext'
        } else {
            document.getElementById('result-container').style.display = 'none';
        }
    } else if (uniState) {
        if (validateAlumni()) {
            let folderName = `${selectedDate} ASU Alumni ${campaignName} ${projectName}`;
            document.getElementById('result-container').style.display = 'block';
            document.getElementById('result-text').innerText = folderName;
            document.getElementById('parent-folder').innerHTML = '<span class="material-icons">folder_open</span>' + ' ' + folderName;
            document.getElementById('final-folder').innerHTML = '<span class="material-icons">folder</span>' + ' ' + folderName + ' FINAL';
            document.getElementById('v1-file').innerHTML = '<span class="material-icons">description</span>' + ' ' + folderName + ' V1.ext'
            document.getElementById('final-file').innerHTML = '<span class="material-icons">description</span>' + ' ' + folderName + ' FINAL.ext'
        } else {
            document.getElementById('result-container').style.display = 'none';
        }
    }
})

function validateAthletics() {
    var valid = true;

    if (dueDateInput.value === '') {
        dueDateInput.removeAttribute('class');
        dueDateInput.setAttribute('class', 'form-control is-invalid');
        valid = false;
    } else {
        var dateValue = dueDateInput.value;
        selectedDate = `${dateValue.slice(0,2)}${dateValue.slice(5,7)}${dateValue.slice(8)}`;
        console.log(selectedDate);
        dueDateInput.removeAttribute('class');
        dueDateInput.setAttribute('class', 'form-control is-valid');
    }

    if (projectNameAthleticsInput.value.length == "") {
        projectNameAthleticsInput.removeAttribute('class');
        projectNameAthleticsInput.setAttribute('class', 'form-control is-invalid');
        valid = false;
    } else {
        projectName = projectNameAthleticsInput.value;
        console.log(projectName);
        projectNameAthleticsInput.removeAttribute('class');
        projectNameAthleticsInput.setAttribute('class', 'form-control is-valid');
    }

    return valid;
}

function validateAlumni() {
    let valid = true;

    if (dueDateInput.value === "") {
        dueDateInput.removeAttribute('class');
        dueDateInput.setAttribute('class', 'form-control is-invalid');
        valid = false;
    } else {
        var dateValue = dueDateInput.value;
        selectedDate = `${dateValue.slice(0,2)}${dateValue.slice(5,7)}${dateValue.slice(8)}`;
        console.log(selectedDate);
        dueDateInput.removeAttribute('class');
        dueDateInput.setAttribute('class', 'form-control is-valid');
    }

    if (projectNameAlumniInput.value.length == "") {
        projectNameAlumniInput.removeAttribute('class');
        projectNameAlumniInput.setAttribute('class', 'form-control is-invalid');
        valid = false;
    } else {
        projectName = projectNameAlumniInput.value;
        console.log(projectName);
        projectNameAlumniInput.removeAttribute('class');
        projectNameAlumniInput.setAttribute('class', 'form-control is-valid');
    }

    if (campaignNameInput.value.length == "") {
        campaignNameInput.removeAttribute('class');
        campaignNameInput.setAttribute('class', 'form-control is-invalid');
        valid = false;
    } else {
        campaignName = campaignNameInput.value;
        console.log(projectName);
        campaignNameInput.removeAttribute('class');
        campaignNameInput.setAttribute('class', 'form-control is-valid');
    }

    return valid;
}



let copyBtn = document.getElementById('copy-btn');
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('result-text').innerText);
    copyBtn.style.backgroundColor = '#ffc107';
    copyBtn.style.color = '#212121';
    setTimeout(() => {
        copyBtn.style.backgroundColor = '#1F2226';
        copyBtn.style.color = '#f8f9fa';
    }, 250);
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    console.log('bruh');
    await new Promise(r => setTimeout(r, 20000));
}