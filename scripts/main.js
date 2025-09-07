// Toggle navigation menu
document.getElementById('menuToggle').addEventListener('click', () => {
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('open');
});

// Set year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;