import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const staffMembers = [
  {
    id: 1,
    name: "School Leadership",
    role: "School Administration",
    department: "Leadership",
    image: "/Legacyglobalacademy/staff-1.jpg",
    initials: "SL",
    description:
      "Providing leadership, guidance, and direction for the school's educational mission.",
  },
  {
    id: 2,
    name: "Academic Team",
    role: "Academic Coordination",
    department: "Leadership",
    image: "/Legacyglobalacademy/staff-2.jpg",
    initials: "AT",
    description:
      "Supporting academic planning, effective teaching, and student learning.",
  },
  {
    id: 3,
    name: "Teaching Team",
    role: "Classroom Instruction",
    department: "Teaching",
    image: "/Legacyglobalacademy/staff-3.jpg",
    initials: "TT",
    description:
      "Helping learners develop knowledge, skills, confidence, and curiosity.",
  },
  {
    id: 4,
    name: "ICT Department",
    role: "Information Technology",
    department: "Teaching",
    image: "/Legacyglobalacademy/staff-4.jpg",
    initials: "ICT",
    description:
      "Encouraging digital literacy and preparing learners for a technology-driven world.",
  },
  {
    id: 5,
    name: "Student Support",
    role: "Learner Development",
    department: "Support",
    image: "/Legacyglobalacademy/staff-5.jpg",
    initials: "SS",
    description:
      "Contributing to a welcoming, supportive, and positive learning environment.",
  },
  {
    id: 6,
    name: "School Operations",
    role: "Administrative Support",
    department: "Support",
    image: "/Legacyglobalacademy/staff-6.jpg",
    initials: "SO",
    description:
      "Helping the school community operate smoothly and efficiently.",
  },
];

const departments = [
  "All Staff",
  "Leadership",
  "Teaching",
  "Support",
];

const containerClass = "mx-auto w-[min(1160px,calc(100%-48px))] max-sm:w-[calc(100%-32px)]";

const sectionLabel =
  "inline-block text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-brand-primary";

const sectionHeading =
  "mt-3 text-[clamp(2.2rem,4.2vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-brand-dark";

const sectionParagraph =
  "mt-4 text-[1rem] leading-[1.85] text-[#596278]";

const buttonBase =
  "inline-flex min-h-[48px] items-center justify-center gap-3 rounded-[6px] border px-[22px] py-3 text-[0.9rem] font-bold transition-all duration-200 focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4 motion-reduce:transition-none";

