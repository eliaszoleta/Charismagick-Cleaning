// Content for the individual service pages (/services/:slug) and service-area pages
// (/service-areas/:slug). Each page targets a specific search ("house cleaning new orleans",
// "apartment cleaning metairie", ...), so keep titles, descriptions and copy unique per page.

export interface Faq {
  question: string;
  answer: string;
}

export interface ServicePage {
  slug: string;
  /** Short name used in navigation, links and schema. */
  name: string;
  /** Matching option value in the quote form's service dropdown. */
  formValue: string;
  /** id of the CORE_SPECIALTIES card that links to this page. */
  specialtyId?: string;
  metaTitle: string;
  metaDescription: string;
  /** One-line, location-neutral summary used on cards (city pages, etc.). */
  summary: string;
  h1: string;
  intro: string[];
  idealFor: string[];
  included: { area: string; tasks: string[] }[];
  whyUs: { title: string; text: string }[];
  faqs: Faq[];
  /** Gallery photo shown on the page (and used as its social sharing image). Optional until a real photo exists. */
  image?: string;
  imageAlt?: string;
}

export interface AreaPage {
  slug: string;
  city: string;
  state: string;
  stateName: string;
  /** Matching option value in the quote form's city dropdown. */
  formValue: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  localNotes: { title: string; text: string }[];
  neighborhoods: string[];
  nearby: string[];
  faqs: Faq[];
}

