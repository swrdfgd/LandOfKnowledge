const infos = [
  "The human brain processes images 60,000 times faster than text.",
  "The speed of light is approximately 299,792 kilometers per second.",
  "There are more stars in the universe than grains of sand on Earth.",
  "The periodic table has 118 confirmed elements.",
  "Water expands when it freezes, unlike most substances."
];

const knowledgeLinks = [
  { name: "Khan Academy", url: "https://www.khanacademy.org" },
  { name: "TED-Ed", url: "https://ed.ted.com" },
  { name: "Coursera", url: "https://www.coursera.org" },
  { name: "NASA", url: "https://www.nasa.gov" },
  { name: "HowStuffWorks", url: "https://www.howstuffworks.com" }
];

const facts = [
  "Octopuses have three hearts.",
  "Honey never spoils. Archaeologists found 3,000-year-old honey in Egyptian tombs that was still edible.",
  "Bananas are berries, but strawberries aren’t.",
  "Sharks existed before trees.",
  "Wombat poop is cube-shaped."
];

const videos = [
  "https://www.youtube.com/embed/5MgBikgcWnY",
  "https://www.youtube.com/embed/O96fE1E-rf8",
  "https://www.youtube.com/embed/zkv-_LqTeQA",
  "https://www.youtube.com/embed/0NbBjNiw4tk",
  "https://www.youtube.com/embed/3g2jwW6r-9E"
];

// Set random informative text
document.getElementById('info').textContent =
  infos[Math.floor(Math.random() * infos.length)];

// Set random knowledge link
const link = knowledgeLinks[Math.floor(Math.random() * knowledgeLinks.length)];
document.getElementById('link-block').innerHTML = `<h3>Explore More:</h3><a href="${link.url}" target="_blank">${link.name}</a>`;

// Set random fact
document.getElementById('fact-block').innerHTML =
  `<h3>Did You Know?</h3><p>${facts[Math.floor(Math.random() * facts.length)]}</p>`;

// Set random video
document.getElementById('video-block').innerHTML =
  `<h3>Watch This:</h3><iframe width="100%" height="180" src="${videos[Math.floor(Math.random() * videos.length)]}" frameborder="0" allowfullscreen></iframe>`;
