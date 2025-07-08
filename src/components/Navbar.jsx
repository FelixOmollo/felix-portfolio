import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 py-4 px-6 flex justify-center gap-6 text-blue-800">
      <Link to="about" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">About</Link>
      <Link to="skills" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">Skills</Link>
      <Link to="experience" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">Experience</Link>
      <Link to="projects" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">Projects</Link>
      <Link to="certificates" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">Certificates</Link>
      <Link to="contact" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">Contact</Link>
    </nav>
  );
}

