import type { Route } from "./+types/gallery";
import { GalleryFilter } from "~/components/gallery/GalleryFilter";
import { GalleryItem } from "~/components/gallery/GalleryItem";
import { PhotosComingSoon } from "~/components/gallery/PhotosComingSoon";
import { PageHero } from "~/components/layout/PageHero";
import { Section } from "~/components/ui/Section";
import { galleryHero, galleryMeta, galleryTiles } from "~/content/gallery";

export const meta: Route.MetaFunction = () => [
  { title: galleryMeta.title },
  { name: "description", content: galleryMeta.description },
];

export default function Gallery() {
  return (
    <>
      <PageHero {...galleryHero} />
      <Section>
        <GalleryFilter />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-0.5 bg-line">
          {galleryTiles.map((tile) => (
            <GalleryItem key={tile.name} {...tile} />
          ))}
        </div>
        <PhotosComingSoon />
      </Section>
    </>
  );
}
