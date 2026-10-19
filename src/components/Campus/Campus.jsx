import { motion } from "framer-motion";

const campusImages = [
  {
    src: "/Legacyglobalacademy/gallery-1.jpg",
    alt: "Legacy Global Academy school gallery",
  },
  {
    src: "/Legacyglobalacademy/gallery-2.jpg",
    alt: "Learning environment at Legacy Global Academy",
  },
  {
    src: "/Legacyglobalacademy/gallery-3.jpg",
    alt: "School facilities at Legacy Global Academy",
  },
  {
    src: "/Legacyglobalacademy/gallery-4.jpg",
    alt: "School life at Legacy Global Academy",
  },
];

const containerClass = "mx-auto w-[min(1160px,calc(100%-48px))] max-sm:w-[calc(100%-32px)]";

const sectionLabel =
  "inline-block text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-brand-primary";

const sectionHeading =
  "mt-3 text-[clamp(2.2rem,4.2vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-brand-dark";

const sectionParagraph =
  "mt-4 text-[1rem] leading-[1.85] text-[#596278]";

const Campus = () => {
  return (
    <section className={`${containerClass} py-24 max-lg:py-16 max-sm:py-12`} id="campus">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-16 max-w-[700px] text-center max-sm:mb-10"
      >
        <span className={sectionLabel}>
          OUR CAMPUS
        </span>

        <h2 className={sectionHeading}>
          Spaces Designed for <span className="text-brand-primary">Growth</span>
        </h2>

        <p className={`${sectionParagraph} mx-auto max-w-[600px]`}>
          Explore the vibrant environments and modern spaces where our school community comes together to learn and thrive.
        </p>
      </motion.div>

      <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {campusImages.map((image, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={image.src}
            className="overflow-hidden rounded-[8px] bg-[#e7edf6] group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Campus;