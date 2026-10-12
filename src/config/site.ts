// Edit contact details here. Every button on the site reads from this file.
const phone = "5105550123"; // TODO: replace with Andrea's real number (digits only)

export const site = {
  name: "Dream Party Decor",
  legalName: "Dream Party Decor, LLC",
  owner: "Andrea",
  tagline: "Make your dream event come true",
  description:
    "Custom balloon garlands, backdrops, marquee letters, a mini bounce house, candy walls and personalized party favors across the Bay Area and Central Valley. Designed, delivered and set up by Andrea.",
  homeBase: "Castro Valley",
  serviceArea: "Bay Area & Central Valley",
  serviceCities: ["Castro Valley", "Hayward", "San Leandro", "Oakland", "Fremont", "Pleasanton", "Livermore", "San Jose", "San Francisco", "Tracy", "Manteca"],
  // Travel fee by area, measured from Castro Valley. Shown and required in the booking form.
  travelZones: [
    { name: "Local", fee: 0, areas: "Castro Valley, Hayward, San Leandro, San Lorenzo, Union City" },
    { name: "Greater East Bay & Tri-Valley", fee: 35, areas: "Oakland, Berkeley, Fremont, Newark, Dublin, Pleasanton, Livermore, Walnut Creek, Concord, Richmond" },
    { name: "SF, Peninsula & South Bay", fee: 60, areas: "San Francisco, San Mateo, Redwood City, Milpitas, Santa Clara, San Jose" },
    { name: "Central Valley", fee: 85, areas: "Tracy, Mountain House, Lathrop, Manteca, Stockton" },
  ],
  instagram: {
    handle: "dream.party.decor",
    url: "https://www.instagram.com/dream.party.decor/",
    dm: "https://ig.me/m/dream.party.decor",
  },
  phoneDisplay: "(510) 555-0123", // TODO: replace
  sms: `sms:+1${phone}`,
  tel: `tel:+1${phone}`,
  email: "hello@example.com", // TODO: replace
  postsCount: "350+",
};
