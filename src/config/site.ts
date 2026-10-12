// Central content and contact settings. Edit here rather than in components.
// Anything marked TODO must be filled in before launch; the site shows a visible
// "to confirm" marker wherever a TODO value is still in place.

export const TODO = "TODO";

export const site = {
  name: "WESTWARD",
  descriptor: "Property Marketing Studio",
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
  // A rand amount (e.g. "R2,950") shows as "From R2,950"; any other text (e.g. "On quote") shows as written.
  priceFrom: string;
  priceNote?: string;
  // Optional price tiers, shown instead of the single "from" price.
  tiers?: { label: string; from: string }[];
  // Short delivery promise shown under the price.
  guarantee?: string;
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
    priceFrom: "On quote",
    image: "Aerial view of a development site in its coastal setting, overcast or golden hour",
    seoTitle: "Development launch marketing on the West Coast",
  },
  {
    slug: "listings",
    title: "Listings",
    audience: "For our agency partners",
    summary: "Architectural photography, a walkthrough video and reels for each listing.",
    outcome: "Listings that stand out on the portals and give buyers a reason to book a viewing.",
    includes: ["Interior and exterior photography", "Walkthrough video", "Vertical reels for social"],
    priceFrom: "R2,950",
    priceNote: "Founding rate for the first 5 listings, then R4,500",
    guarantee: "Photos in 24 hours. Video in 48, or the video is free.",
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
    priceFrom: "R1,950",
    tiers: [
      { label: "Photos only", from: "R1,950" },
      { label: "Photos, video tour and reels", from: "R2,950" },
    ],
    image: "Guest suite with natural textures and soft directional light, view toward the water",
    seoTitle: "Holiday rental and guesthouse photography on the West Coast",
  },
];

export const process = [
  { title: "Book", body: "Message us on WhatsApp with the property and the date you need. You get a confirmed price and shoot time." },
  { title: "Shoot", body: "We photograph and film on site, in the best light the day allows." },
  { title: "Deliver", body: "Edited photos, video and reels arrive ready to post on the portals, booking sites and social." },
];

export const roles = ["Developer", "Rental or guesthouse owner", "Estate agent", "Other"];

export const isTodo = (value: string) => !value || value === TODO;
