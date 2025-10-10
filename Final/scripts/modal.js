export function showModal(data) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');

  modalBody.innerHTML = `
    <h2>${data.name}</h2>
    <p>${data.details}</p>
    <p><strong>Duration:</strong> ${data.duration}</p>
  `;
  modal.classList.remove('hidden');

  document.getElementById('closeModal').onclick = () => {
    modal.classList.add('hidden');
  };
}
