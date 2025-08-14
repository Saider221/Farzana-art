import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    image: "/placeholder.svg",
    caption:
      "Дизайнер Алсу о картине “Чыгарсын Мэн каршы алырга”",
    frameBg: "bg-[#1f1a17]",
  },
  {
    image: "/placeholder.svg",
    caption: "Дизайнер Джамиля о совместном проекте",
    frameBg: "bg-[#1b1b1b]",
  },
  {
    image: "/placeholder.svg",
    caption: "Доктор Лисян о серии приобретенных картин",
    frameBg: "bg-[#2a241f]",
  },
  {
    image: "/placeholder.svg",
    caption:
      "Маркетолог Ольга Кудышкина о пляжной картине",
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
  return (
    <section className="py-20" style={{ backgroundColor: "hsl(var(--luxury-brown))" }}>
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-luxury-beige mb-10">
          ОТЗЫВЫ
        </h2>

        <div className="relative">
          {/* left arrow */}
          <button
            aria-label="prev"
            className="hidden md:flex items-center justify-center absolute -left-10 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 text-white hover:bg-black/30 transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* grid of phones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
            {reviews.map((r) => (
              <div key={r.caption} className="flex flex-col items-center">
                <PhoneMock image={r.image} frameBg={r.frameBg} />
                <p className="mt-4 text-center text-sm text-luxury-beige/80 max-w-[220px]">
                  {r.caption}
                </p>
              </div>
            ))}
          </div>

          {/* right arrow */}
          <button
            aria-label="next"
            className="hidden md:flex items-center justify-center absolute -right-10 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 text-white hover:bg-black/30 transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
