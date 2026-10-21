
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const artsSubjects = [
  "History",
  "Geography",
  "Commerce",
  "Literature",
  "Religious Studies",
  "Accounting",
];

const container =
  "mx-auto w-[min(1160px,calc(100%-48px))] max-sm:w-[calc(100%-32px)]";

const sectionLabel =
  "inline-block text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-brand-primary";

const sectionHeading =
  "mt-3 text-[clamp(2.2rem,4.2vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-brand-dark";

const sectionParagraph =
  "mt-4 text-[1rem] leading-[1.85] text-[#596278]";

const buttonBase =
  "inline-flex min-h-[48px] items-center justify-center gap-3 rounded-[6px] border px-[22px] py-3 text-[0.9rem] font-bold transition-all duration-200 focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4 motion-reduce:transition-none";

function ArtsPage() {
  return (
    <main className="overflow-hidden bg-white text-brand-dark selection:bg-brand-sky/30">
      {/* Hero */}
      <section className="relative flex min-h-[min(620px,78svh)] items-center overflow-hidden bg-gradient-to-br from-brand-dark via-[#303b7c] to-brand-primary px-[max(24px,calc((100%-1160px)/2))] py-28 text-white max-sm:py-20">
        <div className="relative z-10 w-full max-w-[1160px]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-brand-sky/40 bg-white/10 px-4 py-2 text-sm font-semibold text-brand-sky">
                Senior 3–4
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                Academic Pathways
              </span>
            </div>

            <span className="mb-2 inline-block text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-brand-sky">
              LEGACY GLOBAL ACADEMY
            </span>

            <h1 className="mt-3 max-w-[850px] text-[clamp(2.8rem,6.8vw,5.2rem)] font-extrabold leading-[1.02] tracking-[-0.055em]">
              Understand society.
              <span className="block text-brand-sky">
                Shape your future.
              </span>
            </h1>

            <p className="mt-6 max-w-[650px] text-[1.05rem] leading-[1.8] text-white/85 max-sm:text-[0.98rem]">
              Humanities, commerce, and accounting for students interested
              in public life, business, law, and related fields.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 max-sm:flex-col">
              <a
                href="#arts-subjects"
                className={`${buttonBase} border-transparent bg-brand-sky text-[#303b7c] hover:bg-gray-300`}
              >
                Explore Arts Subjects
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

        <div
          className="pointer-events-none absolute -right-24 top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full border border-white/10 shadow-[0_0_0_45px_rgb(255_255_255_/_2%),0_0_0_90px_rgb(255_255_255_/_2%)] max-sm:right-[-260px]"
          aria-hidden="true"
        />
      </section>

      {/* Introduction */}
      <section className={`${container} grid grid-cols-[1fr_1.1fr] items-center gap-[clamp(40px,7vw,88px)] py-28 max-lg:grid-cols-1 max-lg:py-20 max-sm:py-16`}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative min-w-0"
        >
          <div className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[8px] bg-gradient-to-br from-brand-dark via-[#303b7c] to-brand-primary p-8 text-white sm:p-10">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-sky">
              ARTS STREAM
            </span>

            <div>
              <span className="mb-4 block text-6xl font-extrabold tracking-tight text-white/15">
                03
              </span>
              <h2 className="max-w-[400px] text-3xl font-extrabold leading-tight sm:text-4xl">
                Explore ideas. Understand people.
              </h2>
            </div>

            <div className="mt-8 h-1 w-20 rounded-full bg-brand-sky" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="min-w-0"
        >
          <span className={sectionLabel}>OUR ARTS PATHWAY</span>

          <h2 className={sectionHeading}>
            Understanding people.
            <span className="text-brand-primary">
              {" "}Connecting ideas.
            </span>
          </h2>

          <p className={sectionParagraph}>
            The Arts Stream brings together humanities, commerce, literature,
            religious studies, and accounting. It is intended for Senior 3
            and Senior 4 students interested in public life, business, law,
            and related fields.
          </p>

          <p className={sectionParagraph}>
            These subjects offer different perspectives on history, places,
            society, business, written expression, and financial records.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#f0f3fb] px-4 py-2 text-sm font-semibold text-brand-primary">
              Senior 3
            </span>
            <span className="rounded-full bg-[#f0f3fb] px-4 py-2 text-sm font-semibold text-brand-primary">
              Senior 4
            </span>
            <span className="rounded-full bg-[#e9f7fd] px-4 py-2 text-sm font-semibold text-[#303b7c]">
              Arts pathway
            </span>
          </div>
        </motion.div>
      </section>

      {/* Subjects */}
      <section
        id="arts-subjects"
        className="scroll-mt-24 bg-[#f8fafc] py-28 max-lg:py-20 max-sm:py-16"
      >
        <div className={container}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 max-w-[700px]"
          >
            <span className={sectionLabel}>SENIOR 3–4 CURRICULUM</span>

            <h2 className={sectionHeading}>
              Arts Stream
              <span className="text-brand-primary"> subjects.</span>
            </h2>

            <p className={sectionParagraph}>
              Explore the six subjects listed for the Arts Stream at
              Legacy Global Academy.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-0 border-t border-[#e2e7f0] md:grid-cols-3 max-sm:grid-cols-1">
            {artsSubjects.map((subject, index) => (
              <motion.div
                key={subject}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="flex items-center gap-4 border-b border-[#e2e7f0] py-6"
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
        </div>
      </section>

      {/* Pathway navigation */}
      <section className="py-20 max-sm:py-16">
        <div className={`${container} flex flex-col justify-between gap-8 md:flex-row md:items-center`}>
          <div>
            <span className={sectionLabel}>EXPLORE OUR PATHWAYS</span>
            <h2 className="mt-3 text-2xl font-extrabold text-brand-dark sm:text-3xl">
              Find the pathway that fits you.
            </h2>
            <p className="mt-3 max-w-[600px] leading-7 text-[#596278]">
              Explore the foundation curriculum or learn about the Science Stream.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/academics"
              className={`${buttonBase} border-[#d9dfeb] bg-white text-brand-primary hover:border-brand-primary`}
            >
              Foundation <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/academics/sciences"
              className={`${buttonBase} border-brand-primary bg-brand-primary text-white hover:bg-[#303b7c]`}
            >
              Science Stream <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-brand-dark py-20 text-white max-sm:py-16">
        <div className={`${container} flex flex-col items-start justify-between gap-8 md:flex-row md:items-center`}>
          <div>
            <span className="inline-block text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-brand-sky">
              LEGACY GLOBAL ACADEMY
            </span>
            <h2 className="mt-3 max-w-[650px] text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight">
              Where Dreams Take Flight.
            </h2>
            <p className="mt-4 max-w-[560px] leading-7 text-white/75">
              Contact our school to learn more about the available academic
              pathways.
            </p>
          </div>

          <Link
            to="/contact"
            className={`${buttonBase} shrink-0 border-transparent bg-brand-sky text-[#303b7c] hover:bg-brand-sky`}
          >
            Get in Touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ArtsPage;
