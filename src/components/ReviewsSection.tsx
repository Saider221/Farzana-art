import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const reviews = [
  {
    image: "/commentarion1.png",
    caption: "",
    frameBg: "bg-[#1f1a17]",
  },
  {
    image: "/commentarion2.png",
    caption: "",
    frameBg: "bg-[#1b1b1b]",
  },
  {
    image: "/commentarion3.png",
    caption: "",
    frameBg: "bg-[#2a241f]",
  },
  {
    image: "/commentarion4.png",
    caption: "",
    frameBg: "bg-[#b7aa93]",
  },
  {
    image: "/commentarion5.png",
    caption: "",
    frameBg: "bg-[#b7aa93]",
  },
];

const PhoneMock = ({ image, frameBg }: { image: string; frameBg: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={[
          "relative w-[220px] h-[440px] rounded-[28px] border border-border shadow-md overflow-hidden",
          frameBg,
        ].join(" ")}
      >
        {/* top notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[26px] bg-black/60 rounded-b-2xl" />

        {/* inner screen */}
        <div className="absolute inset-[12px] rounded-[22px] overflow-hidden bg-black/10">
          <img
            src={image}
            alt="review story"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection("left");
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection("right");
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 300);
  };

  
  const getVisibleReviews = () => {
    const visibleReviews = [];
    
   
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 680) {
        visibleReviews.push(reviews[currentIndex]);
      } 
     
      else if (window.innerWidth < 1080) {
        visibleReviews.push(reviews[currentIndex]);
        visibleReviews.push(reviews[(currentIndex + 1) % reviews.length]);
      } 
      
      else {
        for (let i = 0; i < 4; i++) {
          const index = (currentIndex + i) % reviews.length;
          visibleReviews.push(reviews[index]);
        }
      }
    }
    
    return visibleReviews;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section id="reviews" className="py-20" style={{ backgroundColor: "hsl(var(--luxury-brown))" }}>
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-luxury-beige mb-10">
          ОТЗЫВЫ
        </h2>

        <div className="relative">
          {/* left arrow */}
          <button
            aria-label="prev"
            onClick={handlePrev}
            className="hidden md:flex items-center justify-center absolute -left-10 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 text-white hover:bg-black/30 transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* grid of phones with animation */}
          <div className="relative overflow-hidden">
            <div 
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center transition-transform duration-300 ease-in-out ${
                isAnimating ? 
                  (direction === "right" ? "-translate-x-full" : "translate-x-full") : 
                  "translate-x-0"
              }`}
            >
              {visibleReviews.map((r, index) => (
                <div key={`${r.image}-${index}`} className="flex flex-col items-center">
                  <PhoneMock image={r.image} frameBg={r.frameBg} />
                  <p className="mt-4 text-center text-sm text-luxury-beige/80 max-w-[220px]">
                    {r.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* right arrow */}
          <button
            aria-label="next"
            onClick={handleNext}
            className="hidden md:flex items-center justify-center absolute -right-10 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 text-white hover:bg-black/30 transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* dots indicator for mobile */}
          <div className="flex justify-center mt-8 space-x-2 md:hidden">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setDirection(index > currentIndex ? "right" : "left");
                  
                  
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-luxury-gold" : "bg-luxury-beige/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
