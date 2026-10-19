import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    image: "/Legacyglobalacademy/gallery-1.jpg",
    category: "Learning",
    title: "Learning in the Classroom",
    description: "A glimpse into everyday learning and discovery.",
  },
  {
    id: 2,
    image: "/Legacyglobalacademy/gallery-2.jpg",
    category: "Campus",
    title: "Our School Environment",
    description: "A welcoming environment for learning and growth.",
  },
  {
    id: 3,
    image: "/Legacyglobalacademy/gallery-3.jpg",
    category: "Activities",
    title: "Learning Beyond the Classroom",
    description: "Students exploring skills through activities.",
  },
  {
    id: 4,
    image: "/Legacyglobalacademy/gallery-4.jpg",
    category: "Events",
    title: "School Celebrations",
    description: "Moments that bring our school community together.",
  },
  {
    id: 5,
    image: "/Legacyglobalacademy/gallery-5.jpg",
    category: "Learning",
    title: "A Culture of Learning",
    description: "Encouraging curiosity, confidence, and participation.",
  },
  {
    id: 6,
    image: "/Legacyglobalacademy/gallery-6.jpg",
    category: "Activities",
    title: "Creativity and Teamwork",
    description: "Making room for creativity and collaboration.",
  },
  {
    id: 7,
    image: "/Legacyglobalacademy/gallery-7.jpg",
    category: "Campus",
    title: "Spaces for Growth",
    description: "Discovering the spaces that support school life.",
  },
  {
    id: 8,
    image: "/Legacyglobalacademy/gallery-8.jpg",
    category: "Events",
    title: "Memorable School Moments",
    description: "Celebrating experiences and shared achievements.",
  },
  {
    id: 9,
    image: "/Legacyglobalacademy/gallery-9.jpg",
    category: "Learning",
    title: "Learning Together",
    description: "Growing through knowledge and shared experiences.",
  },
];

const categories = [
  "All Photos",
  "Learning",
  "Campus",
  "Activities",
  "Events",
];

const containerClass = "mx-auto w-[min(1160px,calc(100%-48px))] max-sm:w-[calc(100%-32px)]";

const buttonBase =
  "inline-flex min-h-[48px] items-center justify-center gap-3 rounded-[6px] border border-transparent px-[22px] py-3 text-center text-[0.9rem] font-bold no-underline transition-all duration-200 focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4";

const lightButton =
  `${buttonBase} bg-white text-[#303b7c] hover:bg-brand-sky hover:text-brand-dark shadow-sm`;

const outlineButton =
  `${buttonBase} border-white/40 bg-transparent text-white hover:border-brand-sky hover:bg-brand-sky hover:text-brand-dark`;

