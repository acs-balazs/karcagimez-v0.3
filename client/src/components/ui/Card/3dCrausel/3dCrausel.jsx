import { useMemo } from "react";
import { getImageUrl } from "../../../../services/api.js";
import Formation from "./formation.jsx";

// Alapértelmezett, gyönyörű méhészeti és természeti fotók (Unsplash)
const defaultHoneyWorks = [
  {
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    title: "Akácméz üvegben",
  },
  {
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800&q=80",
    title: "Természetes lépesméz",
  },
  {
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80",
    title: "Csurgatott aranyló méz",
  },
  {
    image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=800&q=80",
    title: "Termelői finomság",
  },
  {
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    title: "Virágos mező",
  },
  {
    image: "https://images.unsplash.com/photo-1568644396922-5c3bfae12521?auto=format&fit=crop&w=800&q=80",
    title: "Szorgos méhecske",
  },
  {
    image: "https://images.unsplash.com/photo-1535572290543-960a8046f5af?auto=format&fit=crop&w=800&q=80",
    title: "Méhészeti keret",
  },
  {
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    title: "Vegyes virágméz",
  },
  {
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80",
    title: "Napraforgó mező",
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Hársillatú táj",
  },
  {
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    title: "Erdei kaptárak",
  },
  {
    image: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?auto=format&fit=crop&w=800&q=80",
    title: "Hegyi legelők",
  },
  {
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    title: "Tiszta természet",
  },
  {
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    title: "Édes harmónia",
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    title: "Friss reggeli mézzel",
  },
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    title: "Karcagi dűlők",
  },
];

export function ThreeDCarousel({ works = [] }) {
  const formattedWorks = useMemo(() => {
    if (!works || works.length === 0) {
      return defaultHoneyWorks;
    }

    // Ha termékek jönnek át a props-ban, feloldjuk a képeket és címeket
    const mapped = works.map((item, idx) => ({
      title: item.name || item.title || `Karcagi Méz #${idx + 1}`,
      image: item.image ? getImageUrl(item.image) : defaultHoneyWorks[idx % defaultHoneyWorks.length].image,
    }));

    // Ha kevés a termék (pl. 3-6 db), kiegészítjük az illusztrációs képekkel 12-16 kártyára a látványos 3D térélményért
    if (mapped.length < 12) {
      const needed = 16 - mapped.length;
      return [...mapped, ...defaultHoneyWorks.slice(0, needed)];
    }

    return mapped;
  }, [works]);

  return (
    <div className="relative h-[560px] w-full overflow-hidden rounded-2xl border border-system-grey-200/50 shadow-2xl md:h-[650px]">
      <Formation works={formattedWorks} />
    </div>
  );
}

export default ThreeDCarousel;
