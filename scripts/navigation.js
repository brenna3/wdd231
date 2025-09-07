document.getElementById('menuToggle').addEventListener('click', () => {
  const menu = document.getElementById('navMenu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});