const AREAS_LINE = "New Orleans, Metairie and Gretna";

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "house-cleaning",
    name: "House Cleaning",
    formValue: "House Cleaning",
    specialtyId: "house-cleaning",
    metaTitle: "House Cleaning in New Orleans, LA | Charismagick Cleaning",
    metaDescription:
      "Weekly, bi-weekly, monthly or one-time house cleaning in New Orleans, Metairie and Gretna. Friendly, detail-focused cleaners. Free quote.",
    summary: "Regular or one-time house cleaning that keeps your home fresh.",
    h1: "House Cleaning Services in New Orleans",
    intro: [
      "A clean house changes how your whole week feels. Charismagick Cleaning cleans homes across New Orleans, Metairie and Gretna with the kind of care and attention you'd want for your own family.",
      `We offer weekly, bi-weekly and monthly house cleaning, plus one-time cleans when you need to catch up fast. Every visit covers the kitchen, bathrooms, bedrooms and living areas. We serve ${AREAS_LINE}.`,
    ],
    idealFor: [
      "Busy families and working professionals",
      "Homeowners who want their weekends back",
      "Anyone hosting guests or holidays",
      "Pet owners fighting fur and dust",
    ],
    included: [
      {
        area: "Kitchen",
        tasks: [
          "Counters, backsplash and sink sanitized",
          "Stovetop and appliance fronts wiped",
          "Outside of cabinets wiped down",
          "Floors vacuumed and mopped",
        ],
      },
      {
        area: "Bathrooms",
        tasks: [
          "Toilets, tubs and showers scrubbed",
          "Sinks, mirrors and fixtures shined",
          "Floors washed",
          "Trash emptied",
        ],
      },
      {
        area: "Bedrooms & living areas",
        tasks: [
          "Dusting of surfaces and decor",
          "Beds made (linen change on request)",
          "Carpets and rugs vacuumed",
          "Hard floors mopped",
        ],
      },
      {
        area: "Throughout",
        tasks: [
          "Light switches and door handles wiped",
          "Baseboards dusted",
          "Mirrors and glass cleaned",
          "Trash and recycling taken out",
        ],
      },
    ],
    whyUs: [
      {
        title: "Detail-focused cleaning",
        text: "We work room by room so nothing gets skipped, from the kitchen backsplash to the baseboards.",
      },
      {
        title: "Friendly, reliable team",
        text: "The same careful approach every visit, led personally by Charisma.",
      },
      {
        title: "Upfront pricing",
        text: "A clear quote before we start, with flexible weekly, bi-weekly, monthly or one-time scheduling.",
      },
    ],
    faqs: [
      {
        question: "How much does house cleaning cost in New Orleans?",
        answer:
          "It depends on the size of your home, its condition and how often you'd like us to come. Request a free quote and we'll send you a clear price.",
      },
      {
        question: "Do you bring your own cleaning supplies?",
        answer: "Yes, we bring our own supplies and equipment for every visit.",
      },
      {
        question: "How often should I book a house cleaning?",
        answer:
          "Most families choose weekly or bi-weekly cleaning to stay on top of everyday mess. Monthly works well for smaller homes, and we also do one-time cleans.",
      },
      {
        question: "Do I need to be home during the cleaning?",
        answer:
          "No. Many clients give us access and head to work or run errands. We'll agree on what works best for you when we book.",
      },
    ],
    image: "/images/house-cleaning-new-orleans.jpg",
    imageAlt: "Bright, freshly cleaned living room after house cleaning in New Orleans",
  },
  {
    slug: "apartment-cleaning",
    name: "Apartment Cleaning",
    formValue: "Apartment Cleaning",
    specialtyId: "apartment-cleaning",
    metaTitle: "Apartment Cleaning in New Orleans & Metairie | Charismagick Cleaning",
    metaDescription:
      "Apartment cleaning in New Orleans, Metairie and Gretna, from studios to multi-bedroom rentals. Move-in/move-out cleans available. Free quote.",
    summary: "Detailed cleaning for apartments, from studios to multi-bedroom rentals.",
    h1: "Apartment Cleaning in New Orleans, Metairie & Gretna",
    intro: [
      "Apartment living comes with its own rules: leasing office schedules, shared hallways and compact spaces where every surface shows. Charismagick Cleaning cleans apartments across New Orleans, Metairie and Gretna and works around your building's requirements.",
      "Choose regular cleaning to keep your place guest-ready, or book a one-time deep clean or a move-in/move-out clean for your next lease.",
    ],
    idealFor: [
      "Renters who want their weekends back",
      "Tenants moving in or out",
      "Landlords and property managers",
      "Busy professionals in studios and 1-2 bedroom units",
    ],
    included: [
      {
        area: "Kitchen",
        tasks: [
          "Counters, sink and backsplash sanitized",
          "Appliance fronts and stovetop cleaned",
          "Inside microwave",
          "Floors cleaned",
        ],
      },
      {
        area: "Bathroom",
        tasks: [
          "Toilet, tub and shower scrubbed",
          "Mirrors and fixtures shined",
          "Floors washed",
          "Trash emptied",
        ],
      },
      {
        area: "Living & bedrooms",
        tasks: [
          "Dusting of surfaces and shelves",
          "Floors vacuumed and mopped",
          "Beds made on request",
          "Closets tidied",
        ],
      },
      {
        area: "Move-in / move-out",
        tasks: [
          "Inside cabinets and drawers",
          "Inside fridge and oven",
          "Walls spot-cleaned",
          "Ready for final walkthrough",
        ],
      },
    ],
    whyUs: [
      {
        title: "Rental-ready results",
        text: "We clean to the standard landlords and leasing offices expect at move-out.",
      },
      {
        title: "Fits your schedule",
        text: "Weekday, evening or weekend appointments that work around your routine.",
      },
      {
        title: "Small space, big detail",
        text: "Compact apartments get the same room-by-room attention as a full house.",
      },
    ],
    faqs: [
      {
        question: "Do you clean apartments in Metairie and Gretna, or just New Orleans?",
        answer: `Yes to all three — we clean apartments across ${AREAS_LINE}.`,
      },
      {
        question: "Can you do a move-out clean for my apartment?",
        answer:
          "Yes. Move-in and move-out cleans cover inside cabinets, the fridge and oven, and every room from top to bottom.",
      },
      {
        question: "How much does apartment cleaning cost?",
        answer:
          "It depends on the size of your unit and the type of clean. Request a free quote with your bedroom and bathroom count and we'll send an upfront price.",
      },
    ],
    image: "/images/apartment-cleaning-new-orleans.jpg",
    imageAlt: "Clean, tidy apartment kitchen and living area in New Orleans",
  },
  {
    slug: "commercial-cleaning",
    name: "Commercial Cleaning",
    formValue: "Commercial Cleaning",
    specialtyId: "commercial-cleaning",
    metaTitle: "Commercial Cleaning in New Orleans, LA | Charismagick Cleaning",
    metaDescription:
      "Office and commercial cleaning in New Orleans, Metairie and Gretna. Desks, common areas, washrooms and floors cleaned on your schedule. Free quote.",
    summary: "Clean, healthy offices and commercial spaces on your schedule.",
    h1: "Commercial Cleaning in New Orleans, Metairie & Gretna",
    intro: [
      "A clean workplace keeps your team healthy and makes a strong first impression on clients and customers. Charismagick Cleaning cleans offices and commercial spaces across New Orleans, Metairie and Gretna.",
      "We clean before you open, after you close or on weekends, so your business never has to pause for us.",
    ],
    idealFor: [
      "Small and mid-size offices",
      "Retail stores and studios",
      "Professional practices",
      "Property managers and landlords",
    ],
    included: [
      {
        area: "Work areas",
        tasks: [
          "Desks and surfaces dusted and wiped",
          "Common areas and reception",
          "Door handles and switches sanitized",
          "Glass doors and partitions",
        ],
      },
      {
        area: "Washrooms",
        tasks: [
          "Toilets, sinks and counters sanitized",
          "Mirrors and fixtures",
          "Supplies checked and refilled (your stock)",
          "Floors washed",
        ],
      },
      {
        area: "Break rooms",
        tasks: [
          "Counters, tables and sink",
          "Microwave and appliance fronts",
          "Trash and recycling",
          "Floors cleaned",
        ],
      },
      {
        area: "Floors & entrances",
        tasks: [
          "Floors vacuumed and mopped",
          "Entrance mats",
          "Lobby and reception",
          "Trash removed",
        ],
      },
    ],
    whyUs: [
      {
        title: "Works around your hours",
        text: "Cleaning scheduled before or after business hours so it never interrupts your team or your customers.",
      },
      {
        title: "Consistent checklist",
        text: "The same detailed checklist every visit, for reliable, predictable results.",
      },
      {
        title: "Careful, trustworthy team",
        text: "A team you can trust in your workplace, treating your space with respect.",
      },
    ],
    faqs: [
      {
        question: "What kinds of businesses do you clean?",
        answer:
          "Offices, retail stores, studios and other commercial spaces across New Orleans, Metairie and Gretna. Not sure if we're a fit? Just ask.",
      },
      {
        question: "Can you clean after business hours?",
        answer: "Yes. We can clean early mornings, evenings or weekends.",
      },
      {
        question: "How is commercial cleaning priced?",
        answer:
          "It depends on the size of the space, what needs cleaning and how often. Request a free quote and we'll build a plan and price for your business.",
      },
    ],
    image: "/images/commercial-cleaning-new-orleans.jpg",
    imageAlt: "Clean, organized commercial office space in New Orleans",
  },
  {
    slug: "restaurant-bar-cleaning",
    name: "Restaurant & Bar Cleaning",
    formValue: "Restaurant / Bar Cleaning",
    specialtyId: "restaurant-bar-cleaning",
    metaTitle: "Restaurant & Bar Cleaning in New Orleans | Charismagick Cleaning",
    metaDescription:
      "Restaurant and bar cleaning in New Orleans, Metairie and Gretna. Dining rooms, bar tops, floors and restrooms cleaned around your service hours.",
    summary: "Deep, health-code-minded cleaning for restaurants, bars and kitchens.",
    h1: "Restaurant & Bar Cleaning in New Orleans",
    intro: [
      "New Orleans runs on its restaurants and bars, and customers notice a spotless dining room or bar top the moment they walk in. Charismagick Cleaning cleans restaurants and bars across New Orleans, Metairie and Gretna, scheduled around your service hours.",
      "We clean dining rooms, bar tops, booths, floors and restrooms so you open every shift looking your best, without pulling your own staff off the floor to do it.",
    ],
    idealFor: [
      "Restaurants and gastropubs",
      "Bars, lounges and music venues",
      "Cafés and coffee shops",
      "Catering kitchens and event spaces",
    ],
    included: [
      {
        area: "Front of house",
        tasks: [
          "Dining room tables, chairs and booths wiped",
          "Bar top and stools cleaned",
          "Glass, mirrors and fixtures shined",
          "Floors swept and mopped",
        ],
      },
      {
        area: "Restrooms",
        tasks: [
          "Toilets, sinks and counters sanitized",
          "Mirrors and fixtures shined",
          "Floors deep cleaned",
          "Trash and supplies checked",
        ],
      },
      {
        area: "Back of house (non-kitchen-equipment areas)",
        tasks: [
          "Prep and storage areas wiped down",
          "Floors degreased and mopped",
          "Trash and recycling removed",
          "Walls spot-cleaned",
        ],
      },
      {
        area: "Scheduling",
        tasks: [
          "Before-open or after-close cleaning",
          "Weekly or multiple-times-per-week service",
          "Event and private-party turnarounds",
          "Flexible around your service hours",
        ],
      },
    ],
    whyUs: [
      {
        title: "Scheduled around service",
        text: "We clean before you open or after you close, so your staff and customers are never in the way.",
      },
      {
        title: "Front-of-house focus",
        text: "Dining rooms and bar tops get the detail that keeps customers coming back.",
      },
      {
        title: "Reliable and consistent",
        text: "The same checklist every visit, so your space is always ready for service.",
      },
    ],
    faqs: [
      {
        question: "Do you clean kitchen equipment?",
        answer:
          "Our restaurant and bar service focuses on dining rooms, bar areas, restrooms and general back-of-house cleaning. Ask us about your specific kitchen needs and we'll let you know what we can cover.",
      },
      {
        question: "Can you clean before we open or after we close?",
        answer:
          "Yes. We schedule around your service hours, including early mornings, late nights and between shifts.",
      },
      {
        question: "How is restaurant or bar cleaning priced?",
        answer:
          "It depends on the size of your space and how often you'd like us to come. Request a free quote and we'll build a plan around your hours.",
      },
    ],
    image: "/images/restaurant-bar-cleaning-new-orleans.jpg",
    imageAlt: "Clean, polished bar top and dining area in a New Orleans restaurant",
  },
];

