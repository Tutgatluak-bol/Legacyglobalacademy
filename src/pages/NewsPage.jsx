import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const newsArticles = [
  {
    id: 1,
    category: "School News",
    date: "Latest Updates",
    title: "Welcome to Legacy Global Academy",
    description:
      "Discover our commitment to quality education, character development, and creating opportunities for every learner to succeed.",
    image: "/Legacyglobalacademy/news-1.jpg",
    featured: true,
  },
  {
    id: 2,
    category: "Academics",
    date: "Academic Excellence",
    title: "Building a Strong Foundation for the Future",
    description:
      "Explore our approach to learning, where curiosity, critical thinking, and academic growth help prepare students for tomorrow.",
    image: "/Legacyglobalacademy/news-2.jpg",
  },
  {
    id: 3,
    category: "Student Life",
    date: "Beyond the Classroom",
    title: "Learning, Growing, and Achieving Together",
    description:
      "Discover how a supportive school community encourages learners to develop confidence, creativity, and teamwork.",
    image: "/Legacyglobalacademy/news-3.jpg",
  },
  {
    id: 4,
    category: "Announcements",
    date: "School Information",
    title: "Stay Connected with Our School Community",
    description:
      "Visit this page for school announcements, important updates, and information shared with parents and students.",
    image: "/Legacyglobalacademy/news-4.jpg",
  },
];

