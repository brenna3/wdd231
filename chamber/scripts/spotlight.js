const spotlightContainer = document.getElementById('spotlight-cards');

// Member data
const members = [
  {
    name: "Tri-City Financial Advisors",
    address: "100 Main Street, Tri-Cities",
    phone: "604-555-0198",
    website: "https://tricofinancial.ca",
    membership: "Gold",
    description: "Providing expert financial planning and investment strategies for families and small businesses.",
    image: "images/finance.jpg",
    alt: "Logo of Tri-City Financial Advisors"
  },
  {
    name: "Evergreen Landscaping",
    address: "224 Greenway Blvd, Tri-Cities",
    phone: "604-555-2234",
    website: "https://evergreenlandscaping.ca",
    membership: "Silver",
    description: "Eco-friendly landscaping, garden design, and maintenance services for residential and commercial clients.",
    image: "images/landscaping.jpg",
    alt: "Logo of Evergreen Landscaping"
  },
  {
    name: "WestCoast Tech Solutions",
    address: "15 Innovation Drive, Tri-Cities",
    phone: "604-555-7890",
    website: "https://westcoasttech.ca",
    membership: "Gold",
    description: "Offering cutting-edge IT support, cybersecurity, and software development solutions.",
    image: "images/tech-solutions.jpg",
    alt: "Logo of WestCoast Tech Solutions"
  },
  {
    name: "Sweet Bean Café",
    address: "99 Brew Street, Tri-Cities",
    phone: "604-555-4321",
    website: "https://sweetbeancafe.ca",
    membership: "Bronze",
    description: "A cozy café serving locally roasted coffee, fresh pastries, and community vibes.",
    image: "images/coffee.jpg",
    alt: "Logo of Sweet Bean Café"
  },
  {
    name: "Mountainview Real Estate",
    address: "350 Summit Ave, Tri-Cities",
    phone: "604-555-2981",
    website: "https://mountainviewhomes.ca",
    membership: "Gold",
    description: "Helping families find their perfect homes in the Tri-Cities for over 25 years.",
    image: "images/real-estate.jpg",
    alt: "Logo of Mountainview Real Estate"
  },
  {
    name: "Gymnastics Academy",
    address: "400 Summit Ave, Tri-Cities",
    phone: "604-555-2981",
    website: "https://mcga.com",
    membership: "Gold",
    description: "Achieveing gymnastic goals for 20 years.",
    image: "images/gymnastic.jpg",
    alt: "Logo of Gymnastics Academy"
  },
  {
    name: "Redbull Love",
    address: "500 Summit Ave, Tri-Cities",
    phone: "604-555-2981",
    website: "https://RedbullLove.com",
    membership: "Gold",
    description: "Tons of drinks to choose from! We sell redbulls, lotus, and coffee.",
    image: "images/redbull.jpg",
    alt: "Logo of Redbull Love"
  }
];

// Filter Gold and Silver members
const spotlightCandidates = members.filter(member =>
  member.membership === "Gold" || member.membership === "Silver"
);

// Shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle and pick 2–3 members
shuffleArray(spotlightCandidates);
const selectedSpotlights = spotlightCandidates.slice(0, 3);

// Create cards
selectedSpotlights.forEach(member => {
  const card = document.createElement('div');
  card.classList.add('member-card');
  card.innerHTML = `
    <img src="${member.image}" alt="${member.alt}">
    <h3>${member.name}</h3>
    <p>${member.address}</p>
    <p>${member.phone}</p>
    <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
    <p>Membership Level: ${member.membership}</p>
    <p>${member.description}</p>
  `;
  spotlightContainer.appendChild(card);
});