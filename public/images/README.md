# Photos

- `logo.jpg` is the logo, used in the header, footer, favicon and link previews.
- Put event photos in `gallery/` (JPG or WebP, about 1200px wide, under 400 KB each).
- To show a photo, set `image: "/images/gallery/your-photo.jpg"` on an item in
  `src/data/gallery.ts`. Items without an `image` show a pink placeholder.
- The hero and About photos are the `<Photo>` tags in `src/components/Hero.astro`
  and `src/components/About.astro`. Add `src="/images/..."` to each one.