function StaffPage() {
  const [activeDepartment, setActiveDepartment] = useState("All Staff");

  const filteredStaff =
    activeDepartment === "All Staff"
      ? staffMembers
      : staffMembers.filter(
          (member) => member.department === activeDepartment
        );

  return (
    <main className="overflow-hidden bg-white text-brand-dark selection:bg-brand-sky/30">
      
      {/* Hero */}
      <section
        className="relative flex min-h-[min(700px,82svh)] items-center overflow-hidden bg-[#242b47] bg-cover bg-center px-[max(24px,calc((100%-1160px)/2))] py-28 text-white max-sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(105deg, rgb(36 43 71 / 96%) 0%, rgb(36 43 71 / 87%) 48%, rgb(69 81 149 / 68%) 100%), url('/Legacyglobalacademy/staff-1.jpg')",
          backgroundPosition: "center, center 40%",
        }}
      >
        <div className="relative z-10 w-full max-w-[1160px]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-brand-sky mb-2">
              THE PEOPLE BEHIND OUR PURPOSE
            </span>

            <h1 className="mt-3 max-w-[820px] text-[clamp(2.8rem,6.8vw,5.2rem)] font-extrabold leading-[1.02] tracking-[-0.055em]">
              Meet the People
              <br />
              Who Inspire <span className="text-brand-sky">Greatness.</span>
            </h1>

            <p className="mt-6 max-w-[620px] text-[1.05rem] leading-[1.8] text-white/85 max-sm:text-[0.98rem]">
              Great education begins with people who care. Discover the
              dedicated team working to create a supportive environment
              where every learner can grow and thrive.
            </p>

            <div className="mt-8 flex text-black flex-wrap gap-4 max-sm:flex-col max-sm:items-stretch">
              <a
                href="#our-team"
                className={`${buttonBase} bg-white text-[#303b7c] hover:bg-brand-sky hover:text-brand-dark shadow-sm`}
              >
                Meet Our Team
                <span aria-hidden="true">↓</span>
              </a>

              <Link
                to="/contact"
                className={`${buttonBase} border-white/40 bg-transparent text-white hover:border-brand-sky hover:bg-brand-sky hover:text-brand-dark`}
              >
                Contact the School
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute right-0 bottom-0 left-0 flex justify-between gap-4 border-t border-white/15 px-[max(24px,calc((100%-1160px)/2))] py-5 text-[0.78rem] font-medium text-white/70 max-sm:flex-col max-sm:gap-1 max-sm:px-5 max-sm:py-3">
          <span>DEDICATION</span>
          <span>EXCELLENCE</span>
          <span>INSPIRATION</span>
        </div>
      </section>

     {/* Introduction */}
    <section className="py-24 max-lg:py-16 max-sm:py-12">
      <div className={`${containerClass} grid grid-cols-[1fr_1.1fr] items-start gap-16 max-lg:grid-cols-1 max-lg:gap-10`}>
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={sectionLabel}>
            OUR PEOPLE, OUR STRENGTH
          </span>

          <h2 className={sectionHeading}>
            More Than a Team.
            <br />
            <span className="text-brand-primary">A Community.</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className={sectionParagraph}>
            At Legacy Global Academy, the people who support learning
            are central to the school experience. Our staff page
            celebrates the leadership, educators, and support
            professionals who contribute to our school community.
          </p>

          <div className="mt-8 border-t border-[#e2e7f0]">
            {[
              { title: "Commitment to Learning", desc: "Encouraging academic growth and lifelong learning." },
              { title: "Care and Respect", desc: "Promoting a welcoming and respectful community." },
              { title: "Shared Purpose", desc: "Working together to support every learner's journey." },
            ].map((item, idx) => (
              <div key={idx} className="border-b border-[#e2e7f0] py-6">
                <h3 className="text-[1.05rem] font-bold text-brand-dark">
                  {item.title}
                </h3>
                <p className="mt-1 text-[0.92rem] leading-[1.7] text-[#596278]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

      {/* Team */}
      <section
        id="our-team"
        className="scroll-mt-20 bg-[#f8fafc] py-24 pb-28 max-lg:py-16 max-sm:py-12"
      >
        <div className={containerClass}>
          <div className="mb-10 flex items-end justify-between gap-6 max-lg:flex-col max-lg:items-start max-lg:gap-4">
            <div>
              <span className={sectionLabel}>
                THE PEOPLE OF LEGACY
              </span>

              <h2 className={sectionHeading}>
                Meet Our <span className="text-brand-primary">Team</span>
              </h2>

              <p className={`${sectionParagraph} max-w-[620px]`}>
                Get to know the people who help make our school community
                a place for learning, discovery, and growth.
              </p>
            </div>

            <span className="shrink-0 rounded-full border border-[#e2e7f0] bg-white px-4 py-2 text-[0.85rem] font-bold text-brand-primary shadow-sm">
              {filteredStaff.length}{" "}
              {filteredStaff.length === 1 ? "profile" : "profiles"}
            </span>
          </div>

          {/* Department filters */}
          <div
            className="mb-10 flex flex-wrap gap-2.5 max-sm:mb-8"
            aria-label="Filter staff by department"
          >
            {departments.map((department) => {
              const isActive = activeDepartment === department;

              return (
                <button
                  key={department}
                  type="button"
                  onClick={() => setActiveDepartment(department)}
                  aria-pressed={isActive}
                  className={`rounded-[6px] border px-5 py-2.5 text-[0.85rem] font-bold transition-all duration-200 focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4 max-sm:px-4 max-sm:py-2 max-sm:text-[0.8rem] ${
                    isActive
                      ? "border-brand-primary bg-brand-primary text-white shadow-sm"
                      : "border-[#e2e7f0] bg-white text-[#596278] hover:border-brand-primary hover:text-brand-primary"
                  }`}
                >
                  {department}
                </button>
              );
            })}
          </div>

          {/* Card-Free Profile Grid */}
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {filteredStaff.map((member, index) => (
              <motion.article
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex min-w-0 flex-col overflow-hidden bg-transparent"
                key={member.id}
              >
                <div className="relative overflow-hidden rounded-[8px] bg-[#e7edf6] mb-5 aspect-[4/3]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 grid place-items-center text-[5rem] font-black tracking-[-4px] text-brand-primary/20"
                  >
                    {member.initials}
                  </div>

                  <img
                    src={member.image}
                    alt={`Placeholder photo for ${member.name}`}
                    loading="lazy"
                    className="relative z-[1] block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <span className="absolute top-4 left-4 z-[2] rounded-[4px] bg-white px-2.5 py-1 text-xs font-bold text-brand-primary shadow-sm">
                    {member.department}
                  </span>
                </div>

                <div className="flex flex-1 flex-col items-start">
                  <span className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.08em] text-brand-primary">
                    {member.role}
                  </span>

                  <h3 className="mb-2.5 text-[1.2rem] font-bold leading-[1.35] text-brand-dark tracking-[-0.02em]">
                    {member.name}
                  </h3>

                  <p className="m-0 text-[0.95rem] leading-[1.75] text-[#596278]">
                    {member.description}
                  </p>

                  <div className="mt-6 flex w-full items-center justify-between border-t border-[#e2e7f0] pt-4 text-[0.8rem] font-medium text-[#7c879b]">
                    <span>Legacy Global Academy</span>
                    <span className="font-bold text-brand-primary">↗</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    {/* School values banner */}
      <section className="relative isolate overflow-hidden bg-brand-dark py-28 text-white max-sm:py-20">
        {/* Background High-Resolution Unsplash Image with Gradient Overlay */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1600"
            alt="Students collaborating together at school"
            className="h-full w-full object-cover opacity-35"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/80" />
        </div>

        <div className={`${containerClass} flex items-center justify-between gap-12 max-lg:flex-col max-lg:items-start`}>
          <div className="max-w-[760px]">
            <span className="inline-block text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-brand-sky mb-2">
              ONE SCHOOL. ONE COMMUNITY.
            </span>

            <h2 className="my-3 text-[clamp(2.4rem,4.5vw,3.6rem)] font-extrabold leading-[1.1] tracking-[-0.045em]">
              Together, We Help
              <br />
              <span className="text-brand-sky">
                Dreams Take Flight.
              </span>
            </h2>

            <p className="m-0 max-w-[620px] text-[1.05rem] leading-[1.8] text-white/80">
              Every learner deserves encouragement, opportunity, and
              an environment where their potential can flourish.
            </p>
          </div>
        </div>
      </section> 

      {/* Contact CTA */}
      <section className="bg-white py-24 max-sm:py-16">
        <div className={`${containerClass} flex items-center justify-between gap-12 max-lg:flex-col max-lg:items-start`}>
          <div>
            <span className={sectionLabel}>LET&apos;S CONNECT</span>

            <h2 className={sectionHeading}>
              Want to Learn More
              <br />
              <span className="text-brand-primary">About Our School?</span>
            </h2>

            <p className={`${sectionParagraph} max-w-[600px]`}>
              Contact Legacy Global Academy for more information about
              our school community, academic programmes, and admissions.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-stretch gap-3.5 max-lg:w-[min(100%,340px)] max-lg:flex-row max-lg:flex-wrap max-sm:w-full max-sm:flex-col">
            <Link
              to="/contact"
              className={`${buttonBase} bg-brand-primary text-white hover:bg-[#303b7c]`}
            >
              Contact Us <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/admissions"
              className={`${buttonBase} border-[#e2e7f0] bg-white text-brand-primary hover:border-brand-primary`}
            >
              Explore Admissions <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default StaffPage;