const categories = [
  { id: 1, name: "All News" },
  { id: 2, name: "School News" },
  { id: 3, name: "Academics" },
  { id: 4, name: "Student Life" },
  { id: 5, name: "Announcements" },
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

function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All News");

  const filteredArticles =
    activeCategory === "All News"
      ? newsArticles
      : newsArticles.filter(
          (article) => article.category === activeCategory
        );

  const featuredArticle = newsArticles[0];

  return (
    <main className="overflow-hidden bg-white text-brand-dark selection:bg-brand-sky/30">
      
      {/* HERO */}
      <section
        className="relative flex min-h-[min(700px,82svh)] items-center overflow-hidden bg-[#242b47] bg-cover bg-center px-[max(24px,calc((100%-1160px)/2))] py-28 text-white max-sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(100deg, rgb(36 43 71 / 92%) 0%, rgb(36 43 71 / 78%) 50%, rgb(69 81 149 / 50%) 100%), url('/Legacyglobalacademy/news-hero.jpg')",
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
              News &amp;{" "}
              <span className="text-brand-sky">
                Updates
              </span>
            </h1>

            <p className="mt-6 max-w-[620px] text-[1.05rem] leading-[1.8] text-white/85 max-sm:text-[0.98rem]">
              Discover school news, academic highlights, announcements,
              and the moments that make our learning community special.
            </p>

            <div className="mt-8 flex text-black flex-wrap gap-4 max-sm:flex-col max-sm:items-stretch">
              <a
                href="#latest-news"
                className={`${buttonBase} bg-white text-[#303b7c] hover:bg-brand-sky hover:text-brand-dark shadow-sm`}
              >
                Explore Latest News
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
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 max-lg:py-16 max-sm:py-12">
        <div className={`${containerClass} grid grid-cols-[1fr_0.9fr] items-end gap-16 max-lg:grid-cols-1 max-lg:gap-6`}>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={sectionLabel}>
              WHAT&apos;S HAPPENING
            </span>

            <h2 className={sectionHeading}>
              Stories from{" "}
              <span className="text-brand-primary">Our Community</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="m-0 text-[1.02rem] leading-[1.85] text-[#596278] max-lg:max-w-[700px]"
          >
            Stay informed about learning, school activities, important
            announcements, and the journey of our learners.
          </motion.p>
        </div>
      </section>

      {/* NEWS LISTING */}
      <section
        id="latest-news"
        className="scroll-mt-20 bg-[#f8fafc] py-24 pb-28 max-lg:py-16 max-sm:py-12"
      >
        <div className={containerClass}>
          <div className="mb-10 flex items-end justify-between gap-6 max-lg:flex-col max-lg:items-start max-lg:gap-4">
            <div>
              <span className={sectionLabel}>
                THE LATEST
              </span>

              <h2 className="m-0 text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold leading-[1.16] tracking-[-0.04em]">
                Latest News &amp; Events
              </h2>
            </div>

            <span className="shrink-0 rounded-full border border-[#e2e7f0] bg-white px-4 py-2 text-[0.85rem] font-bold text-brand-primary shadow-sm">
              {filteredArticles.length}{" "}
              {filteredArticles.length === 1 ? "Article" : "Articles"}
            </span>
          </div>

          {/* CATEGORY FILTERS */}
          <div
            className="mb-10 flex flex-wrap gap-2.5 max-sm:mb-8"
            aria-label="Filter news by category"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category.name;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.name)}
                  aria-pressed={isActive}
                  className={`rounded-[6px] border px-5 py-2.5 text-[0.85rem] font-bold transition-all duration-200 focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4 max-sm:px-4 max-sm:py-2 max-sm:text-[0.8rem] ${
                    isActive
                      ? "border-brand-primary bg-brand-primary text-white shadow-sm"
                      : "border-[#e2e7f0] bg-white text-[#596278] hover:border-brand-primary hover:text-brand-primary"
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* FEATURED STORY (Cardless Layout) */}
          {activeCategory === "All News" && (
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 grid grid-cols-[1.1fr_0.9fr] items-center gap-[clamp(32px,6vw,64px)] max-lg:grid-cols-1"
            >
              <div className="relative overflow-hidden rounded-[8px] bg-[#e7edf6]">
                <img
                  src={featuredArticle.image}
                  alt="Students learning in a school environment"
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <span className="absolute top-4 left-4 rounded-[4px] bg-brand-sky px-3 py-1.5 text-xs font-bold text-brand-dark">
                  Featured Story
                </span>
              </div>

              <div className="flex flex-col items-start justify-center">
                <span className={sectionLabel}>
                  {featuredArticle.category}
                </span>

                <span className="my-2 text-[0.85rem] font-medium text-[#596278]">
                  {featuredArticle.date}
                </span>

                <h3 className="my-2 text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-[1.2] tracking-[-0.03em] text-brand-dark">
                  {featuredArticle.title}
                </h3>

                <p className="my-4 text-[1rem] leading-[1.85] text-[#596278]">
                  {featuredArticle.description}
                </p>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-[0.95rem] font-bold text-brand-primary no-underline transition-colors hover:text-[#303b7c] focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4"
                >
                  Discover Our School <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.article>
          )}

          {/* NEWS GRID (Cardless Flow) */}
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {filteredArticles
              .filter(
                (article) =>
                  activeCategory !== "All News" || !article.featured
              )
              .map((article, index) => (
                <motion.article
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex min-w-0 flex-col overflow-hidden bg-transparent"
                  key={article.id}
                >
                  <div className="relative overflow-hidden rounded-[8px] bg-[#e7edf6] mb-5">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="aspect-[16/11] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <span className="absolute bottom-4 left-4 rounded-[4px] bg-white px-3 py-1 text-xs font-bold text-brand-primary shadow-sm">
                      {article.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col items-start">
                    <span className="mb-2 text-[0.82rem] font-medium text-[#596278]">
                      {article.date}
                    </span>

                    <h3 className="mb-3 text-[1.2rem] font-bold leading-[1.4] text-brand-dark tracking-[-0.02em]">
                      {article.title}
                    </h3>

                    <p className="text-[0.95rem] leading-[1.75] text-[#596278]">
                      {article.description}
                    </p>

                    <Link
                      to={
                        article.category === "Academics"
                          ? "/academics"
                          : article.category === "Announcements"
                            ? "/admissions"
                            : "/about"
                      }
                      className="mt-6 inline-flex items-center gap-2 text-[0.92rem] font-bold text-brand-primary no-underline transition-colors hover:text-[#303b7c] focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4"
                    >
                      Learn More <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </motion.article>
              ))}
          </div>

          {filteredArticles.length === 0 && (
            <p className="rounded-[8px] border border-dashed border-[#cbd5e4] px-5 py-12 text-center text-[#596278]">
              No news articles found in this category.
            </p>
          )}
        </div>
      </section>

      {/* COMMUNITY CALL TO ACTION */}
      <section className="bg-brand-dark py-24 text-white max-sm:py-16">
        <div className={`${containerClass} flex items-center justify-between gap-12 max-lg:flex-col max-lg:items-start`}>
          <div>
            <span className="inline-block text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-brand-sky mb-2">
              STAY CONNECTED
            </span>

            <h2 className="my-3 max-w-[650px] text-[clamp(2.4rem,4.5vw,3.8rem)] font-extrabold leading-[1.1] tracking-[-0.045em]">
              Be Part of Our{" "}
              <span className="text-brand-sky">Journey</span>
            </h2>

            <p className="m-0 max-w-[560px] text-[1rem] leading-[1.8] text-white/75">
              Have a question or need more information about our school?
              We would love to hear from you.
            </p>
          </div>

          <Link
            to="/contact"
            className={`${buttonBase} shrink-0 bg-brand-sky text-[#303b7c] hover:bg-gray-300`}
          >
            Get in Touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

    </main>
  );
}

export default NewsPage;