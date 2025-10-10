import { showModal } from './modal.js';
import { savePreference, getPreference } from './storage.js';

const serviceContainer = document.getElementById('services-container');

async function loadServices() {
  try {
    const response = await fetch('./data/services.json');
    if (!response.ok) throw new Error('Network error');
    const services = await response.json();

    services.forEach(service => {
      const card = document.createElement('div');
      card.className = 'service-card';
      card.innerHTML = `
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <p><strong>Category:</strong> ${service.category}</p>
        <button class="info-btn" data-id="${service.id}">Learn More</button>
      `;
      serviceContainer.appendChild(card);
    });

    document.querySelectorAll('.info-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        const selected = services.find(s => s.id == id);
        showModal(selected);
      });
    });

  } catch (error) {
    serviceContainer.innerHTML = `<p>Error loading services: ${error.message}</p>`;
  }
}

loadServices();
