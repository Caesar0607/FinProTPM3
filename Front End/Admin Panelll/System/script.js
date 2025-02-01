const searchInput = document.getElementById('search-input');
const filterButton = document.getElementById('filter-button');
const filterOptions = document.getElementById('filter-options');
const teamTable = document.getElementById('team-table');
const teamRows = teamTable.querySelectorAll('tbody tr');
const teamDetails = document.getElementById('team-details');
const teamNameElement = document.getElementById('team-name');
const teamLeaderElement = document.getElementById('team-leader');
const member1Element = document.getElementById('member-1');
const member2Element = document.getElementById('member-2');
const member3Element = document.getElementById('member-3');
const dateCreatedElement = document.getElementById('date-created');
const viewIcons = document.querySelectorAll('.view-icon');
const editPanel = document.getElementById('edit-panel');
const editTeamNameElement = document.getElementById('edit-team-name');
const editTeamLeaderInput = document.getElementById('edit-team-leader');
const editPlaceOfBirthInput = document.getElementById('edit-place-of-birth');
const editDateOfBirthInput = document.getElementById('edit-date-of-birth');
const editEmailAddressInput = document.getElementById('edit-email-address');
const editWhatsappNumberInput = document.getElementById('edit-whatsapp-number');
const editLineIdInput = document.getElementById('edit-line-id');
const editGithubIdInput = document.getElementById('edit-github-id');
const saveButton = document.getElementById('save-button');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notification-message');
const editIcons = document.querySelectorAll('.edit-icon');
const deleteIcons = document.querySelectorAll('.delete-icon');
const logoutButton = document.getElementById('logout-button');
const teamDataLink = document.getElementById('team-data-link');
const logoutConfirmation = document.getElementById('logout-confirmation');
const cancelLogoutButton = document.getElementById('cancel-logout');
const confirmLogoutButton = document.getElementById('confirm-logout');
const deleteConfirmation = document.getElementById('delete-confirmation');
const cancelDeleteButton = document.getElementById('cancel-delete');
const confirmDeleteButton = document.getElementById('confirm-delete');

