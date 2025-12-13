// ============================================================
// 4. components/store/CollectionHero.tsx - UPDATED
// ============================================================

import Image from "next/image";
import { Collection } from "@/types";

interface CollectionHeroProps {
  collection: Collection;
}

export const CollectionHero: React.FC<CollectionHeroProps> = ({
  collection,
}) => {
  return (
    <div className="relative h-[30vh] overflow-hidden rounded-xl shadow-2xl mb-12">
      <Image
        src={collection.heroImage}
        alt={`${collection.name} Banner`}
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay and Text Container */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-8 md:p-12">
        <div className="text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            {collection.name}
          </h1>
          <p className="mt-2 text-lg md:text-xl font-light text-gray-200 max-w-2xl">
            {collection.description}
          </p>
          {/* Olive accent line */}
          <div className="mt-4 w-12 h-1 bg-[#4a5d3f] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

