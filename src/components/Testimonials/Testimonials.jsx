
import { useRef, useState } from "react";
import "./Testimonials.css";

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

const Testimonials = () => {
  const slider = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const updateSlider = (index) => {
    const lastSlide = testimonials.length - 1;
    const nextIndex = Math.max(0, Math.min(index, lastSlide));

    setCurrentSlide(nextIndex);

    if (slider.current) {
      slider.current.style.transform = `translateX(-${nextIndex * 25}%)`;
    }
  };

  const slideForward = () => {
    if (currentSlide < testimonials.length - 1) {
      updateSlider(currentSlide + 1);
    }
  };

  const slideBackward = () => {
    if (currentSlide > 0) {
      updateSlider(currentSlide - 1);
    }
  };

  return (
    <section
      className="testimonials"
      aria-label="Testimonials from our community"
    >
      <button
        type="button"
        className="testimonial-btn back-btn"
        onClick={slideBackward}
        disabled={currentSlide === 0}
        aria-label="Previous testimonial"
      >
        <img src={back_icon} alt="" />
      </button>

      <button
        type="button"
        className="testimonial-btn next-btn"
        onClick={slideForward}
        disabled={currentSlide === testimonials.length - 1}
        aria-label="Next testimonial"
      >
        <img src={next_icon} alt="" />
      </button>

      <div className="slider">
        <ul ref={slider}>
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <article className="slide">
                <div className="user-info">
                  <img
                    className="testimonial-avatar"
                    src={testimonial.image}
                    alt={testimonial.alt}
                    loading="lazy"
                  />

                  <div className="user-details">
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.location}</span>
                  </div>
                </div>

                <p>{testimonial.message}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="testimonial-pagination"
        aria-label="Testimonial position"
      >
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            type="button"
            className={`testimonial-dot ${
              currentSlide === index ? "active" : ""
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={currentSlide === index ? "step" : undefined}
            onClick={() => updateSlider(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

