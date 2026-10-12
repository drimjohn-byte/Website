// Central content and contact settings. Edit here rather than in components.

export const site = {
  name: "WESTWARD",
  descriptor: "Property Marketing Agency",
  tagline: "Premium marketing for property professionals.",
  description:
    "WESTWARD is a property marketing agency for estate agents and developers on the South African West Coast, from Velddrif to Langebaan.",

  // TODO: replace with the WhatsApp Business number in international format, digits only (e.g. 27821234567).
  whatsappNumber: "27000000000",
  // TODO: replace with the real address before launch.
  email: "hello@example.com",
  instagram: "",
  linkedin: "",
};

export const towns = ["Velddrif", "Langebaan", "Paternoster", "Saldanha", "Yzerfontein"];

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Approach", href: "/#approach" },
  { label: "Contact", href: "/#contact" },
];

export const audiences = [
  {
    title: "Estate agents",
    body: "Listings presented with the care of an editorial feature, and a personal brand that sellers remember when they choose who to call.",
  },
  {
    title: "Developers",
    body: "Launch campaigns that position a development before the first show day, then keep enquiries moving through every release phase.",
  },
];

export const services = [
  {
    title: "Brand Strategy",
    body: "Positioning, messaging and visual identity for agencies and developments that need to stand apart in a small, competitive market.",
    includes: ["Market and competitor review", "Positioning and messaging", "Identity and brand guidelines"],
    image: "Architectural detail: textured plaster wall and stone, directional late light",
  },
  {
    title: "Property Marketing",
    body: "Complete listing campaigns, from the first photograph to the final enquiry, built around who is most likely to buy.",
    includes: ["Listing campaign planning", "Brochures and property websites", "Launch and show-day material"],
    image: "Modern coastal home exterior at golden hour, wide composition, negative space",
  },
  {
    title: "Content Creation",
    body: "Architectural photography, film and written copy that let a property speak for itself.",
    includes: ["Photography and aerial", "Property film and reels", "Listing and editorial copywriting"],
    image: "Interior: open living space toward the Atlantic, overcast natural light",
  },
  {
    title: "Digital Advertising",
    body: "Paid campaigns on Meta and Google, targeted to buyers and investors actively looking on the West Coast.",
    includes: ["Campaign setup and targeting", "Creative for each placement", "Monthly reporting"],
    image: "Detail of a weathered timber deck and dune grass, muted tones",
  },
  {
    title: "Lead Generation",
    body: "Funnels, landing pages and follow-up that turn attention into qualified conversations.",
    includes: ["Landing pages", "Lead forms and WhatsApp routing", "Enquiry tracking"],
    image: "Dusk view of a lit residence on the coast, moody sky",
  },
  {
    title: "Agent Brand Development",
    body: "A distinctive personal brand for agents who want sellers to choose them on reputation, not commission.",
    includes: ["Personal brand identity", "Portrait photography", "Social content direction"],
    image: "Editorial portrait of an agent in natural light, architectural backdrop",
  },
];

export const process = [
  { title: "Discover", body: "We learn the property, the market and the buyer before anything is made." },
  { title: "Position", body: "We decide what makes it distinctive and who needs to hear it." },
  { title: "Create", body: "Photography, film, copy and design, made to one standard." },
  { title: "Launch", body: "Campaigns go live across the channels your buyers actually use." },
  { title: "Refine", body: "We read the response and adjust until the right enquiries arrive." },
];

export const roles = ["Estate agent", "Agency principal", "Developer", "Other"];
