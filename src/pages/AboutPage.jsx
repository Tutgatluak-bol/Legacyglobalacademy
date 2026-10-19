import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const coreValues = [
  {
    title: "Excellence",
    description:
      "Encouraging learners to pursue knowledge, develop their abilities, and give their best in their learning journey.",
  },
  {
    title: "Integrity",
    description:
      "Promoting honesty, responsibility, respect, and doing what is right in everyday school life.",
  },
  {
    title: "Creativity",
    description:
      "Creating opportunities for learners to think critically, explore ideas, and develop practical skills.",
  },
  {
    title: "Community",
    description:
      "Building a welcoming environment where learners, families, and educators can work together.",
  },
];

const containerClasses = "mx-auto w-[min(1160px,calc(100%-48px))] max-sm:w-[calc(100%-32px)]";

const labelClasses =
  "inline-block text-[0.74rem] font-extrabold uppercase leading-[1.5] tracking-[0.2em] text-brand-primary";

const buttonClasses =
  "inline-flex min-h-[48px] items-center justify-center gap-[10px] rounded-[6px] border border-transparent px-[22px] py-3 text-center text-[0.9rem] font-bold leading-[1.4] no-underline transition-all duration-200 focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4 motion-reduce:transition-none max-sm:w-full";

const headingClasses =
  "my-3 mb-5 text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-brand-dark max-sm:text-[clamp(1.9rem,8vw,2.5rem)]";

const paragraphClasses =
  "text-[1rem] leading-[1.85] text-[#596278]";

