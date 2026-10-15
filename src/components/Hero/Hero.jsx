import "./Hero.css";
import darkArrow from "../../assets/dark-arrow.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="hero container" id="hero">
      <div className="hero-text">
        <p className="hero-eyebrow">LEGACY GLOBAL ACADEMY</p>

        <h1>
          <TypeAnimation
            sequence={[
              "Where Dreams Take Flight.",
              2500,
              "Inspiring Minds. Shaping Futures.",
              2500,
              "Learning Today. Leading Tomorrow.",
              2500,
            ]}
            wrapper="span"
            speed={50}
            cursor={true}
            repeat={Infinity}
          />
        </h1>

        <p className="hero-description">
          Discover a learning community where knowledge, character, and
          curiosity come together to help learners grow and prepare for
          tomorrow.
        </p>

        <a href="#about" className="hero-button">
          Discover Our School
          <img src={darkArrow} alt="" aria-hidden="true" />
        </a>
      </div>

      <a
        href="#program"
        className="hero-scroll"
        aria-label="Scroll to academics"
      >
        <span />
        Scroll to explore
      </a>
    </section>
  );
};

export default Hero;