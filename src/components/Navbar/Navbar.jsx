
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 886) {
        setMobileMenu(false);
        setAcademicsOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);

    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  const closeMenu = () => {
    setMobileMenu(false);
    setAcademicsOpen(false);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Academics", path: "/academics" },
    { label: "alumnus", path: "/alumnus"},
    { label: "News & Events", path: "/news" },
    { label: "Staff", path: "/staff" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  const navLinkClasses = ({ isActive }, isContact = false) => {
    const base = isContact
      ? "inline-flex items-center justify-center rounded-md bg-brand-sky px-[19px] py-[11px] font-bold text-brand-dark transition-all duration-200 hover:-translate-y-px hover:bg-white"
      : "relative inline-block py-2 text-white transition-colors duration-200 hover:text-brand-sky after:absolute after:bottom-px after:left-0 after:h-0.5 after:w-0 after:bg-brand-sky after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full";

    if (isContact) {
      return `${base} ${isActive ? "!bg-white" : ""} max-[1100px]:px-[13px] max-[1100px]:py-[10px] max-[886px]:flex max-[886px]:w-full max-[886px]:justify-center max-[886px]:px-4 max-[886px]:py-3 max-[886px]:mt-[10px] max-[886px]:after:hidden`;
    }

    return `${base} ${isActive ? "text-brand-sky after:w-full" : ""} focus-visible:outline-2 focus-visible:outline-brand-sky focus-visible:outline-offset-4`;
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-[100] flex w-full items-center justify-between px-[5%] py-3 text-white transition-[background-color,box-shadow,padding] duration-300 max-[1100px]:px-[4%] max-[886px]:px-[5%] ${
        sticky
          ? "bg-brand-primary py-[9px] shadow-[0_4px_20px_rgb(36_43_71_/_12%)] max-[886px]:py-3"
          : "bg-transparent"
      }`}
    >
      <Link
        to="/"
        className="inline-flex shrink-0 cursor-pointer items-center gap-[10px] text-inherit no-underline"
        onClick={closeMenu}
        aria-label="Legacy Global Academy home"
      >
        <img
          src={logo}
          alt="Legacy Global Academy logo"
          className="h-12 w-12 shrink-0 object-contain max-[886px]:h-[42px] max-[886px]:w-[42px]"
        />

        <span className="flex flex-col gap-0.5 leading-[1.1] tracking-[0.04em]">
          <strong className="text-[17px] font-extrabold max-[1100px]:text-[15px]">
            LEGACY
          </strong>
          <small className="text-[10px] font-semibold tracking-[0.13em] max-[886px]:text-[9px]">
            GLOBAL ACADEMY
          </small>
        </span>
      </Link>

      <ul
        id="primary-navigation"
        className={`m-0 flex list-none items-center gap-[25px] p-0 max-[1100px]:gap-[17px] max-[886px]:fixed max-[886px]:bottom-0 max-[886px]:right-0 max-[886px]:top-0 max-[886px]:z-[101] max-[886px]:h-dvh max-[886px]:w-[min(310px,85vw)] max-[886px]:flex-col max-[886px]:items-stretch max-[886px]:gap-0 max-[886px]:overflow-y-auto max-[886px]:bg-brand-primary max-[886px]:px-7 max-[886px]:pb-[30px] max-[886px]:pt-[88px] max-[886px]:shadow-[-12px_0_35px_rgb(36_43_71_/_15%)] max-[886px]:transition-[transform,visibility] max-[886px]:duration-300 ${
          mobileMenu
            ? "max-[886px]:visible max-[886px]:translate-x-0 max-[886px]:pointer-events-auto"
            : "max-[886px]:invisible max-[886px]:translate-x-full max-[886px]:pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <li
            key={item.path}
            className={`text-sm font-medium max-[1100px]:text-[13px] max-[886px]:block max-[886px]:m-0 max-[886px]:border-b max-[886px]:border-white/15 max-[886px]:py-[15px] max-[886px]:text-[15px] ${
              item.path === "/academics" ? "group relative" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <NavLink
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={(state) =>
                  navLinkClasses(state, item.path === "/contact") +
                  " max-[886px]:block max-[886px]:w-full max-[886px]:py-[5px]"
                }
              >
                {item.label}
              </NavLink>

              {item.path === "/academics" && (
                <button
                  type="button"
                  onClick={() => setAcademicsOpen((open) => !open)}
                  className="inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-1 text-white transition-transform duration-200 hover:text-brand-sky focus-visible:outline-2 focus-visible:outline-brand-sky max-[886px]:ml-auto"
                  aria-label="Toggle Academics submenu"
                  aria-expanded={academicsOpen}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${
                      academicsOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              )}
            </div>

            {item.path === "/academics" && (
              <div
                className={`${
                  academicsOpen ? "block" : "hidden"
                } absolute left-0 top-full z-[110] min-w-[180px] rounded-md bg-brand-primary py-2 shadow-lg group-hover:block group-focus-within:block max-[886px]:static max-[886px]:mt-2 max-[886px]:w-full max-[886px]:min-w-0 max-[886px]:rounded-none max-[886px]:bg-white/5 max-[886px]:py-1 max-[886px]:shadow-none ${
                  academicsOpen
                    ? "max-[886px]:block"
                    : "max-[886px]:hidden"
                }`}
              >
                <NavLink
                  to="/academics/sciences"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 text-sm transition-colors duration-200 hover:bg-white/10 hover:text-brand-sky max-[886px]:px-4 max-[886px]:py-3 ${
                      isActive ? "text-brand-sky" : "text-white"
                    }`
                  }
                >
                  Sciences
                </NavLink>

                <NavLink
                  to="/academics/arts"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 text-sm transition-colors duration-200 hover:bg-white/10 hover:text-brand-sky max-[886px]:px-4 max-[886px]:py-3 ${
                      isActive ? "text-brand-sky" : "text-white"
                    }`
                  }
                >
                  Arts
                </NavLink>
              </div>
            )}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="relative z-[102] hidden cursor-pointer items-center justify-center rounded-md border-0 bg-transparent p-1.5 focus-visible:outline-2 focus-visible:outline-brand-sky focus-visible:outline-offset-4 max-[886px]:inline-flex"
        onClick={() => setMobileMenu((open) => !open)}
        aria-label={
          mobileMenu ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={mobileMenu}
        aria-controls="primary-navigation"
      >
        <img
          src={menuIcon}
          alt=""
          className="h-7 w-7 object-contain"
        />
      </button>
    </nav>
  );
};

export default Navbar;
