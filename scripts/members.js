document.addEventListener('DOMContentLoaded', () => {
  const membersSection = document.getElementById('members');
  const gridBtn = document.getElementById('gridViewBtn');
  const listBtn = document.getElementById('listViewBtn');

  async function fetchMembers() {
    try {
      const response = await fetch('data/members.json');
      const members = await response.json();
      displayMembers(members);
    } catch (error) {
      console.error('Error loading members:', error);
      membersSection.innerHTML = '<p>Error loading member data.</p>';
    }
  }

  function displayMembers(members) {
    membersSection.innerHTML = '';

    members.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('member-card');

      card.innerHTML = `
        <img src="images/${member.image}" alt="Logo of ${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p>Membership Level: ${member.membershipLevel}</p>
      `;

      membersSection.appendChild(card);
    });
  }

  gridBtn.addEventListener('click', () => {
    membersSection.classList.add('grid-view');
    membersSection.classList.remove('list-view');
  });

  listBtn.addEventListener('click', () => {
    membersSection.classList.add('list-view');
    membersSection.classList.remove('grid-view');
  });

  fetchMembers();
});