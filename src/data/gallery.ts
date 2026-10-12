// Add real photos to /public/images/gallery/ and set `image` to the path,
// e.g. image: "/images/gallery/kayla-marquee.jpg". Items without an image show a placeholder.
export type GalleryItem = {
  title: string;
  category: "Birthdays" | "Showers" | "Graduations" | "Themed";
  image?: string;
  tall?: boolean;
};

export const galleryCategories = ["All", "Birthdays", "Showers", "Graduations", "Themed"] as const;

export const gallery: GalleryItem[] = [
  { title: "Pastel rainbow candy cart", category: "Birthdays", tall: true },
  { title: "Miss to Mrs bridal shower", category: "Showers" },
  { title: "Marquee name + teal garland", category: "Birthdays" },
  { title: "Toy-themed birthday", category: "Themed", tall: true },
  { title: "Blue & white balloon arch", category: "Showers" },
  { title: "Graduation leis", category: "Graduations" },
  { title: "Strawberry mini bounce & ball pit", category: "Birthdays" },
  { title: "Candy dispenser wall", category: "Themed", tall: true },
  { title: "Custom banner backdrop", category: "Themed", tall: true },
  { title: "Grad celebration setup", category: "Graduations" },
];
