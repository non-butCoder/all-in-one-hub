import { useEffect, useState } from "react";
import shopSlide1 from "@/assets/shop-slide-1.jpg";
import shopSlide2 from "@/assets/shop-slide-2.png";
import shopSlide3 from "@/assets/shop-slide-3.png";
import shopSlide4 from "@/assets/shop-slide-4.jpg";
import shopSlide5 from "@/assets/shop-slide-5.png";

const slides = [shopSlide1, shopSlide2, shopSlide3, shopSlide4, shopSlide5];

const ShopSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden pt-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 pt-20 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide}
            alt={`Bulbul Computer Centre - Shop View ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-background/90" />
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ShopSlideshow;
