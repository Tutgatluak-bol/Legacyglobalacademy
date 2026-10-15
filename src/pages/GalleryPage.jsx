
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./GalleryPage.css";

const galleryItems = [
  {
    id: 1,
    image: "/gallery-1.jpg",
    category: "Learning",
    title: "Learning in the Classroom",
    description: "A glimpse into everyday learning and discovery.",
  },
  {
    id: 2,
    image: "/gallery-2.jpg",
    category: "Campus",
    title: "Our School Environment",
    description: "A welcoming environment for learning and growth.",
  },
  {
    id: 3,
    image: "/gallery-3.jpg",
    category: "Activities",
    title: "Learning Beyond the Classroom",
    description: "Students exploring skills through activities.",
  },
  {
    id: 4,
    image: "/gallery-4.jpg",
    category: "Events",
    title: "School Celebrations",
    description: "Moments that bring our school community together.",
  },
  {
    id: 5,
    image: "/gallery-5.jpg",
    category: "Learning",
    title: "A Culture of Learning",
    description: "Encouraging curiosity, confidence, and participation.",
  },
  {
    id: 6,
    image: "/gallery-6.jpg",
    category: "Activities",
    title: "Creativity and Teamwork",
    description: "Making room for creativity and collaboration.",
  },
  {
    id: 7,
    image: "/gallery-7.jpg",
    category: "Campus",
    title: "Spaces for Growth",
    description: "Discovering the spaces that support school life.",
  },
  {
    id: 8,
    image: "/gallery-8.jpg",
    category: "Events",
    title: "Memorable School Moments",
    description: "Celebrating experiences and shared achievements.",
  },
  {
    id: 9,
    image: "/gallery-9.jpg",
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

  // Close the lightbox and navigate images using the keyboard.
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

  // Reset the lightbox whenever the category changes.
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSelectedIndex(null);
  };

  return (
    <main className="gallery-page">
      {/* Hero */}
      <section className="gallery-hero">
        <div className="gallery-hero__overlay" />

        <div className="gallery-container gallery-hero__content">
          <span className="gallery-eyebrow">
            LIFE AT LEGACY
          </span>

          <h1>
            Every Picture
            <br />
            <span>Tells a Story.</span>
          </h1>

          <p>
            Explore the moments, experiences, and memories that
            make life at Legacy Global Academy special.
          </p>

          <div className="gallery-hero__actions">
            <a href="#school-gallery" className="gallery-btn gallery-btn--light">
              Explore Gallery
              <span aria-hidden="true">↓</span>
            </a>

            <Link
              to="/contact"
              className="gallery-btn gallery-btn--outline"
            >
              Contact Our School
            </Link>
          </div>
        </div>

        <div className="gallery-hero__bottom">
          <span>Where Dreams Take Flight</span>
          <span>Discover · Learn · Grow</span>
        </div>
      </section>

      {/* Introduction */}
      <section className="gallery-intro">
        <div className="gallery-container gallery-intro__inner">
          <div>
            <span className="gallery-section-label">
              OUR PHOTO STORIES
            </span>

            <h2>
              A closer look at
              <br />
              <span>our school life.</span>
            </h2>
          </div>

          <p>
            From classroom experiences to school activities,
            every moment is part of the journey. Browse our
            gallery and discover the experiences that help
            students learn, connect, and grow.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section
        className="gallery-section"
        id="school-gallery"
      >
        <div className="gallery-container">
          <div className="gallery-section__heading">
            <div>
              <span className="gallery-section-label">
                THE LEGACY EXPERIENCE
              </span>
              <h2>Moments worth remembering</h2>
            </div>

            <span className="gallery-count">
              {filteredItems.length}{" "}
              {filteredItems.length === 1 ? "photo" : "photos"}
            </span>
          </div>

          <div
            className="gallery-filters"
            role="group"
            aria-label="Filter gallery by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`gallery-filter ${
                  activeCategory === category
                    ? "gallery-filter--active"
                    : ""
                }`}
                onClick={() => handleCategoryChange(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <button
                className="gallery-card"
                key={item.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`View photo: ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <span className="gallery-card__shade" />

                <span className="gallery-card__zoom" aria-hidden="true">
                  ↗
                </span>

                <span className="gallery-card__content">
                  <span className="gallery-card__category">
                    {item.category}
                  </span>
                  <span className="gallery-card__title">
                    {item.title}
                  </span>
                  <span className="gallery-card__description">
                    {item.description}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="gallery-empty">
              No photos are available in this category yet.
            </p>
          )}

          <p className="gallery-note">
            Photo gallery preview — replace the sample images and
            descriptions with authentic school photographs.
          </p>
        </div>
      </section>

      {/* School CTA */}
      <section className="gallery-cta">
        <div className="gallery-cta__decoration gallery-cta__decoration--one" />
        <div className="gallery-cta__decoration gallery-cta__decoration--two" />

        <div className="gallery-container gallery-cta__inner">
          <div>
            <span className="gallery-eyebrow">
              YOUR JOURNEY STARTS HERE
            </span>

            <h2>
              Be part of the
              <br />
              <span>Legacy story.</span>
            </h2>

            <p>
              Discover a learning community focused on knowledge,
              character, and opportunities for the next generation.
            </p>
          </div>

          <div className="gallery-cta__actions">
            <Link
              to="/admissions"
              className="gallery-btn gallery-btn--light"
            >
              Explore Admissions <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/contact"
              className="gallery-btn gallery-btn--outline"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Image lightbox */}
      {selectedItem && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={closeLightbox}
        >
          <button
            className="gallery-lightbox__close"
            type="button"
            onClick={closeLightbox}
            aria-label="Close photo viewer"
          >
            &times;
          </button>

          <button
            className="gallery-lightbox__nav gallery-lightbox__nav--previous"
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
            className="gallery-lightbox__content"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selectedItem.image} alt={selectedItem.title} />

            <div className="gallery-lightbox__caption">
              <span>{selectedItem.category}</span>
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
              <small>
                {selectedIndex + 1} / {filteredItems.length}
              </small>
            </div>
          </div>

          <button
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            &#8594;
          </button>
        </div>
      )}
    </main>
  );
}

export default GalleryPage;
