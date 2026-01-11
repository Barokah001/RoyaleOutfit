// components/store/CollectionHero.tsx
import Image from "next/image";

interface Collection {
  id: string;
  name: string;
  description: string;
  heroImage: string;
  slug: string;
}

interface CollectionHeroProps {
  collection: Collection;
}

export const CollectionHero: React.FC<CollectionHeroProps> = ({
  collection,
}) => {
  return (
    <div className="relative h-[30vh] overflow-hidden rounded-xl shadow-brown-xl mb-12 border border-brand-brown-200">
      <Image
        src={collection.heroImage}
        alt={`${collection.name} Banner`}
        fill
        className="object-cover object-center"
        priority
        unoptimized
      />

      {/* Overlay and Text Container */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-900/80 to-brand-brown-900/20 flex items-end p-8 md:p-12">
        <div className="text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            {collection.name}
          </h1>
          <p className="mt-2 text-lg md:text-xl font-light text-brand-cream-100 max-w-2xl">
            {collection.description}
          </p>
          {/* Brown accent line */}
          <div className="mt-4 w-12 h-1 bg-accent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};