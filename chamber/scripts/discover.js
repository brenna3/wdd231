const discoverGrid = document.getElementById('discover-grid');

const discoverItems = [
  {
    title: "Columbia Point Golf Course",
    image: "https://www.playcolumbiapoint.com/images/golf-course.jpg",
    address: "225 Columbia Point Dr, Richland, WA",
    description: "An 18-hole championship golf course along the Columbia River, offering scenic views and challenging play for all skill levels.",
    url: "https://www.playcolumbiapoint.com/"
  },
  {
    title: "Badger Mountain Hiking Trail",
    image: "https://example.com/badger-mountain.jpg",
    address: "525 Queensgate Dr, Richland, WA",
    description: "A popular local trail that offers a moderately challenging hike with panoramic views of the Tri-Cities from the summit.",
    url: "https://www.bing.com/search?q=badger+mountain+trail"
  },
  {
    title: "Edgar Brown Stadium",
    image: "https://example.com/edgar-brown.jpg",
    address: "1611 W Sylvester St, Pasco, WA",
    description: "A well-known stadium in the heart of Pasco used for high school football, track, and community events.",
    url: "https://www.mapquest.com/us/washington/edgar-brown-memorial-stadium-265865565"
  },
  {
    title: "Howard Amon Park",
    image: "https://example.com/howard-amon-park.jpg",
    address: "500 Amon Park Dr, Richland, WA",
    description: "Located along the riverfront, this park features walking paths, picnic areas, a playground, boat launch, and seasonal events.",
    url: "https://www.visittri-cities.com/heritage/howard-amon-park/"
  },
  {
    title: "Drumhellers Restaurant",
    image: "https://example.com/drumhellers.jpg",
    address: "530 Columbia Point Dr, Richland, WA",
    description: "A fine dining experience offering locally inspired dishes with beautiful waterfront views of the Columbia River.",
    url: "https://lodgeatcolumbiapoint.com/drumhellers-food-drink/"
  },
  {
    title: "The Hub Food Truck Pod",
    image: "https://example.com/hub-food-truck.jpg",
    address: "201 N Edison St, Kennewick, WA",
    description: "A rotating collection of local food trucks serving diverse cuisines in a family-friendly outdoor space with picnic seating and live music.",
    url: "https://thehubkennewick.com/"
  },
  {
    title: "Memorial Pool & Waterpark",
    image: "https://example.com/memorial-pool.jpg",
    address: "1520 W Shoshone St, Pasco, WA",
    description: "A public aquatic center with swimming pools, splash pads, slides, and summer recreation programs for all ages.",
    url: "https://www.pasco-wa.gov/505/Aquaticsp"
  },
  {
    title: "Columbia Basin College",
    image: "https://example.com/columbia-basin-college.jpg",
    address: "2600 N 20th Ave, Pasco, WA",
    description: "A leading community college offering academic, technical, and workforce training programs that serve the region's growing educational needs.",
    url: "https://www.columbiabasin.edu/"
  }
];

// Create cards and add them to the container
discoverItems.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('discover-card');  // style this class in your CSS

  card.innerHTML = `
    <a href="${item.url}" target="_blank" rel="noopener">
      <img src="${item.image}" alt="${item.title}" />
    </a>
    <h3>${item.title}</h3>
    <p><strong>Address:</strong> ${item.address}</p>
    <p>${item.description}</p>
  `;

  discoverGrid.appendChild(card);
});
