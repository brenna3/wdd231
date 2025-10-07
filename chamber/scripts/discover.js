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
