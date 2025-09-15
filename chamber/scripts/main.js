document.addEventListener('DOMContentLoaded', () => {
  const membersSection = document.getElementById('members');
  const gridBtn = document.getElementById('gridViewBtn');
  const listBtn = document.getElementById('listViewBtn');

  // Toggle between grid and list view
  gridBtn.addEventListener('click', () => {
    membersSection.classList.add('grid-view');
    membersSection.classList.remove('list-view');
    gridBtn.disabled = true;
    listBtn.disabled = false;
  });

  listBtn.addEventListener('click', () => {
    membersSection.classList.add('list-view');
    membersSection.classList.remove('grid-view');
    listBtn.disabled = true;
    gridBtn.disabled = false;
  });

  // Set last modified date and current year
  document.getElementById('lastModified').textContent = document.lastModified;
  document.getElementById('copyrightYear').textContent = new Date().getFullYear();
});