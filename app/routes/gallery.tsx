import type { Route } from "./+types/gallery";
import { GalleryFilter } from "~/components/gallery/GalleryFilter";
import { GalleryItem } from "~/components/gallery/GalleryItem";
import { PhotosComingSoon } from "~/components/gallery/PhotosComingSoon";
import { PageHero } from "~/components/site/PageHero";
import { galleryHero, galleryMeta, galleryTiles } from "~/content/gallery";

export const meta: Route.MetaFunction = () => [
  { title: galleryMeta.title },
  { name: "description", content: galleryMeta.description },
];

export default function Gallery() {
  return (
    <>
      <PageHero {...galleryHero} />
      <section className="bg-landing-surface px-landing-gutter pt-14 pb-20 text-landing-ink">
        <GalleryFilter />
        <div className="mt-10 grid grid-cols-[repeat(3,minmax(0,1fr))] gap-x-7.5 gap-y-10 upto-900:grid-cols-[repeat(2,minmax(0,1fr))] upto-600:grid-cols-[minmax(0,1fr)]">
          {galleryTiles.map((tile, index) => (
            <GalleryItem key={tile.title} {...tile} number={`${String(index + 1).padStart(2, "0")} / BP`} />
          ))}
        </div>
      </section>
      <PhotosComingSoon />
    </>
  );
}