const teamData = {
  "Team Jamey Does": {
    leader: "John Doe",
    member1: "Abraham Lincoln",
    member2: "Joe Biden",
    member3: "Obama",
    dateCreated: "25 December 2024, 14:20 PM",
    placeOfBirth: "Jakarta",
    dateOfBirth: "1990-12-25",
    emailAddress: "johndoe12@gmail.com",
    whatsappNumber: "0812542389221",
    lineId: "johndoe",
    githubId: "iamjohndoe"
  },
  "Team Dinomagma": {
    leader: "Jane Smith",
    member1: "Peter Jones",
    member2: "Alice Brown",
    member3: "David Wilson",
    dateCreated: "24 December 2024, 10:00 AM",
    placeOfBirth: "Jakarta",
    dateOfBirth: "1990-12-25",
    emailAddress: "johndoe12@gmail.com",
    whatsappNumber: "0812542389221",
    lineId: "johndoe",
    githubId: "iamjohndoe"
  },
  "Team KINOY": {
    leader: "Robert Johnson",
    member1: "Emily Davis",
    member2: "Michael White",
    member3: "Sarah Miller",
    dateCreated: "23 December 2024, 18:30 PM",
    placeOfBirth: "Jakarta",
    dateOfBirth: "1990-12-25",
    emailAddress: "johndoe12@gmail.com",
    whatsappNumber: "0812542389221",
    lineId: "johndoe",
    githubId: "iamjohndoe"
  },
  "Team HawaiiGamer": {
    leader: "William Lee",
    member1: "Elizabeth Taylor",
    member2: "James Wilson",
    member3: "Mary Johnson",
    dateCreated: "22 December 2024, 08:45 AM",
    placeOfBirth: "Jakarta",
    dateOfBirth: "1990-12-25",
    emailAddress: "johndoe12@gmail.com",
    whatsappNumber: "0812542389221",
    lineId: "johndoe",
    githubId: "iamjohndoe"
  },
  "Team PembantaiHackathon": {
    leader: "Richard Martin",
    member1: "Susan Anderson",
    member2: "Thomas Jackson",
    member3: "Karen White",
    dateCreated: "21 December 2024, 16:20 PM",
    placeOfBirth: "Jakarta",
    dateOfBirth: "1990-12-25",
    emailAddress: "johndoe12@gmail.com",
    whatsappNumber: "0812542389221",
    lineId: "johndoe",
    githubId: "iamjohndoe"
  },
  "Team DibantaiHackathon": {
    leader: "Charles Thomas",
    member1: "Patricia Martinez",
    member2: "Daniel Davis",
    member3: "Linda Jackson",
    dateCreated: "20 December 2024, 11:55 AM",
    placeOfBirth: "Jakarta",
    dateOfBirth: "1990-12-25",
    emailAddress: "johndoe12@gmail.com",
    whatsappNumber: "0812542389221",
    lineId: "johndoe",
    githubId: "iamjohndoe"
  },
  "Team N-Sum Dimension": {
    leader: "George Wilson",
    member1: "Margaret Anderson",
    member2: "Kenneth Thomas",
    member3: "Dorothy Martinez",
    dateCreated: "19 December 2024, 09:10 AM",
    placeOfBirth: "Jakarta",
    dateOfBirth: "1990-12-25",
    emailAddress: "johndoe12@gmail.com",
    whatsappNumber: "0812542389221",
    lineId: "johndoe",
    githubId: "iamjohndoe"
  },
  "Team GAMAC": {
    leader: "Edward Davis",
    member1: "Barbara Wilson",
    member2: "Ronald Martin",
    member3: "Laura Anderson",
    dateCreated: "18 December 2024, 14:45 PM",
    placeOfBirth: "Jakarta",
    dateOfBirth: "1990-12-25",
    emailAddress: "johndoe12@gmail.com",
    whatsappNumber: "0812542389221",
    lineId: "johndoe",
    githubId: "iamjohndoe"
  },
  "Team minecrafter": {
    leader: "Paul Thomas",
    member1: "Jennifer Jackson",
    member2: "Andrew White",
    member3: "Michelle Davis",
    dateCreated: "17 December 2024, 19:00 PM",
    placeOfBirth: "Jakarta",
    dateOfBirth: "1990-12-25",
    emailAddress: "johndoe12@gmail.com",
    whatsappNumber: "0812542389221",
    lineId: "johndoe",
    githubId: "iamjohndoe"
  },
  "Team MieAyamSedapEnakRasanya": {
    leader: "Steven Martin",
    member1: "Angela Martinez",
    member2: "Kevin Anderson",
    member3: "Melissa Thomas",
    dateCreated: "16 December 2024, 13:30 PM",
    placeOfBirth: "Jakarta",
    dateOfBirth: "1990-12-25",
    emailAddress: "johndoe12@gmail.com",
    whatsappNumber: "0812542389221",
    lineId: "johndoe",
    githubId: "iamjohndoe"
  }
};

let currentlyEditingTeam = null;
let currentlyDeletingTeam = null;

filterButton.addEventListener('click', () => {
    filterOptions.style.display = filterOptions.style.display === 'block' ? 'none' : 'block';
});

filterOptions.addEventListener('click', (event) => {
    const filterType = event.target.dataset.filter;
    sortTable(filterType);
});

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    filterTable(searchTerm);
});

