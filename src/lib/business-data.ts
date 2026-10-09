export interface BusinessInfo {
  name: string;
  /** Short brand line used under the logo and in the hero. */
  tagline: string;
  owner: string;
  logoUrl: string;
  phone: string;
  phoneRaw: string;
  /** This business takes calls and texts, unlike the text-only clients. */
  textOnly: boolean;
  email: string;
  address: string;
  addressLine2: string;
  city: string;
  state: string;
  yearsInBusiness?: number;
  instagramUrl?: string;
  instagramHandle?: string;
  facebookUrl?: string;
  googleBusinessUrl?: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "Charismagick Cleaning",
  tagline: "Cleaning with a Little Charisma, a Little Magick",
  owner: "Charisma Denise Wilson-Diggs",
  logoUrl: "/logo.png",
  phone: "(504) 498-5406",
  phoneRaw: "5044985406",
  textOnly: false,
  email: "spazztheninja@gmail.com",
  address: "715 Forstall St",
  addressLine2: "New Orleans, LA 70117",
  city: "New Orleans",
  state: "LA",
  // No years-in-business figure was provided on the application -- don't invent one.
};

/** tel: link for call buttons. */
export const PHONE_HREF = `tel:+1${BUSINESS_INFO.phoneRaw}`;
/** sms: link, offered alongside calling, not instead of it. */
export const SMS_HREF = `sms:+1${BUSINESS_INFO.phoneRaw}`;

/** Social / review profiles that exist (used for schema sameAs and footer links). No Facebook page yet. */
export const SOCIAL_LINKS = [
  BUSINESS_INFO.facebookUrl && { label: "Facebook", url: BUSINESS_INFO.facebookUrl },
  BUSINESS_INFO.googleBusinessUrl && { label: "Google", url: BUSINESS_INFO.googleBusinessUrl },
].filter((link): link is { label: string; url: string } => Boolean(link));

export interface Specialty {
  /** Same as the service page slug. */
  id: string;
  title: string;
  badge: string;
  summary: string;
  description: string;
  features: string[];
  image?: string;
  imageAlt?: string;
}

