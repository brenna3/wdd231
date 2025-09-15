const membersSection = document.getElementById('members');
const gridBtn = document.getElementById('gridViewBtn');
const listBtn = document.getElementById('listViewBtn');

async function fetchMembers() {
  try {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error('Error fetching members:', error);
  }
}

function displayMembers(members) {
  membersSection.innerHTML = ''; // clear previous content

  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('member-card');

    card.innerHTML = `
      <img src="images/${member.image}" alt="Logo of ${member.name}" />
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
      <p>Membership Level: ${member.membershipLevel}</p>
      <p>${member.description}</p>
    `;

    membersSection.appendChild(card);
  });
}

// Toggle grid/list
gridBtn.addEventListener('click', () => {
  membersSection.classList.add('grid-view');
  membersSection.classList.remove('list-view');
});

listBtn.addEventListener('click', () => {
  membersSection.classList.add('list-view');
  membersSection.classList.remove('grid-view');
});

// Display dates in footer
document.getElementById('lastModified').textContent = document.lastModified;
document.getElementById('copyrightYear').textContent = new Date().getFullYear();

// Initial fetch
fetchMembers();