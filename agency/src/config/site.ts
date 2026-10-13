// Central content and contact settings. Edit here rather than in components.
// Anything marked TODO must be filled in before launch; the site shows a visible
// "to confirm" marker wherever a TODO value is still in place.

export const TODO = "TODO";

export const site = {
  name: "Signal Local",
  tagline: "Your chair. Your name. Your brand.",
  description:
    "Signal Local builds websites for barbers who run their own suite in Ontario. A site with your name on it, your cuts up front and a Book button that goes straight to your booking app, then Google and Instagram set up to bring in new clients.",

  // TODO: real contact details.
  email: TODO,
  // Display format, e.g. "(416) 555-0123". Used for tel: links.
  phone: TODO,
  // TODO: home base. Set the city exactly as it appears on the Google Business Profile.
  address: { city: TODO, region: "ON", country: "CA" },
  serviceArea: "Ontario",

  // Optional booking link (e.g. Calendly or Cal.com). When set, "Book a free call" opens it.
  bookingUrl: "",
  // Optional form endpoint (e.g. Formspree, Basin or Netlify Forms). When empty, the
  // contact form composes an email to `email` instead of posting anywhere.
  formEndpoint: "",

  social: { instagram: "", facebook: "", linkedin: "" },
};

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "How it works", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
];

// Booking apps the website and profiles link to. Shown as plain text, not logos.
export const bookingApps = ["Booksy", "Squire", "Fresha", "Vagaro", "Square Appointments", "StyleSeat"];

export type Service = {
  slug: string;
  title: string;
  // Optional label on the card, e.g. "Start here".
  badge?: string;
  short: string;
  summary: string;
  outcome: string;
  includes: string[];
  // What we need from the barber to get started.
  needs: string[];
  price: string;
  priceNote?: string;
  turnaround: string;
  // Name of an icon in components/Icon.astro.
  icon: "website" | "pin" | "chart" | "social";
  seoTitle: string;
  faq: { q: string; a: string }[];
};

// Prices are in Canadian dollars, before HST. The website comes first; the rest are add-ons.
export const services: Service[] = [
  {
    slug: "barber-website",
    title: "Your website",
    badge: "Start here",
    short: "A site with your name on it, your cuts up front and a Book button on every screen.",
    summary:
      "A website that's yours, not a page inside a booking app. Your best cuts, your services and prices, where your suite is and how to get in, and a Book button that goes straight to the booking app you already use.",
    outcome: "When someone hears your name and looks you up, they find you, see your work and book, without being shown ten other barbers first.",
    includes: [
      "A domain with your name on it (e.g. yournamecuts.ca)",
      "Gallery of your best cuts, linked to your Instagram",
      "Services menu with prices and times",
      "Book button linked to Booksy, Squire, Fresha, Vagaro, Square or StyleSeat",
      "Suite location with buzzer, parking and map directions",
      "Your policies: deposits, lateness, no-shows",
      "Domain and hosting set up in your name",
    ],
    needs: ["10 to 20 photos of your best cuts (phone photos are fine, we'll send tips)", "Your price list and booking link", "Your suite address and how clients get in"],
    price: "$750",
    priceNote: "Or 3 payments of $250",
    turnaround: "Live in 7 to 10 days",
    icon: "website",
    seoTitle: "Websites for barbers in Ontario",
    faq: [
      { q: "I already have Booksy (or Squire). Why do I need a website?", a: "The booking app is where people book. Your website is where they decide. It's yours, it comes up when people search your name, and it doesn't show them other barbers nearby." },
      { q: "Do I own the website?", a: "Yes. The domain, hosting and site are in your name. If you ever leave, you take everything with you." },
      { q: "What does hosting cost?", a: "Hosting for a site like this is often free or a few dollars a month. A domain is about $20 a year. You pay the providers directly, so there's no markup." },
      { q: "Can I change my prices later?", a: "Yes. We show you how, or add the care plan and just text us the changes." },
    ],
  },
  {
    slug: "google-business-profile",
    title: "Google Business Profile",
    short: "Show up when people nearby search \"barber near me\".",
    summary:
      "Your own Google profile as an independent barber, separate from the suite building's listing. Set up with the right category, your services and hours, photos of your cuts and a booking button, so you show up on Google Maps.",
    outcome: "New clients in your area find you on Google Maps, see your reviews and book straight from the search results.",
    includes: [
      "Your own profile as an independent barber, separate from the building's listing",
      "Help through Google's verification step",
      "Category, services, prices and hours",
      "Booking button linked to your booking app",
      "Photos of your cuts uploaded and organized",
      "A review QR card for your station or mirror",
    ],
    needs: ["The name you go by as a barber", "Your suite address, including the suite number", "A phone number clients can reach you on"],
    price: "$250",
    turnaround: "Set up in 3 to 5 days, plus Google's verification time",
    icon: "pin",
    seoTitle: "Google Business Profile setup for barbers in Ontario",
    faq: [
      { q: "My suite building already has a Google listing. Can I have my own?", a: "In most cases, yes. Google allows independent professionals who work from a shared location to have their own profile. We set yours up so it doesn't clash with the building's." },
      { q: "Can you move my reviews from Booksy?", a: "Google doesn't allow reviews to be copied over from other platforms. We give you a QR card and a short link so your regulars can leave a Google review in under a minute." },
      { q: "How long does verification take?", a: "It depends on Google. Many profiles verify within a few days by video; some need a postcard, which can take up to two weeks." },
    ],
  },
  {
    slug: "google-analytics",
    title: "Google Analytics",
    short: "See which posts and searches turn into bookings.",
    summary:
      "Google Analytics and Search Console on your site, with tracking on every tap of the Book, call and directions buttons, and your Instagram links tagged so you can see which posts send people to book.",
    outcome: "You know what's bringing in new clients, so you can do more of it.",
    includes: [
      "Google Analytics 4 in your name",
      "Google Search Console connected",
      "Tracking for taps on Book, call and directions",
      "Instagram bio and story links tagged, so you see which posts work",
      "A simple one-page dashboard you can check on your phone",
    ],
    needs: ["A website (yours, or the one we build)", "A Google account"],
    price: "$150",
    turnaround: "Done in 2 to 3 days",
    icon: "chart",
    seoTitle: "Google Analytics for barber websites",
    faq: [
      { q: "Can I see bookings from inside Booksy or Squire?", a: "We track every tap on your Book button, which is where clients leave your site for the booking app. Most booking apps also show their own stats." },
      { q: "Is it privacy-friendly?", a: "We add a short privacy note to your site and only collect what you need." },
    ],
  },
  {
    slug: "instagram-setup",
    title: "Instagram and socials",
    short: "Make your Instagram work like a shopfront.",
    summary:
      "We set your Instagram up to turn followers into bookings: a professional account with a Book button, a bio people can find in search, highlights for your cuts, prices and location, and links back to your website. TikTok and Facebook set up to match.",
    outcome: "Someone who finds your work on Instagram can see your prices, find your suite and book in a couple of taps.",
    includes: [
      "Professional account with the barber category",
      "Book button connected to your booking app",
      "Name and bio written so you show up when people search \"barber\" and your city",
      "Highlight covers: Cuts, Prices, Location, Reviews",
      "Three pinned posts: who you are, your prices, how to book",
      "TikTok and Facebook set up to match (optional)",
    ],
    needs: ["Your Instagram login (you stay the owner)", "A photo of you and a few of your cuts"],
    price: "$250",
    turnaround: "Done in 1 week",
    icon: "social",
    seoTitle: "Instagram setup for barbers",
    faq: [
      { q: "Do you post for me every week?", a: "Not with this service. It sets your accounts up properly. You keep posting your cuts, and now every post leads somewhere." },
      { q: "Will you change how my feed looks?", a: "Only if you want us to. Your cuts are the content; we make sure everything around them works." },
    ],
  },
];

