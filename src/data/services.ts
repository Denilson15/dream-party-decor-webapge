// Starting prices are based on East Bay market rates (fall 2026). Adjust freely.
export type Service = {
  title: string;
  /** "package" = full decor installs (large cards); "rental" = rentals & extras (compact cards). */
  group: "package" | "rental";
  category: "Balloons" | "Rentals" | "Custom Decor" | "Banners" | "Favors" | "Grad Leis";
  price: string;
  unit?: string;
  /** For per-unit items: what the customer picks a quantity of (e.g. "letters"). */
  qty?: string;
  /** Default quantity shown in the booking form for per-unit items. */
  defaultQty?: number;
  /** Can be added on top of another package in the booking form. */
  addon?: boolean;
  /** Add-ons already included in this package (hidden from the add-on list when it's chosen). */
  bundles?: string[];
  description: string;
  includes: string[];
  featured?: boolean;
  /** Small highlight tag shown on the card, e.g. "For toddlers". */
  badge?: string;
  image?: string;
};

export const services: Service[] = [
  // ---- Packages ----
  {
    title: "Balloon Garland",
    group: "package",
    addon: true,
    category: "Balloons",
    price: "$175",
    description: "An organic, multi-size garland in your colors. Perfect over a dessert table, doorway or mantle.",
    includes: ["6–8 ft organic garland", "Custom color palette", "Delivery & install"],
  },
  {
    title: "Balloon Backdrop",
    group: "package",
    category: "Balloons",
    price: "$325",
    description: "A photo-ready backdrop framed by a full balloon garland, the centerpiece every guest will snap.",
    includes: ["Arch or panel backdrop", "Full balloon garland", "Setup & takedown"],
    featured: true,
  },
  {
    title: "Signature Party Setup",
    group: "package",
    category: "Custom Decor",
    price: "$550",
    description: "Our all-in look: backdrop, garland and styled table so you can show up and celebrate.",
    includes: ["Backdrop + garland", "Table styling & props", "Theme design consult"],
  },
  {
    title: "Mini Bounce + Balloon Garland",
    group: "package",
    category: "Rentals",
    price: "$275",
    badge: "For toddlers",
    bundles: ["Mini Bounce House & Ball Pit"],
    description: "Our white toddler bounce house and ball pit, dressed up with a custom balloon garland in your theme.",
    includes: ["Mini bounce house & ball pit", "Custom balloon garland", "Delivery, setup & takedown"],
  },

  // ---- Rentals & extras ----
  {
    title: "Mini Bounce House & Ball Pit",
    group: "rental",
    addon: true,
    category: "Rentals",
    price: "$125",
    badge: "For toddlers",
    description: "A 13×8 white bounce house with a slide and ball pit, made just for toddlers (ages 1–5). Ball colors customized to your party.",
    includes: ["Slide + ball pit", "Custom ball colors", "Delivery, setup & takedown"],
  },
  {
    title: "Light-Up Marquee Letters",
    group: "rental",
    addon: true,
    category: "Rentals",
    price: "$45",
    unit: "/ letter",
    qty: "letters",
    defaultQty: 4,
    description: "Glowing names, numbers and initials that make any setup unforgettable.",
    includes: ["Names, ages & initials", "Delivery & setup"],
  },
  {
    title: "Candy Dispenser Wall",
    group: "rental",
    addon: true,
    category: "Rentals",
    price: "$150",
    description: "A white arch wall with 8 candy dispensers and a favor-bag shelf. Candy filling quoted separately.",
    includes: ["8 dispensers + shelf", "Pairs with any garland", "Delivery & setup"],
  },
  {
    title: "Arch Backdrop Set",
    group: "rental",
    addon: true,
    category: "Rentals",
    price: "$125",
    description: "A set of 3 arch panels, the perfect base for balloons, signage and photo walls.",
    includes: ["3 arch panels", "Delivery & setup"],
  },
  {
    title: "Cylinder Pedestal Set",
    group: "rental",
    addon: true,
    category: "Rentals",
    price: "$75",
    description: "White display cylinders to show off your cake, desserts and props at different heights.",
    includes: ["Set of white cylinders", "Delivery & setup"],
  },
  {
    title: "Custom Banners",
    group: "rental",
    addon: true,
    category: "Banners",
    price: "$45",
    description: "Personalized banners with names, ages and themes, designed by Andrea to match your decor.",
    includes: ["Custom wording & design", "Theme-matched"],
  },
  {
    title: "Custom Party Favors",
    group: "rental",
    addon: true,
    category: "Favors",
    price: "$3",
    unit: "each",
    qty: "favors",
    defaultQty: 24,
    description: "Personalized chip bags and treat & candy wrappers designed around your theme.",
    includes: ["Custom design", "Chip bags & treat wrappers"],
  },
  {
    title: "Graduation Leis",
    group: "rental",
    addon: true,
    category: "Grad Leis",
    price: "$25",
    unit: "each",
    qty: "leis",
    defaultQty: 10,
    description: "Handmade ribbon, candy and money leis in school colors for your graduate.",
    includes: ["School colors", "Ribbon, candy or money"],
  },
];

export const priceValue = (s: Service) => Number(s.price.replace(/[^0-9.]/g, ""));
