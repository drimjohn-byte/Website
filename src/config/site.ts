// Central content and contact settings. Edit here rather than in components.
// Anything marked TODO must be filled in before launch; the site shows a visible
// "to confirm" marker wherever a TODO value is still in place.

export const TODO = "TODO";

export const site = {
  name: "WESTWARD",
  descriptor: "Property Marketing Agency",
  tagline: "Property photography, film and launch websites on the West Coast.",
  description:
    "WESTWARD is a Velddrif-based property marketing studio. Photography, film, reels and launch websites for developments, listings and holiday rentals on the West Coast.",

  // TODO: WhatsApp Business number in international format, digits only (e.g. 27821234567).
  whatsappNumber: "27000000000",
  // TODO: real email address.
  email: TODO,
  // TODO: address exactly as it appears on the Google Business Profile.
  address: { street: TODO, town: "Velddrif", postcode: TODO, region: "Western Cape", country: "ZA" },
  instagram: "",
  linkedin: "",

  // Hero photograph. Put the file in public/images/ and set src, e.g. "/images/harbours-edge-aerial.jpg".
  heroImage: { src: "", alt: "Aerial view of Harbour's Edge on the West Coast" },
};

export const towns = ["Velddrif", "Langebaan", "Paternoster", "Saldanha", "Yzerfontein"];

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Approach", href: "/#approach" },
  { label: "Contact", href: "/#contact" },
];

export type Service = {
  slug: string;
  title: string;
  audience: string;
  summary: string;
  outcome: string;
  includes: string[];
  // TODO: "from" price as it should appear, e.g. "R8 500". Leave as TODO to show "Price to confirm".
  priceFrom: string;
  image: string;
  seoTitle: string;
};

export const services: Service[] = [
  {
    slug: "development-launches",
    title: "Development launches",
    audience: "For developers",
    summary:
      "A launch website, aerial and site photography, and a launch film, ready before the first buyer asks for a brochure.",
    outcome: "Buyers see the development at its best from day one, and every enquiry lands in one place.",
    includes: ["Launch website", "Aerial and site photography", "Launch film and reels", "Enquiry routing to WhatsApp"],
    priceFrom: TODO,
    image: "Aerial view of a development site in its coastal setting, overcast or golden hour",
    seoTitle: "Development launch marketing on the West Coast",
  },
  {
    slug: "listings",
    title: "Listings",
    audience: "For our agency partners",
    summary: "Architectural photography, a walkthrough video and reels for each listing, on a turnaround agreed up front.",
    outcome: "Listings that stand out on the portals and give buyers a reason to book a viewing.",
    includes: ["Interior and exterior photography", "Walkthrough video", "Vertical reels for social", "Agreed turnaround"],
    priceFrom: TODO,
    image: "Interior: open living space toward the Atlantic, overcast natural light",
    seoTitle: "Property photography and video in Velddrif and Langebaan",
  },
  {
    slug: "rentals-hospitality",
    title: "Rentals and hospitality",
    audience: "For holiday rentals, guesthouses and lodges",
    summary: "Photography, video and reels that make a stay feel booked before the guest arrives.",
    outcome: "Listing images that hold their own on Airbnb and Booking.com, and content for your own channels.",
    includes: ["Room and property photography", "Short video tour", "Reels for social", "Images sized for booking platforms"],
    priceFrom: TODO,
    image: "Guest suite with natural textures and soft directional light, view toward the water",
    seoTitle: "Holiday rental and guesthouse photography on the West Coast",
  },
];

export const process = [
  { title: "Discover", body: "We learn the property, the market and the buyer before anything is made." },
  { title: "Position", body: "We decide what makes it distinctive and who needs to hear it." },
  { title: "Create", body: "Photography, film, copy and design, made to one standard." },
  { title: "Launch", body: "Campaigns go live across the channels your buyers actually use." },
  { title: "Refine", body: "We read the response and adjust until the right enquiries arrive." },
];

export const roles = ["Developer", "Rental or guesthouse owner", "Estate agent", "Other"];

export const isTodo = (value: string) => !value || value === TODO;