const sectionLabel =
  "mb-3 block text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-brand-primary";

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All Photos");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredItems =
    activeCategory === "All Photos"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  const selectedItem =
    selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const closeLightbox = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current - 1 + filteredItems.length) % filteredItems.length
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current + 1) % filteredItems.length
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, filteredItems.length]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSelectedIndex(null);
  };

  return (
    <main className="bg-white font-[inherit] text-brand-dark selection:bg-brand-sky/30">
      
      {/* Hero */}
      <section className="relative isolate flex min-h-[min(700px,82svh)] items-center overflow-hidden bg-[#242b47] bg-cover bg-center text-white max-sm:min-h-[85svh]" style={{ backgroundImage: 'url("/Legacyglobalacademy/gallery-hero.png")' }}>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(26_33_63_/_94%)_0%,rgb(36_43_71_/_80%)_55%,rgb(36_43_71_/_45%)_100%)] max-sm:bg-[linear-gradient(90deg,rgb(26_33_63_/_95%),rgb(36_43_71_/_85%))]" />

        <div className={`${containerClass} py-28 pb-32 max-sm:py-20`}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-3 text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-brand-sky before:h-[2px] before:w-6 before:bg-current before:content-['']">
              LIFE AT LEGACY
            </span>

            <h1 className="mt-3 mb-6 max-w-[780px] text-[clamp(2.8rem,6.8vw,5.2rem)] font-extrabold leading-[1.02] tracking-[-0.055em]">
              Every Picture
              <br />
              <span className="text-brand-sky">Tells a Story.</span>
            </h1>

            <p className="m-0 max-w-[580px] text-[1.05rem] leading-[1.8] text-white/85 max-sm:text-[0.98rem]">
              Explore the moments, experiences, and memories that
              make life at Legacy Global Academy special.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-black max-sm:flex-col max-sm:items-stretch">
              <a
                href="#school-gallery"
                className={lightButton}
              >
                Explore Gallery
                <span aria-hidden="true">↓</span>
              </a>

              <Link
                to="/contact"
                className={outlineButton}
              >
                Contact Our School
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute right-0 bottom-0 left-0 flex justify-between gap-4 border-t border-white/15 px-[max(24px,calc((100%-1160px)/2))] py-5 text-[0.78rem] font-medium text-white/70 max-sm:flex-col max-sm:gap-1 max-sm:px-5 max-sm:py-3">
          <span>Where Dreams Take Flight</span>
          <span>Discover · Learn · Grow</span>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 max-lg:py-16 max-sm:py-12">
        <div className={`${containerClass} grid grid-cols-[1fr_0.9fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-6`}>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={sectionLabel}>OUR PHOTO STORIES</span>

            <h2 className="m-0 text-[clamp(2.2rem,4.2vw,3.2rem)] font-extrabold leading-[1.14] tracking-[-0.04em]">
              A closer look at
              <br />
              <span className="text-brand-primary">our school life.</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="m-0 text-[1.02rem] leading-[1.85] text-[#596278] max-lg:max-w-[700px]"
          >
            From classroom experiences to school activities,
            every moment is part of the journey. Browse our
            gallery and discover the experiences that help
            students learn, connect, and grow.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section
        className="scroll-mt-20 bg-[#f8fafc] py-24 pb-28 max-lg:py-16 max-sm:py-12"
        id="school-gallery"
      >
        <div className={containerClass}>
          <div className="mb-10 flex items-end justify-between gap-6 max-lg:flex-col max-lg:items-start max-lg:gap-4">
            <div>
              <span className={sectionLabel}>THE LEGACY EXPERIENCE</span>
              <h2 className="m-0 text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold leading-[1.16] tracking-[-0.04em]">
                Moments worth remembering
              </h2>
            </div>

            <span className="shrink-0 rounded-full border border-[#e2e7f0] bg-white px-4 py-2 text-[0.85rem] font-bold text-brand-primary shadow-sm">
              {filteredItems.length}{" "}
              {filteredItems.length === 1 ? "photo" : "photos"}
            </span>
          </div>

          <div
            className="mb-10 flex flex-wrap gap-2.5 max-sm:mb-6"
            role="group"
            aria-label="Filter gallery by category"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  className={`rounded-[6px] border px-5 py-2.5 text-[0.85rem] font-bold transition-all duration-200 focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4 max-sm:px-4 max-sm:py-2 max-sm:text-[0.8rem] ${
                    isActive
                      ? "border-brand-primary bg-brand-primary text-white shadow-sm"
                      : "border-[#e2e7f0] bg-white text-[#596278] hover:border-brand-primary hover:text-brand-primary"
                  }`}
                  onClick={() => handleCategoryChange(category)}
                  aria-pressed={isActive}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {filteredItems.map((item, index) => (
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                className="group relative isolate block aspect-[1/1.05] min-w-0 overflow-hidden rounded-[8px] border-0 bg-[#e7edf6] p-0 text-left text-white shadow-sm focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4 max-sm:aspect-[16/11]"
                key={item.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`View photo: ${item.title}`}
              >
                <img
                  className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105"
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <span className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(20_27_54/_5%)_20%,transparent_40%,rgb(20_27_54/_40%)_65%,rgb(20_27_54/_92%)_100%)]" />

                <span className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-brand-dark/30 text-[1.2rem] opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 max-lg:translate-y-0 max-lg:opacity-100">
                  ↗
                </span>

                <span className="absolute right-0 bottom-0 left-0 flex flex-col items-start p-6 max-sm:p-5">
                  <span className="mb-2.5 inline-block rounded-[4px] border border-white/25 bg-brand-primary/90 px-2.5 py-1 text-[0.7rem] font-extrabold uppercase tracking-[0.08em] text-white">
                    {item.category}
                  </span>

                  <span className="text-[clamp(1.1rem,1.5vw,1.35rem)] font-extrabold leading-[1.3]">
                    {item.title}
                  </span>

                  <span className="mt-0 max-h-0 translate-y-2 overflow-hidden text-[0.88rem] leading-[1.65] text-white/80 opacity-0 transition-all duration-300 group-hover:mt-2 group-hover:max-h-[90px] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:mt-2 group-focus-visible:max-h-[90px] group-focus-visible:translate-y-0 group-focus-visible:opacity-100 max-lg:mt-2 max-lg:max-h-[90px] max-lg:translate-y-0 max-lg:opacity-100">
                    {item.description}
                  </span>
                </span>
              </motion.button>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="rounded-[8px] border border-dashed border-[#cbd5e4] px-5 py-12 text-center text-[#596278]">
              No photos are available in this category yet.
            </p>
          )}

          <p className="mt-8 mb-0 text-[0.82rem] leading-[1.7] text-[#7c879b]">
            Photo gallery preview — replace the sample images and
            descriptions with authentic school photographs.
          </p>
        </div>
      </section>

      {/* School CTA */}
      <section className="relative isolate overflow-hidden bg-brand-dark py-24 text-white max-sm:py-16">
        <div className={`${containerClass} flex items-center justify-between gap-12 max-lg:flex-col max-lg:items-start`}>
          <div>
            <span className="inline-flex items-center gap-3 text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-brand-sky before:h-[2px] before:w-6 before:bg-current before:content-['']">
              YOUR JOURNEY STARTS HERE
            </span>

            <h2 className="my-3 max-w-[650px] text-[clamp(2.4rem,4.8vw,3.8rem)] font-extrabold leading-[1.1] tracking-[-0.045em]">
              Be part of the
              <br />
              <span className="text-brand-sky">Legacy story.</span>
            </h2>

            <p className="m-0 max-w-[560px] text-[1rem] leading-[1.8] text-white/75">
              Discover a learning community focused on knowledge,
              character, and opportunities for the next generation.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-stretch gap-3.5 max-lg:w-[min(100%,340px)] max-lg:flex-row max-lg:flex-wrap max-sm:w-full max-sm:flex-col">
            <Link
              to="/admissions"
              className={`${lightButton} max-lg:flex-1 max-sm:w-full`}
            >
              Explore Admissions <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/contact"
              className={`${outlineButton} max-lg:flex-1 max-sm:w-full`}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center gap-6 bg-brand-dark/95 px-8 pt-16 pb-8 backdrop-blur-sm max-sm:gap-3 max-sm:px-3"
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-5 right-6 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/10 text-[2rem] leading-none text-white transition-colors hover:border-brand-sky hover:bg-brand-sky hover:text-brand-dark focus-visible:outline-[3px] focus-visible:outline-brand-sky max-sm:top-4 max-sm:right-4 max-sm:h-10 max-sm:w-10"
              type="button"
              onClick={closeLightbox}
              aria-label="Close photo viewer"
            >
              &times;
            </button>

            <button
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/30 bg-white/10 text-[1.4rem] text-white transition-colors hover:border-brand-sky hover:bg-brand-sky hover:text-brand-dark focus-visible:outline-[3px] focus-visible:outline-brand-sky max-sm:absolute max-sm:bottom-4 max-sm:left-4 max-sm:h-11 max-sm:w-11"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous photo"
            >
              &#8592;
            </button>

            <div
              className="flex max-h-full w-full max-w-[920px] flex-col items-center"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                className="block h-auto max-h-[calc(100svh-220px)] w-auto max-w-full rounded-[8px] object-contain shadow-2xl"
                src={selectedItem.image}
                alt={selectedItem.title}
              />

              <div className="w-full pt-5 text-center text-white max-sm:pt-3">
                <span className="text-[0.74rem] font-extrabold uppercase tracking-[0.15em] text-brand-sky">
                  {selectedItem.category}
                </span>

                <h3 className="my-2 text-xl font-extrabold max-sm:text-[1.1rem]">
                  {selectedItem.title}
                </h3>

                <p className="m-0 text-[0.9rem] leading-[1.6] text-white/75 max-sm:text-[0.82rem]">
                  {selectedItem.description}
                </p>

                <small className="mt-2.5 block text-white/50 text-[0.8rem]">
                  {selectedIndex + 1} / {filteredItems.length}
                </small>
              </div>
            </div>

            <button
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/30 bg-white/10 text-[1.4rem] text-white transition-colors hover:border-brand-sky hover:bg-brand-sky hover:text-brand-dark focus-visible:outline-[3px] focus-visible:outline-brand-sky max-sm:absolute max-sm:right-4 max-sm:bottom-4 max-sm:h-11 max-sm:w-11"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
            >
              &#8594;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}

export default GalleryPage;