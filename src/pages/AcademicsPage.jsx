import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import learningImage from "../assets/program-1.jpg";
import skillsImage from "../assets/program-2.jpg";
import growthImage from "../assets/program-3.jpg";

const learningAreas = [
  {
    id: 1,
    title: "Learning & Discovery",
    description:
      "Encouraging curiosity, active participation, and a strong foundation for lifelong learning.",
    image: learningImage,
    alt: "Learning and discovery",
  },
  {
    id: 2,
    title: "Knowledge & Skills",
    description:
      "Supporting learners as they develop knowledge, practical skills, and independent thinking.",
    image: skillsImage,
    alt: "Developing knowledge and skills",
  },
  {
    id: 3,
    title: "Personal Growth",
    description:
      "Encouraging confidence, responsibility, creativity, and preparation for future opportunities.",
    image: growthImage,
    alt: "Personal growth and achievement",
  },
];

const container = "mx-auto w-[min(1160px,calc(100%-48px))] max-sm:w-[calc(100%-32px)]";

const sectionLabel =
  "inline-block text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-brand-primary";

const sectionHeading =
  "mt-3 text-[clamp(2.2rem,4.2vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-brand-dark";

const sectionParagraph =
  "mt-4 text-[1rem] leading-[1.85] text-[#596278]";

const buttonBase =
  "inline-flex min-h-[48px] items-center justify-center gap-3 rounded-[6px] border px-[22px] py-3 text-[0.9rem] font-bold transition-all duration-200 focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4 motion-reduce:transition-none";

