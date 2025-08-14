import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-[0_0px_30px_rgba(227,228,237,0.37)] backdrop-blur-md border-2 border-[rgba(255,255,255,0.18)]">
      <div className="flex justify-between items-center px-6 py-4">
        <Link to="/#hero" className="text-xl md:text-3xl lg:text-3xl font-bold text-white">FELIX OMOLLO</Link>
        
        {/* Hamburger icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-800 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:text-xl lg:text-xl gap-6 lg:mr-10 lg:gap-10 text-white">
          {["home", "about", "projects", "contact"].map((item) => (
            <Link
              key={item}
              to={`/#${item === "home" ? "hero" : item}`}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-600"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
              <Link
                    to="/experience"
                    onClick={closeMenu}
                    className="cursor-pointer hover:text-blue-600">
                            Experience
              </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-blue-800 shadow-[0_0px_30px_rgba(227,228,237,0.37)] backdrop-blur-[30px] border-2 border-[rgba(255,255,255,0.18)]">
          {["home", "about", "projects", "contact"].map((item) => (
            <Link
              key={item}
              to={`/#${item === "home" ? "hero" : item}`}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer hover:text-blue-600"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
            <Link
                to="/experience"
                onClick={closeMenu}
                className="cursor-pointer hover:text-blue-600">
                  Experience
            </Link>
        </div>
      )}
    </nav>
  );
}
