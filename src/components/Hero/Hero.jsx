
import darkArrow from "../../assets/dark-arrow.png";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-[6%] pb-[100px] pt-[130px] text-white max-[887px]:px-[7%] max-[650px]:min-h-[90svh] max-[650px]:px-[6%] max-[650px]:pb-[100px] max-[650px]:pt-[120px]"
      id="hero"
      style={{
        backgroundImage: `linear-gradient(
          110deg,
          rgb(36 43 71 / 82%) 0%,
          rgb(36 43 71 / 62%) 48%,
          rgb(69 81 149 / 40%) 100%
        ), url("${heroImage}")`,
      }}
    >
      <div className="mx-auto w-full max-w-[900px] text-center">
        <p className="mb-6 inline-block text-[13px] font-bold leading-[1.6] tracking-[0.24em] text-brand-sky max-[650px]:mb-[18px] max-[650px]:text-[10px] max-[650px]:tracking-[0.18em]">
          LEGACY GLOBAL ACADEMY
        </p>

        <h1 className="mx-auto max-w-[850px] text-[clamp(38px,5.5vw,72px)] font-bold leading-[1.12] tracking-[-0.035em] [text-wrap:balance] max-[650px]:text-[clamp(34px,9vw,48px)] max-[650px]:leading-[1.17] max-[650px]:tracking-[-0.025em]">
          <TypeAnimation
            sequence={[
              "Where Dreams Take Flight.",
              2500,
              "Inspiring Minds. Shaping Futures.",
              2500,
              "Learning Today. Leading Tomorrow.",
              2500,
            ]}
            wrapper="span"
            speed={50}
            cursor={true}
            repeat={Infinity}
          />
        </h1>

        <p className="mx-auto mb-8 mt-[26px] max-w-[660px] text-[17px] font-normal leading-[1.8] text-white/85 max-[887px]:max-w-[580px] max-[887px]:text-base max-[650px]:mb-[26px] max-[650px]:mt-5 max-[650px]:text-sm">
          Discover a learning community where knowledge, character, and
          curiosity come together to help learners grow and prepare for
          tomorrow.
        </p>

        <a
          href="#about"
          className="group inline-flex min-h-[50px] items-center justify-center gap-[14px] rounded-[3px] border border-brand-sky bg-brand-sky px-6 py-[14px] text-sm font-bold text-brand-dark no-underline transition-[background-color,border-color,transform] duration-[250ms] hover:-translate-y-0.5 hover:border-white hover:bg-white focus-visible:outline-2 focus-visible:outline-brand-sky focus-visible:outline-offset-4 motion-reduce:transition-none max-[650px]:min-h-[46px] max-[650px]:px-[18px] max-[650px]:py-3 max-[650px]:text-[13px]"
        >
          Discover Our School

          <img
            src={darkArrow}
            alt=""
            aria-hidden="true"
            className="h-auto w-[18px] transition-transform duration-[250ms] group-hover:translate-x-1 motion-reduce:transition-none"
          />
        </a>
      </div>

      <a
        href="#program"
        className="absolute bottom-[30px] left-1/2 flex -translate-x-1/2 items-center gap-[10px] whitespace-nowrap text-[11px] uppercase tracking-[0.12em] text-white/75 no-underline max-[650px]:bottom-6 max-[650px]:text-[10px]"
        aria-label="Scroll to academics"
      >
        <span className="block h-px w-[25px] bg-brand-sky" />
        Scroll to explore
      </a>
    </section>
  );
};

export default Hero;