function AcademicsPage() {
  return (
    <main className="overflow-hidden bg-white text-brand-dark selection:bg-brand-sky/30">
      
      {/* Hero */}
      <section className="relative flex min-h-[min(700px,82svh)] items-center overflow-hidden bg-[linear-gradient(100deg,rgb(36_43_71_/_92%)_0%,rgb(36_43_71_/_78%)_50%,rgb(69_81_149_/_50%)_100%),url('/Legacyglobalacademy/academic-hero.jpg')] bg-cover bg-center bg-no-repeat px-[max(24px,calc((100%-1160px)/2))] py-28 text-white max-sm:py-20">
        <div className="relative z-10 w-full max-w-[1160px]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-brand-sky mb-2">
              LEGACY GLOBAL ACADEMY
            </span>

            <h1 className="mt-3 max-w-[820px] text-[clamp(2.8rem,6.8vw,5.2rem)] font-extrabold leading-[1.02] tracking-[-0.055em]">
              Learning Today.
              <span className="block text-brand-sky">
                Leading Tomorrow.
              </span>
            </h1>

            <p className="mt-6 max-w-[620px] text-[1.05rem] leading-[1.8] text-white/85 max-sm:text-[0.98rem]">
              Discover our approach to learning, where knowledge,
              curiosity, and personal development help learners prepare
              for the future.
            </p>

            <div className="mt-8 flex text-black flex-wrap gap-4 max-sm:flex-col max-sm:items-stretch">
              <a
                href="#learning-areas"
                className={`${buttonBase} border-transparent bg-white text-[#303b7c] hover:bg-brand-sky hover:text-brand-dark shadow-sm`}
              >
                Explore Learning
                <span aria-hidden="true">↓</span>
              </a>

              <Link
                to="/contact"
                className={`${buttonBase} border-white/40 bg-transparent text-white hover:border-brand-sky hover:bg-brand-sky hover:text-brand-dark`}
              >
                Contact Our School
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative shapes */}
        <div
          className="pointer-events-none absolute top-0 right-0 h-full w-[40%] max-sm:w-[60%] max-sm:opacity-40"
          aria-hidden="true"
        >
          <span className="absolute top-[10%] -right-[130px] h-[450px] w-[450px] rounded-full border border-white/10 shadow-[0_0_0_45px_rgb(255_255_255_/_2%),0_0_0_90px_rgb(255_255_255_/_2%)]" />
          <span className="absolute top-[20%] right-[22%] h-[65%] w-[2px] rotate-[32deg] bg-[linear-gradient(transparent,rgb(114_201_243_/_50%),transparent)]" />
        </div>
      </section>

      {/* Introduction */}
      <section
        className={`${container} grid grid-cols-[1fr_1.1fr] items-center gap-[clamp(40px,7vw,88px)] py-28 max-lg:grid-cols-1 max-lg:py-20 max-sm:py-16`}
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative min-w-0"
        >
          <div className="overflow-hidden rounded-[8px] bg-[#f5f7fb]">
            <img
              src={`${import.meta.env.BASE_URL}academic-about.jpg`}
              alt="Learning environment at Legacy Global Academy"
              loading="lazy"
              className="block aspect-[4/4.2] w-full object-cover transition-transform duration-500 hover:scale-102 max-sm:aspect-[16/10]"
            />
          </div>

          <div className="absolute right-5 bottom-5 left-5 flex items-center gap-3 rounded-[6px] border border-white/20 bg-brand-dark/90 px-5 py-4 text-sm font-semibold text-white backdrop-blur-md">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-sky" />
            <span>Where Dreams Take Flight</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="min-w-0"
        >
          <span className={sectionLabel}>
            OUR LEARNING APPROACH
          </span>

          <h2 className={sectionHeading}>
            Building knowledge.
            <span className="text-brand-primary">
              {" "}Inspiring potential.
            </span>
          </h2>

          <div className="space-y-4 pt-2">
            <p className={sectionParagraph}>
              Education is about more than memorising information. It is
              also about developing understanding, asking questions,
              solving problems, and learning how to work with others.
            </p>

            <p className={sectionParagraph}>
              At Legacy Global Academy, our educational approach aims to
              support learners as they build knowledge, develop
              character, and discover their potential.
            </p>
          </div>

          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[0.95rem] font-bold text-brand-primary no-underline transition-colors hover:text-[#303b7c] focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4"
            >
              Learn about our school
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Learning Areas (Card-Free Flow) */}
      <section
        id="learning-areas"
        className="bg-[#f8fafc] py-28 max-lg:py-20 max-sm:py-16"
      >
        <div className={container}>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-16 max-w-[700px] text-center max-sm:mb-10"
          >
            <span className={sectionLabel}>
              LEARNING AT LEGACY
            </span>

            <h2 className={sectionHeading}>
              A foundation for{" "}
              <span className="text-brand-primary">the future</span>
            </h2>

            <p className={`${sectionParagraph} mx-auto max-w-[600px]`}>
              We value a learning environment that encourages discovery,
              skill development, and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-1 max-lg:gap-12">
            {learningAreas.map((area, index) => (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group min-w-0"
                key={area.id}
              >
                <div className="overflow-hidden rounded-[8px] bg-[#e7edf6] mb-6">
                  <img
                    src={area.image}
                    alt={area.alt}
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
        </div>
      </section>

      {/* Values */}
      <section className="py-28 max-lg:py-20 max-sm:py-16">
        <div className={`${container} grid grid-cols-[1fr_0.9fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-12`}>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={sectionLabel}>
              BEYOND THE CLASSROOM
            </span>

            <h2 className={`${sectionHeading} max-w-[540px]`}>
              Education that supports{" "}
              <span className="text-brand-primary">
                the whole learner.
              </span>
            </h2>

            <p className={sectionParagraph}>
              Learning can help young people develop confidence,
              communicate effectively, think critically, and take
              responsibility for their growth.
            </p>
          </motion.div>

          <div className="border-t border-[#e2e7f0]">
            {[
              { num: "01", title: "Curiosity", desc: "Ask questions, explore ideas, and keep learning." },
              { num: "02", title: "Character", desc: "Develop responsibility, respect, and integrity." },
              { num: "03", title: "Growth", desc: "Build confidence and prepare for future opportunities." },
            ].map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={item.num} 
                className="flex gap-6 border-b border-[#e2e7f0] py-7 items-start transition-colors hover:bg-[#fafbfc] px-3"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] bg-[#f0f4f9] text-[0.85rem] font-bold text-brand-primary">
                  {item.num}
                </span>

                <div>
                  <h3 className="text-[1.1rem] font-bold text-brand-dark">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[0.95rem] leading-[1.7] text-[#596278]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-brand-dark py-24 text-white max-sm:py-16">
        <div className={`${container} flex items-center justify-between gap-12 max-lg:flex-col max-lg:items-start`}>
          <div>
            <span className="inline-block text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-brand-sky mb-2">
              LEGACY GLOBAL ACADEMY
            </span>

            <h2 className="my-3 text-[clamp(2.4rem,4.5vw,3.6rem)] font-extrabold leading-[1.1] tracking-[-0.045em]">
              Every learning journey begins with a step.
            </h2>

            <p className="m-0 max-w-[560px] text-[1rem] leading-[1.8] text-white/75">
              Get in touch with our school to learn more about Legacy
              Global Academy.
            </p>
          </div>

          <Link
            to="/contact"
            className={`${buttonBase} shrink-0 bg-white text-[#303b7c] hover:bg-brand-sky`}
          >
            Get in Touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AcademicsPage;