import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Carousel({ items, interval = 1500, className = "" }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    useEffect(() => {
        if (!emblaApi) return;
        const timer = setInterval(() => emblaApi.scrollNext(), interval);
        return () => clearInterval(timer);
    }, [emblaApi, interval]);

    return (
        <div className={`overflow-hidden ${className}`} ref={emblaRef}>
            <div className="flex">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="flex-none w-full flex justify-center px-8"
                    >
                        <img
                            src={item}
                            alt={`Slide ${i}`}
                            className="h-64 object-contain rounded-2xl"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
