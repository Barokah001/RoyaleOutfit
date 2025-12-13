// hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1,
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible] as const;
}

// Usage in component:
function LazyProductCard({ product }) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div ref={ref}>
      {isVisible ? (
        <ProductCard product={product} />
      ) : (
        <div className="bg-gray-200 animate-pulse rounded-xl aspect-[3/4]" />
      )}
    </div>
  );
}