function filterTable(searchTerm) {
    teamRows.forEach(row => {
        const teamName = row.querySelector('td:first-child').textContent.toLowerCase();
        if (teamName.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function sortTable(filterType) {
  const rowsArray = Array.from(teamRows);

  rowsArray.sort((a, b) => {
    const teamA = a.querySelector('td:first-child').textContent;
    const teamB = b.querySelector('td:first-child').textContent;

    if (filterType === 'asc') {
      return teamA.localeCompare(teamB);
    } else if (filterType === 'desc') {
      return teamB.localeCompare(teamA);
    } else if (filterType === 'newest') {
      const dateA = new Date(teamData[teamA].dateCreated);
      const dateB = new Date(teamData[teamB].dateCreated);
      return dateB - dateA; 
    }
  });

  const tbody = teamTable.querySelector('tbody');
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  rowsArray.forEach(row => {
    tbody.appendChild(row);
  });
}

viewIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const teamName = icon.dataset.team;
        const data = teamData[teamName];

        teamNameElement.textContent = "Team " + teamName;
        teamLeaderElement.textContent = data.leader;
        member1Element.textContent = data.member1;
        member2Element.textContent = data.member2;
        member3Element.textContent = data.member3;
        dateCreatedElement.textContent = data.dateCreated;

        teamDetails.classList.add('open');
    });
});
editIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const teamName = icon.dataset.team;
    const data = teamData[teamName];
    currentlyEditingTeam = teamName;

    editTeamNameElement.textContent = 'Editing Team ' + teamName;
    editTeamLeaderInput.value = data.leader;
    editPlaceOfBirthInput.value = data.placeOfBirth || '';
    editDateOfBirthInput.value = data.dateOfBirth || '';
    editEmailAddressInput.value = data.emailAddress;
    editWhatsappNumberInput.value = data.whatsappNumber;
    editLineIdInput.value = data.lineId;
    editGithubIdInput.value = data.githubId;

    editPanel.classList.add('open');
  });
});

saveButton.addEventListener('click', () => {
  if (currentlyEditingTeam) {
    teamData[currentlyEditingTeam].leader = editTeamLeaderInput.value;
    teamData[currentlyEditingTeam].placeOfBirth = editPlaceOfBirthInput.value;
    teamData[currentlyEditingTeam].dateOfBirth = editDateOfBirthInput.value;
    teamData[currentlyEditingTeam].emailAddress = editEmailAddressInput.value;
    teamData[currentlyEditingTeam].whatsappNumber = editWhatsappNumberInput.value;
    teamData[currentlyEditingTeam].lineId = editLineIdInput.value;
    teamData[currentlyEditingTeam].githubId = editGithubIdInput.value;

   
    if (teamDetails.classList.contains('open') && teamNameElement.textContent === "Team " + currentlyEditingTeam) {
      teamLeaderElement.textContent = editTeamLeaderInput.value;
    }

    
    teamRows.forEach(row => {
      if (row.querySelector('.view-icon').dataset.team === currentlyEditingTeam) {
        row.querySelector('td:first-child').textContent = currentlyEditingTeam;
      }
    });

    showNotification('Data updated successfully!', 'success');
    editPanel.classList.remove('open');
  }
});

function showNotification(message, type = 'success') {
  notificationMessage.textContent = message;
  notification.classList.add('show', `notification-${type}`);
  setTimeout(() => {
    notification.classList.remove('show', `notification-${type}`);
  }, 3000);
}


document.addEventListener('click', (event) => {
    if (!teamDetails.contains(event.target) && !event.target.classList.contains('view-icon') && !editPanel.contains(event.target) && !event.target.classList.contains('edit-icon')) {
        teamDetails.classList.remove('open');
        editPanel.classList.remove('open');
    }
});

logoutButton.addEventListener('click', () => {
    logoutConfirmation.classList.add('open');
});

cancelLogoutButton.addEventListener('click', () => {
    logoutConfirmation.classList.remove('open');
});

confirmLogoutButton.addEventListener('click', () => {
    window.location.href = "LandingPage.html"; 
});

teamDataLink.addEventListener('click', () => {
   
    window.location.href = "index.html"; 
});

deleteIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const teamName = icon.dataset.team;
    currentlyDeletingTeam = teamName;
    deleteConfirmation.classList.add('open');
  });
});

cancelDeleteButton.addEventListener('click', () => {
  deleteConfirmation.classList.remove('open');
  currentlyDeletingTeam = null;
});

confirmDeleteButton.addEventListener('click', () => {
  if (currentlyDeletingTeam) {
    
    delete teamData[currentlyDeletingTeam];

   
    teamRows.forEach(row => {
      if (row.querySelector('.view-icon').dataset.team === currentlyDeletingTeam) {
        row.remove();
      }
    });

 
    if (teamDetails.classList.contains('open') && teamNameElement.textContent === "Team " + currentlyDeletingTeam) {
      teamDetails.classList.remove('open');
    }

    showNotification('Data Deleted!', 'error');
    deleteConfirmation.classList.remove('open');
    currentlyDeletingTeam = null;
  }
});