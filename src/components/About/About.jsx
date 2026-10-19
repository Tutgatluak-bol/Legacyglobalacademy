import { motion } from "framer-motion";
import aboutImg from "../../assets/about.png";
import playIcon from "../../assets/play-icon.png";

const containerClass = "mx-auto w-[min(1160px,calc(100%-48px))] max-sm:w-[calc(100%-32px)]";

const sectionLabel =
  "inline-block text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-brand-primary";

const sectionHeading =
  "mt-3 text-[clamp(2.2rem,4.2vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-brand-dark";

const sectionParagraph =
  "mt-4 text-[1rem] leading-[1.85] text-[#596278]";

const About = ({ setPlayState }) => {
  return (
    <section
      className={`${containerClass} grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-[clamp(40px,7vw,88px)] py-24 max-lg:grid-cols-1 max-lg:py-16 max-sm:py-12`}
      aria-labelledby="about-heading"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative min-w-0"
      >
        <div className="overflow-hidden rounded-[8px] bg-[#e7edf6]">
          <img
            src={aboutImg}
            alt="Learning environment at Legacy Global Academy"
            className="block aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            loading="lazy"
          />
        </div>

        <button
          type="button"
          className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-brand-primary/90 p-0 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-brand-primary focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4 motion-reduce:transition-none max-sm:h-14 max-sm:w-14"
          onClick={() => setPlayState(true)}
          aria-label="Play the Legacy Global Academy introduction video"
        >
          <img
            src={playIcon}
            alt=""
            className="block h-6 w-6 object-contain max-sm:h-5 max-sm:w-5"
          />
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="min-w-0"
      >
        <span className={sectionLabel}>
          ABOUT OUR SCHOOL
        </span>

        <h2
          id="about-heading"
          className={sectionHeading}
        >
          Nurturing potential.
          <span className="text-brand-primary">
            {" "}Inspiring the future.
          </span>
        </h2>

        <div className="space-y-4 pt-2">
          <p className={sectionParagraph}>
            At Legacy Global Academy, we believe education should encourage
            curiosity, build knowledge, and support the growth of every
            learner.
          </p>

          <p className={sectionParagraph}>
            Our vision is to create a learning environment where learners
            can develop their abilities, strengthen their character, and
            prepare for future opportunities.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-[0.95rem] font-bold text-brand-primary no-underline transition-colors hover:text-[#303b7c] focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4"
          >
            Discover Our School

            <span aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;