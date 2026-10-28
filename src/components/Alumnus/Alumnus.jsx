
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const alumni = [
  {
    image: `${import.meta.env.BASE_URL}alumnus/alumnus-1.jpg`,
    alt: "Legacy Global Academy alumni",
  },
  {
    image: `${import.meta.env.BASE_URL}alumnus/alumnus-2.jpg`,
    alt: "Students celebrating their school journey",
  },
  {
    image: `${import.meta.env.BASE_URL}alumnus/alumnus-3.jpg`,
    alt: "Legacy school community",
  },
];

export default function Alumnus() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#455195]">
              Our Alumni
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#242B47] sm:text-4xl">
              A Legacy That Lives On
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Celebrating the people, memories, and milestones that
              continue to shape the Legacy Global Academy story.
            </p>
          </div>

          <Link
            to="/alumnus"
            className="inline-flex w-fit shrink-0 items-center gap-2 font-semibold text-[#455195] transition hover:text-[#72C9F3]"
          >
            Explore Our Alumni
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {alumni.map((item, index) => (
            <Link
              to="/alumnus"
              key={item.image}
              className={`group relative block overflow-hidden bg-slate-100 ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#242B47]/55 to-transparent opacity-70 transition group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
