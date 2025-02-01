const logoutButton = document.getElementById('logout-button');
const logoutModal = document.getElementById('logout-modal');
const cancelLogoutButton = document.getElementById('cancel-logout');
const confirmLogoutButton = document.getElementById('confirm-logout');

const viewCVButton = document.getElementById('view-cv-button');
const viewFlazzButton = document.getElementById('view-flazz-button');
const viewCVModal = document.getElementById('view-cv-modal');
const viewFlazzModal = document.getElementById('view-flazz-modal');
const closeCVButton = document.getElementById('close-cv');
const closeFlazzButton = document.getElementById('close-flazz');

const editTeamNameButton = document.getElementById('edit-team-name');
const teamNameInput = document.getElementById('team-name');
const notification = document.getElementById('notification');

const viewMemberButton = document.getElementById('view-member-button');
const viewMemberModal = document.getElementById('view-member-modal');
const closeMemberButton = document.getElementById('close-member');

const viewMemberCVButton = document.getElementById('view-member-cv');
const viewMemberFlazzButton = document.getElementById('view-member-flazz');
const viewMemberCVModal = document.getElementById('view-member-cv-modal');
const viewMemberFlazzModal = document.getElementById('view-member-flazz-modal');
const closeMemberCVButton = document.getElementById('close-member-cv');
const closeMemberFlazzButton = document.getElementById('close-member-flazz');
const memberModalTitle = document.getElementById('member-modal-title');
const memberCVModalTitle = document.getElementById('member-cv-modal-title');
const memberCVName = document.getElementById('member-cv-name');
const memberCVTitle = document.getElementById('member-cv-title');
const memberFlazzModalTitle = document.getElementById('member-flazz-modal-title')
const memberFlazzTitle = document.getElementById('member-flazz-title')

const memberNameInput = document.getElementById('member-name');
const memberBirthPlaceInput = document.getElementById('member-birth-place');
const memberBirthDateInput = document.getElementById('member-birth-date');
const memberCVFileInput = document.getElementById('member-cv-file');
const memberFlazzFileInput = document.getElementById('member-flazz-file');

const memberCVFilename = document.getElementById('member-cv-filename');
const memberFlazzFilename = document.getElementById('member-flazz-filename');
const saveMemberDataButton = document.getElementById('save-member-data');

const errorMemberName = document.getElementById('error-member-name');
const errorMemberBirthPlace = document.getElementById('error-member-birth-place');
const errorMemberBirthDate = document.getElementById('error-member-birth-date');
const errorMemberCV = document.getElementById('error-member-cv');
const errorMemberFlazz = document.getElementById('error-member-flazz');

const successNotification = document.getElementById('success-notification');
const errorNotification = document.getElementById('error-notification');
const successMemberNumber = document.getElementById('success-member-number');
const nextMemberButton = document.getElementById('next-member');
const prevMemberButton = document.getElementById('prev-member');

let currentMember = 1;
const memberData = {
    1: {
        name: 'Abraham Lincoln',
        birthPlace: 'Jakarta',
        birthDate: '10 August 1920',
        cv: '',
        flazz: ''
    },
    2: {
        name: '',
        birthPlace: '',
        birthDate: '',
        cv: '',
        flazz: ''
    },
    3: {
        name: '',
        birthPlace: '',
        birthDate: '',
        cv: '',
        flazz: ''
    },
    4: {
        name: '',
        birthPlace: '',
        birthDate: '',
        cv: '',
        flazz: ''
    }
};

logoutButton.addEventListener('click', () => {
    logoutModal.style.display = 'block';
});

cancelLogoutButton.addEventListener('click', () => {
    logoutModal.style.display = 'none';
});

confirmLogoutButton.addEventListener('click', () => {
   
    alert('You have been logged out!'); 
});

viewCVButton.addEventListener('click', () => {
    viewCVModal.style.display = 'block';
});

viewFlazzButton.addEventListener('click', () => {
    viewFlazzModal.style.display = 'block';
});

closeCVButton.addEventListener('click', () => {
    viewCVModal.style.display = 'none';
});

closeFlazzButton.addEventListener('click', () => {
    viewFlazzModal.style.display = 'none';
});

editTeamNameButton.addEventListener('click', () => {
    if (teamNameInput.hasAttribute('readonly')) {
        teamNameInput.removeAttribute('readonly');
        teamNameInput.focus();
    } else {
        teamNameInput.setAttribute('readonly', '');
        showNotification();
    }
});

function showNotification() {
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000); 
}

viewMemberButton.addEventListener('click', () => {
    currentMember = 1;
    loadMemberData(currentMember);
    viewMemberModal.style.display = 'block';
});