function AboutPage() {
  return (
    <main className="overflow-clip bg-white text-brand-dark selection:bg-brand-sky/30">

      {/* Hero Section */}
      <section
        className="relative isolate flex min-h-[min(700px,82svh)] items-center overflow-hidden bg-[#242b47] bg-cover bg-center bg-no-repeat text-white max-sm:min-h-[85svh]"
        style={{ backgroundImage: 'url("/Legacyglobalacademy/about-hero.png")' }}
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(26_33_63_/_94%)_0%,rgb(36_43_71_/_80%)_55%,rgb(36_43_71_/_45%)_100%)] max-sm:bg-[linear-gradient(90deg,rgb(26_33_63_/_95%),rgb(36_43_71_/_85%))]" />

        <div className={`${containerClasses} py-28 pb-32 max-sm:py-20`}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`${labelClasses} text-brand-sky mb-2`}>
              Get to know us
            </span>

            <h1 className="mt-3 mb-6 max-w-[840px] text-[clamp(2.8rem,6.8vw,5.2rem)] font-extrabold leading-[1.02] tracking-[-0.055em]">
              More than a school.
              <br />
              <span className="text-brand-sky">A place to grow.</span>
            </h1>

            <p className="m-0 max-w-[600px] text-[1.05rem] leading-[1.8] text-white/85 max-sm:text-[0.98rem]">
              Discover the values, vision, and commitment behind Legacy Global
              Academy — where every learning journey holds the potential for
              something extraordinary.
            </p>

            <div className="mt-8 text-black flex flex-wrap gap-4 max-sm:flex-col max-sm:items-stretch">
              <a
                href="#our-story"
                className={`${buttonClasses} bg-white text-black hover:bg-brand-sky hover:text-brand-dark shadow-sm`}
              >
                Discover our story <span aria-hidden="true">↓</span>
              </a>

              <Link
                to="/contact"
                className={`${buttonClasses} border-white/40 bg-transparent text-white hover:border-brand-sky hover:bg-brand-sky hover:text-brand-dark`}
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute right-0 bottom-0 left-0 flex justify-between gap-4 border-t border-white/15 px-[max(24px,calc((100%-1160px)/2))] py-5 text-[0.78rem] font-medium text-white/70 max-sm:flex-col max-sm:gap-1 max-sm:px-5 max-sm:py-3">
          <span>Legacy Global Academy</span>
          <span>Where Dreams Take Flight</span>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-28 max-lg:py-20 max-sm:py-16">
        <div className={`${containerClasses} grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-[clamp(40px,7vw,88px)] max-lg:grid-cols-1 max-lg:gap-12`}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            <div className="overflow-hidden rounded-[8px] bg-[#f5f7fb]">
              <img
                src="/Legacyglobalacademy/about-legacy.jpg"
                alt="School community at Legacy Global Academy"
                loading="lazy"
                className="block aspect-[4/4.2] w-full object-cover transition-transform duration-500 hover:scale-102 max-sm:aspect-[16/10]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className={labelClasses}>Our story</span>

            <h2 className={headingClasses}>
              Every great future begins with{" "}
              <span className="text-brand-primary">learning.</span>
            </h2>

            <div className="space-y-4 pt-2">
              <p className={paragraphClasses}>
                Legacy Global Academy is a school committed to the journey of
                education, personal development, and lifelong learning.
              </p>

              <p className={paragraphClasses}>
                We believe education is about more than acquiring knowledge. It
                is also about developing character, discovering potential,
                nurturing curiosity, and preparing learners for the opportunities
                and responsibilities of the future.
              </p>

              <p className={paragraphClasses}>
                Through a supportive learning environment, our aim is to encourage
                every learner to grow in confidence, build valuable skills, and
                pursue their aspirations.
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/academics"
                className="inline-flex items-center gap-2 text-[0.95rem] font-bold text-brand-primary no-underline transition-colors hover:text-[#303b7c] focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4"
              >
                Explore our academics <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-[#f8fafc] py-28 max-lg:py-20 max-sm:py-16">
        <div className={containerClasses}>
          <motion.header 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-16 max-w-[700px] text-center max-sm:mb-10"
          >
            <span className={labelClasses}>Our purpose</span>

            <h2 className={headingClasses}>
              Guided by purpose.
              <br />
              <span className="text-brand-primary">
                Inspired by possibility.
              </span>
            </h2>

            <p className={`${paragraphClasses} mx-auto mt-2 max-w-[600px]`}>
              Our direction is shaped by a commitment to learning, character,
              and the potential of every learner.
            </p>
          </motion.header>

          <div className="grid grid-cols-2 gap-[clamp(32px,6vw,80px)] max-md:grid-cols-1">
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t-2 border-brand-primary pt-6"
            >
              <span className={labelClasses}>Our mission</span>

              <h3 className="mt-3 mb-4 text-[clamp(1.4rem,2.5vw,1.9rem)] font-bold leading-[1.25] tracking-[-0.025em]">
                Empowering learners through education.
              </h3>

              <p className="m-0 text-[0.96rem] leading-[1.8] text-[#596278]">
                To support meaningful learning, nurture good character, and
                encourage learners to develop the knowledge, skills, and
                confidence needed to contribute positively to their communities.
              </p>
            </motion.article>

            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t-2 border-brand-sky pt-6"
            >
              <span className={labelClasses}>Our vision</span>

              <h3 className="mt-3 mb-4 text-[clamp(1.4rem,2.5vw,1.9rem)] font-bold leading-[1.25] tracking-[-0.025em]">
                Inspiring a future full of possibilities.
              </h3>

              <p className="m-0 text-[0.96rem] leading-[1.8] text-[#596278]">
                To aspire to be a learning community that inspires curiosity,
                develops responsible individuals, and prepares learners to
                pursue their dreams and navigate an evolving world.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-28 max-lg:py-20 max-sm:py-16">
        <div className={containerClasses}>
          <div className="mb-12 flex items-end justify-between gap-8 max-lg:flex-col max-lg:items-start max-lg:gap-4">
            <div>
              <span className={labelClasses}>What guides us</span>
              <h2 className={`${headingClasses} mb-0 max-w-[580px]`}>
                Values that shape{" "}
                <span className="text-brand-primary">the journey.</span>
              </h2>
            </div>

            <p className={`${paragraphClasses} m-0 max-w-[420px]`}>
              The principles we promote help create a positive learning culture
              and guide the way we grow together.
            </p>
          </div>

          <div className="border-t border-[#e2e7f0]">
            {coreValues.map((value, index) => (
              <motion.article
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="grid grid-cols-[60px_minmax(160px,0.6fr)_minmax(0,1.4fr)] items-start gap-6 border-b border-[#e2e7f0] py-8 transition-colors hover:bg-[#fafbfc] px-4 max-sm:grid-cols-[36px_minmax(0,1fr)] max-sm:gap-x-4 max-sm:gap-y-2 max-sm:py-6"
                key={value.title}
              >
                <span className="pt-1 text-[0.85rem] font-extrabold text-brand-primary tracking-wider">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="m-0 text-[1.15rem] font-bold leading-[1.4] text-brand-dark">
                  {value.title}
                </h3>

                <p className="m-0 max-w-[680px] text-[0.95rem] leading-[1.75] text-[#596278] max-sm:col-start-2">
                  {value.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="grid grid-cols-2 bg-[#f8fafc] max-lg:grid-cols-1">
        <div className="min-h-[560px] bg-[#e7edf6] max-lg:min-h-[380px]">
          <img
            src="/Legacyglobalacademy/about-learning.jpg"
            alt="Learners taking part in an educational activity"
            loading="lazy"
            className="block h-full w-full object-cover max-lg:h-[380px]"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[700px] self-center px-[clamp(32px,7vw,90px)] py-24 max-lg:py-16 max-sm:px-6"
        >
          <span className={labelClasses}>Our approach</span>

          <h2 className={`${headingClasses} mb-4`}>
            Learning beyond{" "}
            <span className="text-brand-primary">the classroom.</span>
          </h2>

          <p className={`${paragraphClasses} m-0`}>
            Education becomes more meaningful when learners are encouraged to
            ask questions, develop practical skills, work with others, and
            connect knowledge to the world around them.
          </p>

          <ul className="my-8 grid list-none gap-3.5 p-0">
            {[
              "A supportive and respectful learning environment",
              "Opportunities to develop knowledge and skills",
              "Encouragement to build confidence and character",
              "A shared commitment to continued growth"
            ].map((item, idx) => (
              <li key={idx} className="relative pl-7 text-[0.95rem] leading-[1.65] text-brand-dark font-medium before:absolute before:left-0 before:font-extrabold before:text-brand-primary before:content-['✓']">
                {item}
              </li>
            ))}
          </ul>

          <Link
            to="/academics"
            className={`${buttonClasses} bg-brand-primary text-white hover:bg-[#303b7c]`}
          >
            Discover our academics <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-brand-dark py-24 text-white max-sm:py-16">
        <div className={`${containerClasses} flex items-center justify-between gap-12 max-lg:flex-col max-lg:items-start`}>
          <div>
            <span className={`${labelClasses} text-brand-sky mb-2`}>
              Your journey starts here
            </span>

            <h2 className="my-3 max-w-[650px] text-[clamp(2.2rem,4.5vw,3.8rem)] font-extrabold leading-[1.1] tracking-[-0.045em]">
              Every dream deserves{" "}
              <span className="text-brand-sky">room to grow.</span>
            </h2>

            <p className="m-0 max-w-[560px] text-[1rem] leading-[1.8] text-white/75">
              Learn more about Legacy Global Academy and take the next step in
              exploring our school community.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3.5 max-sm:w-full max-sm:flex-col">
            <Link
              to="/admissions"
              className={`${buttonClasses} bg-white text-[#303b7c] hover:bg-brand-sky`}
            >
              Explore admissions <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/gallery"
              className={`${buttonClasses} border-white/30 bg-transparent text-white hover:border-brand-sky hover:bg-brand-sky hover:text-brand-dark`}
            >
              View our gallery
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default AboutPage;