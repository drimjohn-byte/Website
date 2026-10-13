// Central content and contact settings. Edit here rather than in components.
// Anything marked TODO must be filled in before launch; the site shows a visible
// "to confirm" marker wherever a TODO value is still in place.

export const TODO = "TODO";

export const site = {
  name: "Signal Local",
  tagline: "Get your business found online.",
  description:
    "Signal Local sets up everything a small business in Ontario needs to be found online: a fast website, Google Business Profile, Google Analytics and social media profiles. Flat prices, and every account is in your name.",

  // TODO: real contact details.
  email: TODO,
  // Display format, e.g. "(416) 555-0123". Used for tel: and sms: links.
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

export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  outcome: string;
  includes: string[];
  // What we need from the client to get started.
  needs: string[];
  price: string;
  priceNote?: string;
  turnaround: string;
  // Name of an icon in components/Icon.astro.
  icon: "website" | "pin" | "chart" | "social";
  seoTitle: string;
  faq: { q: string; a: string }[];
};

// Prices are in Canadian dollars, before HST.
export const services: Service[] = [
  {
    slug: "website",
    title: "Website",
    short: "A fast, mobile-first site that turns visitors into calls.",
    summary:
      "A clean, fast website of up to five pages, written for your customers and built so Google can read it. Click-to-call, a contact form and your hours on every page.",
    outcome: "Customers who search for you land on a site that answers their questions and makes it easy to get in touch.",
    includes: [
      "Up to 5 pages (e.g. Home, Services, About, Reviews, Contact)",
      "Mobile-first design that loads fast on a phone",
      "Copywriting help, so you don't start from a blank page",
      "Contact form, click-to-call and Google Map",
      "On-page SEO basics: titles, descriptions, local business schema",
      "Domain, hosting and SSL set up in your name",
    ],
    needs: ["Your logo (or we'll set up a simple wordmark)", "Photos of your work, team or premises", "A list of your services and service area"],
    price: "$1,500",
    priceNote: "Extra pages $150 each",
    turnaround: "Live in 2 to 3 weeks",
    icon: "website",
    seoTitle: "Small business website design in Ontario",
    faq: [
      { q: "Do I own the website?", a: "Yes. The domain, hosting and site are set up in your name. If you ever leave, you take everything with you." },
      { q: "Can I edit it myself?", a: "Yes. We show you how to change text, photos and hours. Or add the care plan and send us changes by email." },
      { q: "What does hosting cost?", a: "Hosting for a site like this is often free or a few dollars a month. A domain is about $20 a year. You pay the providers directly, so there is no markup." },
    ],
  },
  {
    slug: "google-business-profile",
    title: "Google Business Profile",
    short: "Show up on Google Maps and in the local results.",
    summary:
      "We create or claim your Google Business Profile, get it verified and fill in every field Google uses to rank local businesses, so you appear when people nearby search for what you do.",
    outcome: "Your business shows up on Google Maps and in the \"near me\" results, with your hours, photos and reviews in one place.",
    includes: [
      "Create, claim or clean up your profile",
      "Help through Google's verification step",
      "Categories, services, service area and hours",
      "Business description written for local search",
      "Photos uploaded and organized",
      "A short review link and QR code to share with customers",
    ],
    needs: ["Your business name, address and phone exactly as you use them", "Access to the business phone or email for verification", "10 or more photos"],
    price: "$350",
    turnaround: "Set up in 3 to 5 days, plus Google's verification time",
    icon: "pin",
    seoTitle: "Google Business Profile setup in Ontario",
    faq: [
      { q: "I already have a profile. Can you fix it?", a: "Yes. We audit what's there, fix wrong details and duplicates, and fill in what's missing. The price is the same." },
      { q: "How long does verification take?", a: "It depends on Google. Many profiles verify within a few days by video or phone; some need a postcard, which can take up to two weeks." },
      { q: "Can you guarantee I'll rank first?", a: "No one can honestly promise that. We set up everything Google looks at, so your profile is complete, accurate and ready to compete." },
    ],
  },
  {
    slug: "google-analytics",
    title: "Google Analytics",
    short: "Know how many people find you, and what they do next.",
    summary:
      "We set up Google Analytics 4 and Google Search Console on your site, track the actions that matter (calls, form sends, direction requests) and give you a simple dashboard you'll actually look at.",
    outcome: "You can see where your customers come from and which pages bring in calls, instead of guessing.",
    includes: [
      "Google Analytics 4 property in your name",
      "Google Search Console connected and sitemap submitted",
      "Tracking for calls, form submissions and email clicks",
      "A one-page dashboard in Looker Studio",
      "A 20-minute walkthrough so you know what to look at",
    ],
    needs: ["Access to your website (or we're building it)", "A Google account for the business"],
    price: "$250",
    turnaround: "Done in 2 to 3 days",
    icon: "chart",
    seoTitle: "Google Analytics 4 setup for small businesses in Ontario",
    faq: [
      { q: "Will this work on a site you didn't build?", a: "Usually, yes. We can add tracking to WordPress, Wix, Squarespace, Shopify and most other platforms." },
      { q: "Is it privacy-friendly?", a: "We set it up with a short privacy notice on your site and keep data collection to what you need." },
    ],
  },
  {
    slug: "social-media-setup",
    title: "Social media profiles",
    short: "Consistent, complete profiles on the platforms your customers use.",
    summary:
      "We set up or tidy up your profiles on Facebook, Instagram and up to two more platforms, with matching branding, the right business details and links back to your website.",
    outcome: "Wherever customers look you up, they find a business that looks open, current and trustworthy.",
    includes: [
      "Facebook Page and Instagram business account",
      "Up to 2 more: LinkedIn, Google, Yelp, Nextdoor, TikTok or Pinterest",
      "Profile and cover images sized for each platform",
      "Bio, contact details, hours and links filled in",
      "Your first 3 posts, ready to go",
      "Logins handed over to you, with two-factor authentication on",
    ],
    needs: ["Your logo and a few photos", "Access to any existing accounts"],
    price: "$400",
    turnaround: "Done in 1 week",
    icon: "social",
    seoTitle: "Social media profile setup for Ontario small businesses",
    faq: [
      { q: "Do you post for me every week?", a: "Not with this service. It gets your profiles set up properly. Ongoing posting can be added on request." },
      { q: "Which platforms should I be on?", a: "Usually the two or three where your customers already are. We'll recommend them on the free call." },
    ],
  },
];