// The bundle: everything together for less.
export const bundle = {
  title: "The Own Your Chair package",
  summary: "Your website, Google Business Profile, Google Analytics and Instagram, set up together so everything links up and points to your Book button.",
  price: "$1,200",
  separately: "$1,400",
  payments: "Or 4 payments of $300",
  turnaround: "Everything live in about 2 weeks",
};

export const carePlan = {
  title: "Care plan",
  summary: "Optional, after launch. Cancel any time.",
  price: "$39",
  per: "month",
  includes: [
    "Price, hours and policy changes, just text us",
    "New cuts added to your gallery every month",
    "Google profile photos and posts kept fresh",
    "A short monthly report: visits and Book taps",
  ],
};

export const process = [
  { title: "Free call", body: "15 minutes, between clients. We talk about your suite, your clients and where you want to take your brand. You get a fixed price." },
  { title: "Send your stuff", body: "Photos of your cuts, your price list and your booking link. We'll send a simple checklist." },
  { title: "We build", body: "You get a preview link to check on your phone. Tell us what to change." },
  { title: "Go live", body: "Your site launches, your Book button is everywhere, and every login is handed to you." },
];

export const promises = [
  { title: "You own everything", body: "Your domain, site and accounts are in your name. Move suites or move on, it all comes with you." },
  { title: "Works with your booking app", body: "Keep Booksy, Squire, Fresha or whatever you use. We send clients to it." },
  { title: "Pay in instalments", body: "Split the website into 3 payments, or the package into 4." },
];

export const faq = [
  { q: "Who is this for?", a: "Barbers in Ontario who rent their own suite, or are about to, and want clients to book them by name, not just by location." },
  { q: "I'm still in a shop chair. Is it too early?", a: "Not at all. Building your name before you move means your clients know where to find you on day one in your suite." },
  { q: "Why start with the website?", a: "It's the one thing that's fully yours. Your Google profile, Instagram and booking app all point back to it, so it's the base everything else builds on." },
  { q: "Do I need to switch booking apps?", a: "No. We work with whatever you use: Booksy, Squire, Fresha, Vagaro, Square Appointments, StyleSeat and others." },
  { q: "How do I pay?", a: "Half to start and half at launch, or spread it out: the website in 3 payments, the package in 4. E-transfer or credit card. HST is added to all prices." },
  { q: "What if I move suites?", a: "Everything is in your name, so it moves with you. We'll update your address on your site and Google profile; it's included in the care plan." },
];

// Qualifying question on the contact form.
export const stages = ["Planning the move to a suite", "Just moved into my suite", "In my suite for a while", "Still in a shop chair"];

export const isTodo = (value: string) => !value || value === TODO;
