// Starting prices are based on East Bay market rates (fall 2026). Adjust freely.
export type Service = {
  title: string;
  category: "Balloons" | "Rentals" | "Custom Decor" | "Banners" | "Grad Leis";
  price: string;
  unit?: string;
  /** For per-unit items: what the customer picks a quantity of (e.g. "letters"). */
  qty?: string;
  /** Can be added on top of another package in the booking form. */
  addon?: boolean;
  description: string;
  includes: string[];
  featured?: boolean;
  image?: string;
};

export const services: Service[] = [
  {
    title: "Balloon Garland",
    addon: true,
    category: "Balloons",
    price: "$175",
    description: "An organic, multi-size garland in your colors. Perfect over a dessert table, doorway or mantle.",
    includes: ["6–8 ft organic garland", "Custom color palette", "Delivery & install"],
  },
  {
    title: "Balloon Backdrop",
    category: "Balloons",
    price: "$325",
    description: "A photo-ready backdrop framed by a full balloon garland, the centerpiece every guest will snap.",
    includes: ["Arch or panel backdrop", "Full balloon garland", "Setup & takedown"],
    featured: true,
  },
  {
    title: "Signature Party Setup",
    category: "Custom Decor",
    price: "$550",
    description: "Our all-in look: backdrop, garland and styled table so you can show up and celebrate.",
    includes: ["Backdrop + garland", "Table styling & props", "Theme design consult"],
  },
  {
    title: "Light-Up Marquee Letters",
    addon: true,
    category: "Rentals",
    price: "$45",
    unit: "/ letter",
    qty: "letters",
    description: "Glowing names, numbers and initials that make any setup unforgettable.",
    includes: ["Names, ages & initials", "Pairs with any balloon design", "Delivery & setup"],
  },
  {
    title: "White Bounce House",
    addon: true,
    category: "Rentals",
    price: "$295",
    description: "The modern, Instagram-worthy bounce house for birthdays, showers and backyard parties.",
    includes: ["Clean, sanitized unit", "Delivery & setup", "Add a garland for $130"],
  },
  {
    title: "Bounce House + Balloons",
    category: "Rentals",
    price: "$425",
    description: "Our white bounce house dressed up with a custom balloon garland in your theme.",
    includes: ["White bounce house", "Custom balloon garland", "Delivery & install"],
  },
  {
    title: "Custom Banners",
    addon: true,
    category: "Banners",
    price: "$45",
    description: "Personalized banners and signage with names, dates and themes to match your decor.",
    includes: ["Custom wording", "Theme-matched design", "Pairs with any setup"],
  },
  {
    title: "Graduation Leis",
    addon: true,
    category: "Grad Leis",
    price: "$25",
    unit: "each",
    qty: "leis",
    description: "Handmade ribbon, candy and money leis in school colors for your graduate.",
    includes: ["School colors", "Ribbon, candy or money", "Bulk pricing available"],
  },
];

export const priceValue = (s: Service) => Number(s.price.replace(/[^0-9.]/g, ""));