// Services from the client's application (House, Apartment, Commercial, plus "Restaurant/Bar
// cleaning" listed under Other Services).
export const CORE_SPECIALTIES: Specialty[] = [
  {
    id: "house-cleaning",
    title: "House Cleaning",
    badge: "Most Requested",
    summary: "Regular or one-time house cleaning that keeps every room in New Orleans homes fresh.",
    description:
      "Kitchens, bathrooms, bedrooms and living areas cleaned top to bottom, on a schedule built around your home and your family.",
    features: [
      "Kitchens and bathrooms sanitized",
      "Dusting, vacuuming and mopping",
      "Weekly, bi-weekly, monthly or one-time",
      "Same careful cleaner every visit",
    ],
    image: "/images/house-cleaning-new-orleans.jpg",
    imageAlt: "Bright, freshly cleaned living room after house cleaning in New Orleans",
  },
  {
    id: "apartment-cleaning",
    title: "Apartment Cleaning",
    badge: "Renter Favorite",
    summary: "Detailed cleaning for apartments across New Orleans, Metairie and Gretna.",
    description:
      "From studio units to multi-bedroom rentals, we work around leasing office rules and tight turnaround windows.",
    features: [
      "Kitchen, bathroom and living areas",
      "Floors vacuumed and mopped",
      "Move-in and move-out cleans available",
      "Flexible scheduling for renters",
    ],
    image: "/images/apartment-cleaning-new-orleans.jpg",
    imageAlt: "Clean, tidy apartment kitchen and living area in New Orleans",
  },
  {
    id: "commercial-cleaning",
    title: "Commercial Cleaning",
    badge: "For Businesses",
    summary: "Clean, healthy offices and commercial spaces on a schedule that fits your hours.",
    description:
      "Desks, common areas, washrooms and floors kept spotless for your team, your clients and your customers.",
    features: [
      "Offices, lobbies and common areas",
      "Washrooms sanitized",
      "Floors cleaned and maintained",
      "Before or after business hours",
    ],
    image: "/images/commercial-cleaning-new-orleans.jpg",
    imageAlt: "Clean, organized commercial office space in New Orleans",
  },
  {
    id: "restaurant-bar-cleaning",
    title: "Restaurant & Bar Cleaning",
    badge: "French Quarter Ready",
    summary: "Deep, health-code-minded cleaning for restaurants, bars and kitchens.",
    description:
      "Dining rooms, bar tops, booths and back-of-house areas cleaned on a schedule that works around service hours, so you open spotless every shift.",
    features: [
      "Dining room, bar top and booths",
      "Floors degreased and mopped",
      "Restrooms deep cleaned",
      "Scheduled around open/close hours",
    ],
    image: "/images/restaurant-bar-cleaning-new-orleans.jpg",
    imageAlt: "Mopping the wood floor after close in a New Orleans restaurant, chairs stacked on tables",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  detail: string;
}

// No reviews exist yet -- don't invent testimonials until real ones come in.
export const TESTIMONIALS: Testimonial[] = [];

export interface GalleryProject {
  id: string;
  /** Service page slug this photo belongs to (also picks the placeholder icon). */
  serviceSlug: string;
  title: string;
  category: string;
  location: string;
  /** Photo path in public/gallery/. Leave empty to show a "photo coming soon" panel. */
  imageUrl?: string;
  seoAlt: string;
  seoDescription: string;
  highlights: string[];
  description: string;
}

// Home page gallery. Swap in real job photos (public/gallery/<service>-<area>.jpg) as they come in.
export const WORK_GALLERY: GalleryProject[] = [
  {
    id: "living-room-house-cleaning",
    serviceSlug: "house-cleaning",
    title: "Living Room Refresh",
    category: "House Cleaning",
    location: "New Orleans, LA",
    imageUrl: "/gallery/living-room-house-cleaning-new-orleans.jpg",
    seoAlt: "Tidy, freshly cleaned living room after house cleaning in New Orleans",
    seoDescription: "Surfaces dusted, floors vacuumed and every corner tidied.",
    highlights: ["Dusting and tidying", "Floors vacuumed", "Surfaces wiped down"],
    description: "A calm, welcoming living room you can actually relax in.",
  },
  {
    id: "bathroom-cleaning-gretna",
    serviceSlug: "apartment-cleaning",
    title: "Bathroom Deep Clean",
    category: "Apartment Cleaning",
    location: "Gretna, LA",
    imageUrl: "/gallery/bathroom-cleaning-gretna.jpg",
    seoAlt: "Sparkling bathroom tub and fresh towels after cleaning in Gretna",
    seoDescription: "Tub, fixtures and floors scrubbed and shined.",
    highlights: ["Tub and fixtures scrubbed", "Towels styled", "Floors washed"],
    description: "A bathroom that looks, feels and smells clean.",
  },
  {
    id: "office-commercial-cleaning",
    serviceSlug: "commercial-cleaning",
    title: "Office Common Area",
    category: "Commercial Cleaning",
    location: "New Orleans, LA",
    imageUrl: "/gallery/office-cleaning-new-orleans.jpg",
    seoAlt: "Clean office meeting room and floors after commercial cleaning in New Orleans",
    seoDescription: "Tables, chairs and floors cleaned for the next meeting.",
    highlights: ["Tables and chairs wiped", "Floors cleaned", "Trash removed"],
    description: "A clean, professional space for your team and your clients.",
  },
  {
    id: "bar-top-restaurant-cleaning",
    serviceSlug: "restaurant-bar-cleaning",
    title: "After-Hours Floor Clean",
    category: "Restaurant & Bar Cleaning",
    location: "New Orleans, LA",
    imageUrl: "/gallery/bar-top-cleaning-new-orleans.jpg",
    seoAlt: "Mopping the wood floor between booths after close in a New Orleans restaurant",
    seoDescription: "Floors mopped and booths reset after closing, chairs up and ready to go.",
    highlights: ["Floors mopped edge to edge", "Booths and seating wiped down", "Ready before open"],
    description: "Ready to pour before the doors even open.",
  },
];
