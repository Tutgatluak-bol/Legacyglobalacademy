
import { ArrowRight, GraduationCap, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const base = `${import.meta.env.BASE_URL}alumnus/`;

const alumniImages = [
  { src: "alumnus-1.jpg", alt: "Legacy Global Academy alumni" },
  { src: "alumnus-2.jpg", alt: "Legacy alumni celebrating together" },
  { src: "alumnus-3.jpg", alt: "A memory from the school community" },
  { src: "alumnus-4.jpg", alt: "Legacy students and graduates" },
  { src: "alumnus-5.jpg", alt: "School anniversary celebration" },
  { src: "alumnus-6.jpg", alt: "Legacy Global Academy community" },
];

export default function AlumnusPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative isolate flex min-h-[440px] items-center bg-[#242B47] sm:min-h-[520px]">
        <img
          src={`${base}${alumniImages[0].src}`}
          alt="Legacy Global Academy alumni"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#242B47] via-[#242B47]/85 to-[#242B47]/35" />

        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#72C9F3]">
            Legacy Global Academy
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Alumni.
            <span className="mt-2 block text-[#72C9F3]">
              Our Lasting Legacy.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Celebrating our pioneers, graduates, and the memories that
            connect generations of the Legacy community.
          </p>

          <a
            href="#alumni-gallery"
            className="mt-8 inline-flex items-center gap-3 bg-[#72C9F3] px-6 py-3.5 font-semibold text-[#242B47] transition hover:bg-white"
          >
            Explore the Gallery
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Anniversary story */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#455195]">
            A Special Anniversary Moment
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#242B47] sm:text-4xl">
            Honoring the pioneers who shaped our story.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Every school's journey begins with its first students.
            At Legacy Global Academy, our pioneers hold a special
            place in the school's history.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            During the anniversary celebration, the Class of 2025
            honored the pioneer students in recognition of their
            place in the school's journey. It was a moment connecting
            the school's beginnings with a later generation.
          </p>
        </div>

        <img
          src={`${base}${alumniImages[1].src}`}
          alt={alumniImages[1].alt}
          loading="lazy"
          className="h-[320px] w-full object-cover sm:h-[440px]"
        />
      </section>

      {/* Alumni recognition */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="border-l-4 border-[#72C9F3] bg-white p-6 sm:p-8">
            <GraduationCap
              size={32}
              className="text-[#455195]"
              aria-hidden="true"
            />

            <h2 className="mt-5 text-xl font-bold text-[#242B47]">
              Recognizing Our Pioneers
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Remembering the first students whose contributions
              form an important part of the school's history.
            </p>
          </div>

          <div className="border-l-4 border-[#72C9F3] bg-white p-6 sm:p-8">
            <HeartHandshake
              size={32}
              className="text-[#455195]"
              aria-hidden="true"
            />

            <h2 className="mt-5 text-xl font-bold text-[#242B47]">
              A Legacy Across Generations
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Connecting former and graduating students through
              shared memories, appreciation, and school pride.
            </p>
          </div>
        </div>
      </section>

      {/* Full alumni gallery */}
      <section
        id="alumni-gallery"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#455195]">
            Memories and Milestones
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#242B47] sm:text-4xl">
            Moments That Matter
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A collection of moments celebrating our alumni and the
            continuing story of the Legacy community.
          </p>
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {alumniImages.map((image) => (
            <figure
              key={image.src}
              className="mb-5 break-inside-avoid overflow-hidden bg-slate-100"
            >
              <img
                src={`${base}${image.src}`}
                alt={image.alt}
                loading="lazy"
                className="h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* Closing section */}
        {/* Closing Alumni Section */}
        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
          <div className="group relative isolate overflow-hidden bg-[#242B47]">
            {/* Background Image */}
            <img
              src={`${import.meta.env.BASE_URL}alumnus/alumnus-4.jpg`}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#242B47]/95 via-[#242B47]/85 to-[#242B47]/55" />

            {/* Decorative Accent */}
            <div className="absolute right-0 top-0 -z-10 h-full w-1.5 bg-[#72C9F3]" />

            {/* Content */}
            <div className="px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#72C9F3]">
                Once a Student, Always Legacy
              </p>

              <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Our history connects us.
                <span className="mt-2 block text-[#72C9F3]">
                  Our future inspires us.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
                To every pioneer, graduate, and former student, you will
                always be part of the Legacy Global Academy story.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 bg-[#72C9F3] px-6 py-3.5 font-semibold text-[#242B47] transition duration-300 hover:bg-white"
              >
                Contact the School
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

    </main>
  );
}