closeMemberButton.addEventListener('click', () => {
    viewMemberModal.style.display = 'none';
});

viewMemberCVButton.addEventListener('click', () => {
    viewMemberModal.style.display = 'none';
    viewMemberCVModal.style.display = 'block';
    memberCVModalTitle.textContent = `Member ${currentMember} CV`;
    if(currentMember == 1){
        memberCVName.textContent = 'Abraham Lincoln';
    } else{
        memberCVName.textContent = memberData[currentMember].name;
    }
    memberCVTitle.textContent = "CV"
});

viewMemberFlazzButton.addEventListener('click', () => {
    viewMemberModal.style.display = 'none';
    viewMemberFlazzModal.style.display = 'block';
    memberFlazzModalTitle.textContent = `Member ${currentMember} Flazz Card`;
    memberFlazzTitle.textContent = "Flazz Card"
});

closeMemberCVButton.addEventListener('click', () => {
    viewMemberCVModal.style.display = 'none';
});

closeMemberFlazzButton.addEventListener('click', () => {
    viewMemberFlazzModal.style.display = 'none';
});

function loadMemberData(memberNumber) {
    const member = memberData[memberNumber];
    memberNameInput.value = member.name;
    memberBirthPlaceInput.value = member.birthPlace;
    memberBirthDateInput.value = member.birthDate;
    memberCVFilename.value = member.cv;
    memberFlazzFilename.value = member.flazz;
    memberModalTitle.textContent = `Member ${memberNumber}`;
    resetFileInput(memberCVFileInput);
    resetFileInput(memberFlazzFileInput);
    resetErrorMessages()
    if (memberNumber === 1) {
        memberNameInput.setAttribute('readonly', '');
        memberBirthPlaceInput.setAttribute('readonly', '');
        memberBirthDateInput.setAttribute('readonly', '');
        viewMemberCVButton.style.display = 'block';
        viewMemberFlazzButton.style.display = 'block';
        saveMemberDataButton.style.display = 'none'; 
    } else {
        memberNameInput.removeAttribute('readonly');
        memberBirthPlaceInput.removeAttribute('readonly');
        memberBirthDateInput.removeAttribute('readonly');
        viewMemberCVButton.style.display = 'none';
        viewMemberFlazzButton.style.display = 'none';
        saveMemberDataButton.style.display = 'block';
    }
}

nextMemberButton.addEventListener('click', () => {
    currentMember = (currentMember % 4) + 1; 
    loadMemberData(currentMember);
});

prevMemberButton.addEventListener('click', () => {
    currentMember = currentMember === 1 ? 4 : currentMember - 1;
    loadMemberData(currentMember);
});

function showSuccessNotification(memberNumber) {
    successMemberNumber.textContent = memberNumber;
    successNotification.style.display = 'block';
    setTimeout(() => {
        successNotification.style.display = 'none';
    }, 3000);
}

function showErrorNotification(message) {
    errorNotification.textContent = message;
    errorNotification.style.display = 'block';
    setTimeout(() => {
        errorNotification.style.display = 'none';
    }, 3000);
}

function isValidFileType(file, allowedTypes) {
    if (!file) return false;
    const fileType = file.type;
    return allowedTypes.includes(fileType);
}


memberCVFileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        memberCVFilename.value = file.name;
    } else {
        memberCVFilename.value = '';
    }
});


memberFlazzFileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        memberFlazzFilename.value = file.name;
    } else {
        memberFlazzFilename.value = '';
    }
});

