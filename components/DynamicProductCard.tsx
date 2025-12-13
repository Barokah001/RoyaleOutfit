// components/DynamicProductCard.tsx
import dynamic from 'next/dynamic';

// Lazy load the ProductCard component
export const DynamicProductCard = dynamic(
  () => import('./ProductCard').then(mod => ({ default: mod.ProductCard })),
  {
    loading: () => (
      <div className="bg-gray-200 animate-pulse rounded-xl aspect-[3/4]">
        <div className="h-full flex items-center justify-center">
          <span className="text-gray-400">Loading...</span>
        </div>
      </div>
    ),
    ssr: false // Optional: disable server-side rendering
  }
);