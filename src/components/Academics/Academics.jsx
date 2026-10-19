import { motion } from "framer-motion";
import academicImage1 from "../../assets/program-1.jpg";
import academicImage4 from "../../assets/academicImage-4.png";
import academicImage3 from "../../assets/program-2.jpg";

const academicAreas = [
  {
    title: "Learning & Discovery",
    description:
      "Encouraging curiosity, active participation, and a strong foundation for lifelong learning.",
    image: academicImage1,
    imageAlt: "Students learning and exploring new ideas",
  },
  {
    title: "Knowledge & Skills",
    description:
      "Supporting learners as they develop knowledge, practical skills, and independent thinking.",
    image: academicImage4,
    imageAlt: "Learners developing their knowledge and skills",
  },
  {
    title: "Growth & Achievement",
    description:
      "Helping learners build confidence, character, and readiness for future opportunities.",
    image: academicImage3,
    imageAlt: "Learners working toward their educational goals",
  },
];

const containerClass = "mx-auto w-[min(1160px,calc(100%-48px))] max-sm:w-[calc(100%-32px)]";

const sectionLabel =
  "inline-block text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-brand-primary";

const sectionHeading =
  "mt-3 text-[clamp(2.2rem,4.2vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-brand-dark";

const sectionParagraph =
  "mt-4 text-[1rem] leading-[1.85] text-[#596278]";

function Academics() {
  return (
    <section
      className={`${containerClass} py-24 max-lg:py-16 max-sm:py-12`}
      id="academics"
    >
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-16 max-w-[700px] text-center max-sm:mb-10"
      >
        <span className={sectionLabel}>
          OUR ACADEMICS
        </span>

        <h2 className={sectionHeading}>
          Learning for <span className="text-brand-primary">Every Future</span>
        </h2>

        <p className={`${sectionParagraph} mx-auto max-w-[620px]`}>
          We aim to create a learning environment where curiosity grows,
          knowledge develops, and every learner is encouraged to reach
          their potential.
        </p>
      </motion.div>

      <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-1 max-lg:gap-12">
        {academicAreas.map((area, index) => (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group min-w-0"
            key={area.title}
          >
            <div className="overflow-hidden rounded-[8px] bg-[#e7edf6] mb-6">
              <img
                src={area.image}
                alt={area.imageAlt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            <div className="border-t-2 border-brand-primary/40 pt-4">
              <span className="text-[0.74rem] font-extrabold text-brand-primary tracking-wider uppercase">
                Area {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-2 text-xl font-bold leading-[1.3] text-brand-dark">
                {area.title}
              </h3>

              <p className="mt-3 text-[0.96rem] leading-[1.8] text-[#596278]">
                {area.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Academics;