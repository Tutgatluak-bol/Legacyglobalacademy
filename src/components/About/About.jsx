
import "./About.css";
import aboutImg from "../../assets/about.png";
import playIcon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <section className="about" aria-labelledby="about-heading">
      <div className="about-left">
        <img
          src={aboutImg}
          alt="Learning environment at Legacy Global Academy"
          className="about-img"
          loading="lazy"
        />

        <button
          type="button"
          className="about-play-button"
          onClick={() => setPlayState(true)}
          aria-label="Play the Legacy Global Academy introduction video"
        >
          <img src={playIcon} alt="" className="play-icon" />
        </button>
      </div>

      <div className="about-right">
        <span className="about-eyebrow">ABOUT OUR SCHOOL</span>

        <h2 id="about-heading">
          Nurturing potential.
          <span> Inspiring the future.</span>
        </h2>

        <p>
          At Legacy Global Academy, we believe education should encourage
          curiosity, build knowledge, and support the growth of every
          learner.
        </p>

        <p>
          Our vision is to create a learning environment where learners
          can develop their abilities, strengthen their character, and
          prepare for future opportunities.
        </p>

        <a href="/about" className="about-learn-more">
          Discover Our School <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
};

export default About;