saveMemberDataButton.addEventListener('click', () => {
    let isValid = true;
    
    if (!memberNameInput.value.trim()) {
        errorMemberName.textContent = '*Please enter a name';
        errorMemberName.style.display = 'block';
        isValid = false;
        memberNameInput.style.border = '1px solid #dc3545';
    } else {
        errorMemberName.style.display = 'none';
        memberNameInput.style.border = '1px solid #ccc';
    }

    
    if (!memberBirthPlaceInput.value.trim()) {
        errorMemberBirthPlace.textContent = '*Please enter a birth place';
        errorMemberBirthPlace.style.display = 'block';
        isValid = false;
        memberBirthPlaceInput.style.border = '1px solid #dc3545';
    } else {
        errorMemberBirthPlace.style.display = 'none';
        memberBirthPlaceInput.style.border = '1px solid #ccc';
    }

    
    if (!memberBirthDateInput.value.trim()) {
        errorMemberBirthDate.textContent = '*Please enter a birth date';
        errorMemberBirthDate.style.display = 'block';
        isValid = false;
        memberBirthDateInput.style.border = '1px solid #dc3545';
    } else {
        errorMemberBirthDate.style.display = 'none';
        memberBirthDateInput.style.border = '1px solid #ccc';
    }

    
    const allowedCVTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (memberCVFileInput.files.length > 0 && !isValidFileType(memberCVFileInput.files[0], allowedCVTypes)) {
        errorMemberCV.textContent = '*File not supported';
        errorMemberCV.style.display = 'block';
        isValid = false;
        memberCVFilename.style.border = '1px solid #dc3545';
    } else {
        errorMemberCV.style.display = 'none';
        memberCVFilename.style.border = '1px solid #ccc';
    }

    const allowedFlazzTypes = ['image/jpeg', 'image/png'];
    if (memberFlazzFileInput.files.length > 0 && !isValidFileType(memberFlazzFileInput.files[0], allowedFlazzTypes)) {
        errorMemberFlazz.textContent = '*File not supported';
        errorMemberFlazz.style.display = 'block';
        isValid = false;
        memberFlazzFilename.style.border = '1px solid #dc3545';
    } else {
        errorMemberFlazz.style.display = 'none';
        memberFlazzFilename.style.border = '1px solid #ccc';
    }
    
    if (isValid) {
        memberData[currentMember].name = memberNameInput.value;
        memberData[currentMember].birthPlace = memberBirthPlaceInput.value;
        memberData[currentMember].birthDate = memberBirthDateInput.value;
        if (memberCVFileInput.files.length > 0) {
            memberData[currentMember].cv = memberCVFileInput.files[0].name;
        }
        if (memberFlazzFileInput.files.length > 0) {
            memberData[currentMember].flazz = memberFlazzFileInput.files[0].name;
        }

        showSuccessNotification(currentMember);
        viewMemberModal.style.display = 'none';
        viewMemberCVButton.style.display = 'block';
        viewMemberFlazzButton.style.display = 'block';
        
        memberNameInput.setAttribute('readonly', '');
        memberBirthPlaceInput.setAttribute('readonly', '');
        memberBirthDateInput.setAttribute('readonly', '');
    } else{
        showErrorNotification("Data belum lengkap atau format file tidak sesuai!")
    }
});


const editMemberNameButton = document.getElementById('edit-member-name');
const editMemberBirthPlaceButton = document.getElementById('edit-member-birth-place');
const editMemberBirthDateButton = document.getElementById('edit-member-birth-date')

editMemberNameButton.addEventListener('click', () => {
    memberNameInput.removeAttribute('readonly');
    memberNameInput.focus();
});

editMemberBirthPlaceButton.addEventListener('click', () => {
    memberBirthPlaceInput.removeAttribute('readonly');
    memberBirthPlaceInput.focus();
});

editMemberBirthDateButton.addEventListener('click', () => {
    if (currentMember !== 1) {
        memberBirthDateInput.removeAttribute('readonly');
        memberBirthDateInput.focus();
    }
});

function resetFileInput(inputField) {
    inputField.value = ''; 
    if (inputField.type === 'file') {
        const fieldName = inputField.id.replace('-file', '-filename'); 
        const filenameField = document.getElementById(fieldName);
        if (filenameField) {
            filenameField.value = 'No file chosen'; 
        }
    }
}

function resetErrorMessages() {
    errorMemberName.style.display = 'none';
    errorMemberBirthPlace.style.display = 'none';
    errorMemberBirthDate.style.display = 'none';
    errorMemberCV.style.display = 'none';
    errorMemberFlazz.style.display = 'none';

    memberNameInput.style.border = '1px solid #ccc';
    memberBirthPlaceInput.style.border = '1px solid #ccc';
    memberBirthDateInput.style.border = '1px solid #ccc';
    memberCVFilename.style.border = '1px solid #ccc';
    memberFlazzFilename.style.border = '1px solid #ccc';
}


const daysTag = document.querySelector(".days");
const currentDate = document.querySelector(".current-date");
const prevNextIcon = document.querySelectorAll(".calendar-navigation span");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}" data-date="${currYear}-${currMonth + 1}-${i}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;

    attachDayClickListeners();
}
renderCalendar();

function attachDayClickListeners() {
    const days = daysTag.querySelectorAll('li');
    days.forEach(day => {
        day.addEventListener('click', () => {
            const selectedDate = day.dataset.date;
            memberBirthDateInput.value = selectedDate;
            calendar.style.display = 'none';
            memberBirthDateInput.style.border = '1px solid #ccc';
            errorMemberBirthDate.style.display = 'none';
        });
    });
}

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "calendar-prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});

editMemberBirthDateButton.addEventListener('click', () => {
    if (currentMember !== 1) {
        const calendar = document.getElementById('calendar');
        calendar.style.display = calendar.style.display === 'block' ? 'none' : 'block';
    }
});