function areaFaqs(city: string, extra: Faq): Faq[] {
  return [
    {
      question: `Do you offer house cleaning in ${city}?`,
      answer: `Yes. Charismagick Cleaning offers house cleaning, apartment cleaning, commercial cleaning and restaurant/bar cleaning in ${city}.`,
    },
    extra,
    {
      question: `How do I get a cleaning quote in ${city}?`,
      answer:
        "Fill out the free quote form on this page or call/text (504) 498-5406. We'll send you a clear, upfront price.",
    },
  ];
}

export const AREA_PAGES: AreaPage[] = [
  {
    slug: "new-orleans",
    city: "New Orleans",
    state: "LA",
    stateName: "Louisiana",
    formValue: "New Orleans",
    metaTitle: "House & Apartment Cleaning in New Orleans, LA | Charismagick Cleaning",
    metaDescription:
      "Trusted New Orleans house, apartment, commercial and restaurant/bar cleaning. Friendly, detail-focused team. Call or text (504) 498-5406.",
    h1: "Cleaning Services in New Orleans, LA",
    intro: [
      "Charismagick Cleaning is based right here in New Orleans, cleaning homes, apartments, offices, restaurants and bars across the city.",
      "Whether you need regular house cleaning, a one-time apartment clean, commercial cleaning for your business, or restaurant and bar cleaning scheduled around service hours, we bring the same care and attention to detail to every job.",
    ],
    localNotes: [
      {
        title: "Shotgun houses & historic homes",
        text: "New Orleans' classic shotgun houses and historic homes get the room-by-room detail they deserve.",
      },
      {
        title: "French Quarter & hospitality businesses",
        text: "Restaurants and bars in and around the French Quarter trust us for cleaning scheduled around service hours.",
      },
      {
        title: "Humidity-ready cleaning",
        text: "New Orleans humidity means mold and mildew build up fast. We keep bathrooms and kitchens on top of it.",
      },
    ],
    neighborhoods: [
      "Bywater",
      "French Quarter",
      "Marigny",
      "Uptown",
      "Garden District",
      "Mid-City",
      "Lakeview",
      "Algiers",
    ],
    nearby: ["metairie", "gretna"],
    faqs: areaFaqs("New Orleans", {
      question: "Do you clean restaurants and bars in New Orleans?",
      answer:
        "Yes. Restaurant and bar cleaning is one of our specialties, scheduled around your service hours.",
    }),
  },
  {
    slug: "metairie",
    city: "Metairie",
    state: "LA",
    stateName: "Louisiana",
    formValue: "Metairie",
    metaTitle: "House & Apartment Cleaning in Metairie, LA | Charismagick Cleaning",
    metaDescription:
      "House, apartment and commercial cleaning in Metairie, LA. Flexible scheduling, upfront pricing. Call or text (504) 498-5406 for a free quote.",
    h1: "Cleaning Services in Metairie, LA",
    intro: [
      "From family homes to apartments near Lake Pontchartrain, Charismagick Cleaning keeps Metairie spaces clean and comfortable.",
      "We offer regular house cleaning, apartment cleaning, commercial cleaning and restaurant/bar cleaning across Metairie, with flexible weekly, bi-weekly and monthly schedules.",
    ],
    localNotes: [
      {
        title: "Family homes",
        text: "Busy Metairie families count on recurring cleaning to keep up with school, work and everyday life.",
      },
      {
        title: "Apartments near the lake",
        text: "Renters near Lake Pontchartrain and along Veterans Blvd get the same detailed clean as a full house.",
      },
      {
        title: "Local businesses",
        text: "Metairie offices and restaurants trust us for cleaning that works around their hours.",
      },
    ],
    neighborhoods: ["Old Metairie", "Bonnabel Place", "Lakeview", "Fat City", "Causeway corridor"],
    nearby: ["new-orleans", "gretna"],
    faqs: areaFaqs("Metairie", {
      question: "Do you clean apartments in Metairie?",
      answer: "Yes. We clean apartments across Metairie, from studios to multi-bedroom units.",
    }),
  },
  {
    slug: "gretna",
    city: "Gretna",
    state: "LA",
    stateName: "Louisiana",
    formValue: "Gretna",
    metaTitle: "House & Apartment Cleaning in Gretna, LA | Charismagick Cleaning",
    metaDescription:
      "House, apartment and commercial cleaning in Gretna, LA. Reliable, detail-focused cleaners. Call or text (504) 498-5406 for a free quote.",
    h1: "Cleaning Services in Gretna, LA",
    intro: [
      "Charismagick Cleaning brings the same careful, detail-focused cleaning across the river to Gretna homes, apartments and businesses.",
      "Book regular house cleaning, a one-time apartment clean, commercial cleaning for your business, or restaurant and bar cleaning scheduled around your hours.",
    ],
    localNotes: [
      {
        title: "Historic Gretna homes",
        text: "Older Gretna homes get a thorough, room-by-room clean that respects their character.",
      },
      {
        title: "Close to the Westbank business district",
        text: "Gretna offices and shops count on us for reliable cleaning around their schedule.",
      },
      {
        title: "Easy scheduling across the river",
        text: "We serve Gretna alongside New Orleans and Metairie, so scheduling is simple.",
      },
    ],
    neighborhoods: ["Old Gretna", "Terrytown", "Timberlane"],
    nearby: ["new-orleans", "metairie"],
    faqs: areaFaqs("Gretna", {
      question: "Do you clean businesses in Gretna?",
      answer:
        "Yes. We clean offices, restaurants and bars in Gretna, scheduled around your business hours.",
    }),
  },
];

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((page) => page.slug === slug);
}

export function getAreaPage(slug: string) {
  return AREA_PAGES.find((page) => page.slug === slug);
}

export function servicePathForSpecialty(specialtyId: string) {
  const page = SERVICE_PAGES.find((p) => p.specialtyId === specialtyId);
  return page ? `/services/${page.slug}` : "/services";
}

export const HOME_FAQS: Faq[] = [
  {
    question: "What areas does Charismagick Cleaning serve?",
    answer: "We serve New Orleans, Metairie and Gretna, Louisiana.",
  },
  {
    question: "What cleaning services do you offer?",
    answer:
      "House cleaning, apartment cleaning, commercial cleaning, and restaurant & bar cleaning.",
  },
  {
    question: "How much does a cleaning cost?",
    answer:
      "It depends on the size and condition of your space, the type of cleaning and how often you'd like us to come. Request a free quote and we'll send transparent, upfront pricing.",
  },
  {
    question: "How do I book a cleaning?",
    answer:
      "Fill out the free quote form or call/text us at (504) 498-5406. We'll get back to you with a price and find a time that works for you.",
  },
];
