import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const academicHero = `${import.meta.env.BASE_URL}academic-hero.jpg`;

const foundationSubjects = [
  "English",
  "Mathematics",
  "Biology",
  "Chemistry",
  "Physics",
  "History",
  "Geography",
  "ICT",
  "Agriculture",
  "Commerce",
  "ACCOUNTING",
  "CRE",
  "LITERATURE"
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
      <section
      className="relative flex min-h-[min(700px,82svh)] items-center overflow-hidden
      bg-cover bg-center bg-no-repeat px-[max(24px,calc((100%-1160px)/2))]
      py-28 text-white max-sm:py-20"
      style={{
        backgroundImage: `linear-gradient(
          100deg,
          rgb(36 43 71 / 92%) 0%,
          rgb(36 43 71 / 78%) 50%,
          rgb(69 81 149 / 50%) 100%
        ), url("${academicHero}")`,
      }}
    >
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
              Strong Foundations.
              <span className="block text-brand-sky">
                Brighter Futures.
              </span>
            </h1>

            <p className="mt-6 max-w-[620px] text-[1.05rem] leading-[1.8] text-white/85 max-sm:text-[0.98rem]">
              Our Senior 1–2 Foundation curriculum gives students a broad
              academic base before they choose a specialized pathway in
              Senior 3–4.
            </p>

            <div className="mt-8 flex text-black flex-wrap gap-4 max-sm:flex-col max-sm:items-stretch">
              <a
                href="#learning-areas"
                className={`${buttonBase} border-transparent bg-white text-[#303b7c] hover:bg-brand-sky hover:text-brand-dark shadow-sm`}
              >
                Explore Subjects
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
            SENIOR 1–2 FOUNDATION
          </span>

          <h2 className={sectionHeading}>
            Building knowledge.
            <span className="text-brand-primary">
              {" "}Inspiring potential.
            </span>
          </h2>

          <div className="space-y-4 pt-2">
            <p className={sectionParagraph}>
              Senior 1 and Senior 2 introduce students to a broad range of
              subjects, helping them develop essential knowledge, study
              habits, and the confidence to explore different areas of learning.
            </p>

            <p className={sectionParagraph}>
              This foundation prepares students to make a more informed
              choice between the Science Stream and Arts Stream as they
              progress into Senior 3 and Senior 4.
            </p>
          </div>

          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[0.95rem] font-bold text-brand-primary no-underline transition-colors hover:text-[#303b7c] focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4"
            >
              Explore our school
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Foundation Subjects */}
      <section
        id="learning-areas"
        className="scroll-mt-24 bg-[#f8fafc] py-28 max-lg:py-20 max-sm:py-16"
      >
        <div className={container}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-16 max-w-[700px] text-center max-sm:mb-10"
          >
            <span className={sectionLabel}>SENIOR 1–2 CURRICULUM</span>

            <h2 className={sectionHeading}>
              The Foundation
              <span className="text-brand-primary"> curriculum.</span>
            </h2>

            <p className={`${sectionParagraph} mx-auto max-w-[600px]`}>
              A general curriculum designed to give students a strong
              academic base before they choose a specialized pathway.
            </p>

            <div className="mt-6 flex justify-center">
              <span className="inline-flex items-center rounded-full border border-brand-primary/15 bg-white px-4 py-2 text-sm font-bold text-brand-primary">
                01 · Senior 1–2
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-0 border-t border-[#e2e7f0] md:grid-cols-3 max-sm:grid-cols-1">
            {foundationSubjects.map((subject, index) => (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="flex items-center gap-4 border-b border-[#e2e7f0] py-6"
                key={subject}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-brand-primary shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-base font-bold text-brand-dark sm:text-lg">
                  {subject}
                </h3>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm leading-6 text-[#69738b]">
            The list currently displays the 13 subjects provided.
          </p>
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
              { title: "Curiosity", desc: "Ask questions, explore ideas, and keep learning." },
              { title: "Character", desc: "Develop responsibility, respect, and integrity." },
              { title: "Growth", desc: "Build confidence and prepare for future opportunities." },
            ].map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={item.title} 
                className="border-b border-[#e2e7f0] py-7 transition-colors hover:bg-[#fafbfc] px-3"
              >
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
              Choose your next learning pathway.
            </h2>

            <p className="m-0 max-w-[560px] text-[1rem] leading-[1.8] text-white/75">
              After the Foundation stage, students can explore the Science
              Stream or Arts Stream for Senior 3–4.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/academics/sciences"
              className={`${buttonBase} shrink-0 border border-brand-sky bg-brand-sky text-[#303b7c] hover:bg-white`}
            >
              Science Stream <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/academics/arts"
              className={`${buttonBase} shrink-0 border border-white/40 bg-transparent text-white hover:border-brand-sky hover:bg-brand-sky hover:text-brand-dark`}
            >
              Arts Stream <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AcademicsPage;