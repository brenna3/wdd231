const discoverGrid = document.getElementById('discover-grid');

fetch("data/discover.json")
  .then(response => response.json())
  .then(discoverItems => {
    discoverItems.forEach((item, index) => {
      const card = document.createElement('div');
      card.classList.add('discover-card');
      card.style.gridArea = `card${index + 1}`; // Apply grid area dynamically

      card.innerHTML = `
        <a href="${item.url}" target="_blank" rel="noopener">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
        </a>
        <h3>${item.title}</h3>
        <p><strong>Address:</strong> ${item.address}</p>
        <p>${item.description}</p>
      `;

      discoverGrid.appendChild(card);
    });
  });
  // Visitor Message Setup
const visitMessage = document.getElementById("visit-message");

// Get current time
const now = Date.now();

// Get last visit from localStorage
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
  // First visit
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const msInDay = 1000 * 60 * 60 * 24;
  const daysBetween = Math.floor((now - lastVisit) / msInDay);

  if (daysBetween < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else if (daysBetween === 1) {
    visitMessage.textContent = "You last visited 1 day ago.";
  } else {
    visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
  }
}

// Update the last visit time
localStorage.setItem("lastVisit", now);

