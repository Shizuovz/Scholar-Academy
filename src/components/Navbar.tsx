import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo-dark.png";
import { useMedia } from "../hooks/useMedia";

function Navbar() {
  const location = useLocation();
  const { getMedia } = useMedia();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses" },
    { path: "/initiatives", label: "Initiatives" },
    { path: "/about", label: "About Us" },
    { path: "/admissions", label: "Admissions" },
  ];

  const LinkItem = ({ path, label, mobile = false }: { path: string; label: string; mobile?: boolean }) => (
    <Link
      to={path}
      className={
        mobile
          ? isActive(path)
            ? "block text-primary font-bold py-md px-md rounded bg-primary-container/10"
            : "block text-secondary hover:text-primary-container transition-colors py-md px-md rounded"
          : isActive(path)
            ? "text-primary font-bold border-b-2 border-primary pb-1"
            : "text-secondary hover:text-primary-container transition-colors"
      }
      onClick={() => setIsOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <>
      <nav className="bg-surface/95 backdrop-blur-md border-b border-surface-variant w-full h-20 fixed top-0 z-50">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter h-full">
          <Link to="/" className="flex items-center gap-sm" onClick={() => setIsOpen(false)}>
            <img
              alt="Scholar Academy Logo"
              className="h-30 w-30 object-contain"
              src={getMedia('navbar_logo', logo)}
            />
            <span className="text-2xl font-bold text-primary hidden xs:inline">
              Scholar Academy
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-lg">
            {navLinks.map((link) => (
              <LinkItem key={link.path} path={link.path} label={link.label} />
            ))}
          </div>

          <div className="flex items-center gap-md">
            <Link
              to="/admissions"
              className="bg-primary-container text-on-primary font-bold px-md py-sm rounded hover:brightness-110 transition-all shadow-sm hidden sm:inline"
              onClick={() => setIsOpen(false)}
            >
              Enroll Now
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center text-primary"
            >
              <span className="material-symbols-outlined text-3xl">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-surface border-b border-surface-variant shadow-lg">
            <div className="px-gutter py-md flex flex-col space-y-xs">
              {navLinks.map((link) => (
                <LinkItem key={link.path} path={link.path} label={link.label} mobile={true} />
              ))}
              <Link
                to="/admissions"
                className="block bg-primary-container text-on-primary font-bold px-md py-md rounded hover:brightness-110 transition-all shadow-sm text-center w-full mt-md"
                onClick={() => setIsOpen(false)}
              >
                Enroll Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;