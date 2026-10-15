
import "./Navbar.css";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

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
      }
    };

    window.addEventListener("resize", closeOnResize);

    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  const closeMenu = () => setMobileMenu(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Academics", path: "/academics" },
    { label: "News & Events", path: "/news" },
    { label: "Staff", path: "/staff" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`container navbar ${sticky ? "dark-nav" : ""}`}>
      <Link
        to="/"
        className="navbar-brand"
        onClick={closeMenu}
        aria-label="Legacy Global Academy home"
      >
        <img
          src={logo}
          alt="Legacy Global Academy logo"
          className="logo"
        />

        <span className="brand-name">
          <strong>LEGACY</strong>
          <small>GLOBAL ACADEMY</small>
        </span>
      </Link>

      <ul className={mobileMenu ? "mobile-menu-open" : "hide-mobile-menu"}>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `${isActive ? "active-link" : ""} ${
                  item.path === "/contact" ? "nav-contact" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMobileMenu((open) => !open)}
        aria-label={
          mobileMenu ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={mobileMenu}
      >
        <img src={menuIcon} alt="" className="menu-icon" />
      </button>
    </nav>
  );
};

export default Navbar;
