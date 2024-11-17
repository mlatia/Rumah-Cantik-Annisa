import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import hamburger from "../../assets/images/hamburger.svg";
import close from "../../assets/images/close.svg";
import logoPutih from "../../assets/images/logo-rca.svg";
import { NavbarMenu } from "../../router/NavbarMenu";

export default function Navbar({ scroll }: { scroll: number }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div
      className={`w-full ${scroll > 100 ? "fixed top-0 left-0 right-0 z-50 " : ""} 
      py-3 px-4 md:px-14 bg-primary`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img src={logoPutih} alt="logo" className="h-10 md:h-12" />

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <img
            src={isMenuOpen ? close : hamburger}
            alt="menu"
            className="h-6 w-6 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-end items-center gap-10">
          {NavbarMenu.map((v, i) => (
            <li key={i}>
              <Link
                to={v.url}
                className={`text-white text-sm hover:underline hover:underline-offset-2 hover:text-white ${
                  v.url.includes(pathname.substring(1)) &&
                  "underline underline-offset-2"
                }`}
              >
                {v.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4 bg-primary p-4 rounded-md">
          {NavbarMenu.map((v, i) => (
            <Link
              key={i}
              to={v.url}
              className="text-white text-sm hover:underline hover:underline-offset-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {v.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}