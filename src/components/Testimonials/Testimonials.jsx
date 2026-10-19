import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const testimonials = [
  {
    id: 1,
    name: "TUT GATLUAK",
    location: "South Sudan",
    image: user_1,
    alt: "Tut Gatluak",
    message:
      "A supportive learning environment helps students build confidence, develop essential skills, and work towards their academic goals. Quality education creates opportunities for young people to grow and prepare for a brighter future.",
  },
  {
    id: 2,
    name: "ATHIAN BAYAK",
    location: "South Sudan",
    image: user_2,
    alt: "Athian Bayak",
    message:
      "Education is most meaningful when students are encouraged to think creatively, ask questions, and discover their potential. A positive school community can inspire learners to become responsible and confident individuals.",
  },
  {
    id: 3,
    name: "AMOS KONG",
    location: "South Sudan",
    image: user_3,
    alt: "Amos Kong",
    message:
      "Every child deserves an opportunity to learn, explore new ideas, and develop strong values. A commitment to learning, discipline, and personal growth can help students build a strong foundation for their future.",
  },
  {
    id: 4,
    name: "LOL AYUAL",
    location: "South Sudan",
    image: user_4,
    alt: "Lol Ayual",
    message:
      "Strong partnerships between schools, families, and communities help create better learning opportunities. By encouraging curiosity, respect, and continuous improvement, we can help prepare the next generation for greater possibilities.",
  },
];

const containerClass = "mx-auto w-[min(1000px,calc(100%-48px))] max-sm:w-[calc(100%-32px)]";

const buttonClasses =
  "absolute z-10 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-[#e2e7f0] bg-white shadow-sm transition-all duration-200 hover:border-brand-primary hover:bg-brand-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4 max-sm:h-10 max-sm:w-10";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideForward = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const slideBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className={`${containerClass} relative py-24 max-lg:py-16 max-sm:py-12 text-brand-dark`}
      aria-label="Testimonials from our community"
    >

      {/* Testimonial Stage */}
      <div className="relative px-16 max-sm:px-0">
        {/* Previous button */}
        <button
          type="button"
          className={`${buttonClasses} left-0 max-sm:-left-2`}
          onClick={slideBackward}
          disabled={currentIndex === 0}
          aria-label="Previous testimonial"
        >
          <img
            src={back_icon}
            alt=""
            className="h-4 w-4 object-contain"
          />
        </button>

        {/* Next button */}
        <button
          type="button"
          className={`${buttonClasses} right-0 max-sm:-right-2`}
          onClick={slideForward}
          disabled={currentIndex === testimonials.length - 1}
          aria-label="Next testimonial"
        >
          <img
            src={next_icon}
            alt=""
            className="h-4 w-4 object-contain"
          />
        </button>

        {/* Animated Slide Content */}
        <div className="overflow-hidden min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.article
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="max-w-[760px] mx-auto text-center"
            >
              <div className="mb-6 flex flex-col items-center justify-center">
                <img
                  className="h-20 w-20 rounded-full border-2 border-brand-sky object-cover shadow-sm mb-4"
                  src={currentTestimonial.image}
                  alt={currentTestimonial.alt}
                  loading="lazy"
                />
                <h3 className="text-[1.15rem] font-bold text-brand-primary tracking-tight">
                  {currentTestimonial.name}
                </h3>
                <span className="text-[0.85rem] font-medium text-[#596278] mt-0.5">
                  {currentTestimonial.location}
                </span>
              </div>

              <p className="m-0 text-[clamp(1.05rem,1.8vw,1.25rem)] leading-[1.85] text-[#596278] italic font-normal">
                &ldquo;{currentTestimonial.message}&rdquo;
              </p>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination Dots */}
      <div
        className="mt-12 flex items-center justify-center gap-3"
        aria-label="Testimonial position"
      >
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            type="button"
            className={`h-2.5 rounded-full border-0 transition-all duration-300 focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4 ${
              currentIndex === index
                ? "w-8 bg-brand-primary"
                : "w-2.5 bg-[#cbd5e4] hover:bg-[#94a3b8]"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={currentIndex === index ? "step" : undefined}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;