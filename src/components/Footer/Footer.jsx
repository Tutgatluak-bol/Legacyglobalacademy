const containerClass = "mx-auto w-[min(1160px,calc(100%-48px))] max-sm:w-[calc(100%-32px)]";

const Footer = () => {
  return (
    <footer className="border-t border-[#e2e7f0] bg-white py-12 text-[#596278] selection:bg-brand-sky/30">
      <div className={`${containerClass} flex items-center justify-between gap-6 max-sm:flex-col max-sm:text-center max-sm:gap-4`}>
        <p className="m-0 text-[0.9rem] font-medium">
          &copy; {new Date().getFullYear()} Legacy Global Academy. All rights reserved.
        </p>

        <ul className="flex items-center gap-6 list-none p-0 m-0 max-sm:justify-center">
          <li>
            <a
              href="#terms"
              className="text-[0.88rem] font-medium text-[#596278] no-underline transition-colors hover:text-brand-primary focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="#privacy"
              className="text-[0.88rem] font-medium text-[#596278] no-underline transition-colors hover:text-brand-primary focus-visible:outline-[3px] focus-visible:outline-brand-sky focus-visible:outline-offset-4"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;