// The bundle: all four services together for less.
export const bundle = {
  title: "The Get Found package",
  summary: "Website, Google Business Profile, Google Analytics and social media profiles, set up together so everything links up.",
  price: "$2,200",
  separately: "$2,500",
  turnaround: "Everything live in about 3 weeks",
};

export const carePlan = {
  title: "Care plan",
  summary: "Optional, after launch. Cancel any time.",
  price: "$99",
  per: "month",
  includes: [
    "Site updates and small edits (up to 1 hour a month)",
    "Security and uptime monitoring",
    "Google Business Profile posts and review replies",
    "A plain-English report each month",
  ],
};

export const process = [
  { title: "Free call", body: "A 15-minute call about your business and what you need. You get a fixed price, in writing." },
  { title: "We build", body: "We set everything up and send you a preview. You tell us what to change." },
  { title: "Launch", body: "Your site goes live, your profiles go public and everything links together." },
  { title: "Hand over", body: "Every login is yours. We walk you through it so you're never locked in." },
];

export const promises = [
  { title: "You own everything", body: "Every account, domain and login is set up in your name." },
  { title: "Flat, upfront prices", body: "No hourly billing and no surprise invoices." },
  { title: "Plain English", body: "No jargon. We explain what we did and why." },
];

export const faq = [
  { q: "Who is this for?", a: "Local small businesses in Ontario: trades, contractors, cafés, salons, clinics, shops and service businesses that need to be found by customers nearby." },
  { q: "Do I need all four services?", a: "No. Each one stands on its own. The package is cheaper if you need everything, and it means it all links up from day one." },
  { q: "How do I pay?", a: "Half to start and half at launch, by e-transfer or credit card. HST is added to all prices." },
  { q: "I already have a website. Can you still help?", a: "Yes. We can set up your Google Business Profile, analytics and social profiles around the site you have, or rebuild it if it's holding you back." },
  { q: "What happens after launch?", a: "You're set. Everything is yours to run. If you'd rather not, the care plan covers updates, Google posts and a monthly report." },
];

export const businessTypes = ["Trades or contractor", "Food and drink", "Health and beauty", "Retail", "Professional services", "Other"];

export const isTodo = (value: string) => !value || value === TODO;
