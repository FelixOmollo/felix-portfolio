import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import footerBg2 from '../assets/footerBg2.jpg';



const featuredSkill_p1 = [
  "ArcGIS Pro", "QGIS", "Pix4Dmapper", "Python", "ReactJS"
];

const featuredSkill_p2 = [
  "Geoserver", "Google Earth Engine (Python API)", "Spatial Analysis"
];

const featuredSkill_p3 = [
  "Remote Sensing", "Web Mapping", "Cartography", "Javascript"
];
const featuredSkill_p4 = [
  "PostgreSQL/PostGIS", "Machine Learning", "GeoDjango"
];

export default function Projects() {
  return (
    <div id="projects" className="py-20 px-6 bg-green-300 text-center overflow-x-hidden">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-4xl text-center mb-10">Portfolio</h1>
      
      {/* Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Project 1 */}
          <div className="bg-amber-800 grid lg:ml-5 sm:col-span-2 lg:col-span-3 rounded-2xl">

                {/* Image div */}
                <div className="flex justify-center">

                  <img className="rounded-t-2xl w-full sm:h-64 object-cover" src={footerBg2} alt="Dummy" />

                </div>

                {/* Text content */}
                <div className="text-left mt-5 ml-5">

                  <h2 className="font-bold flex text-xl md:text-2xl md:mb-2">Urban Development</h2>
                  <p className="flex py-2 lg:pr-3 md:text-lg lg:text-lg">Comprehensive spatial analysis for sustainable urban planning, including zoning optimization, demographic analysis, and infrastructure planning.
                  </p>

                </div>

                {/* Featured skills div */}
                <div className="flex flex-wrap items-center mt-3 ml-5 pr-2 gap-3">

                      {featuredSkill_p1.map(skill => (
                        <span key={skill} className="bg-green-200 text-green-800 text-sm md:text-lg md:py-0 font-medium px-3 py-1 rounded-full hover:bg-amber-300 transition">
                          {skill}
                        </span>
                      ))}

                </div>

                {/* Button */}
                <div className="flex mb-5 mt-5 ml-5 items-center gap-3">
                  <Link to="/details" className="inline-block bg-blue-700 text-white py-2 md:text-lg lg:text-lg font-medium rounded-full w-40 shadow hover:bg-amber-600 transition-transform duration-500 focus:scale-115">View Details
                  </Link>
                  {/* External link to project */}
                  <a href="/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-green-800 text-green-800 p-2 rounded-md hover:bg-green-800 hover:text-white transition-transform duration-500 active:scale-125"> 
                    <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </div>

          </div>


          {/* Project 2 */}
          <div className="bg-amber-600 grid lg:mr-5 sm:col-span-2 lg:col-span-3 rounded-2xl">

                {/* Image div */}
                <div className="flex justify-center ">

                  <img className="rounded-t-2xl w-full sm:h-64 object-cover" src={footerBg2} alt="Dummy" />

                </div>

                {/* Text content */}
                <div className="text-left mt-5 ml-5">
                  <h2 className="font-bold flex text-xl md:text-2xl md:mb-2">Urban Development</h2>
                  <p className="flex py-2 lg:pr-3 md:text-lg lg:text-lg">Comprehensive spatial analysis for sustainable urban planning, including zoning optimization, demographic analysis, and infrastructure planning.
                  </p>
                </div>

                {/* Featured skills div */}
                <div className="flex flex-wrap items-center mt-3 ml-5 pr-2 gap-3">
                      {featuredSkill_p1.map(skill => (
                        <span key={skill} className="bg-green-200 text-green-800 text-sm md:text-lg font-medium px-3 py-1 rounded-full hover:bg-amber-300 transition">
                          {skill}
                        </span>
                      ))}
                </div>

                {/* Button */}
                <div className="flex mb-5 mt-5 ml-5 items-center gap-3">
                  <Link to="/details" className="inline-block bg-blue-700 text-white md:text-lg lg:text-lg font-medium py-2 rounded-full w-40 shadow hover:bg-amber-600 transition-transform duration-500 active:scale-115">View Details
                  </Link>
                  {/* External link to project */}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-green-800 text-green-800 p-2 rounded-md hover:bg-green-800 hover:text-white transition-transform duration-500 active:scale-125"> 
                    <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </div>

          </div>


          {/* Project 3 */}
          <div className="bg-amber-400 lg:ml-5 grid sm:col-span-2 lg:col-span-3 rounded-2xl">
                {/* Image div */}
                <div className="flex justify-center ">
                  <img className="rounded-t-2xl w-full sm:h-64 object-cover" src={footerBg2} alt="Dummy" />
                </div>
                {/* Text content */}
                <div className="text-left mt-5 ml-5">
                  <h2 className="font-bold flex md:text-2xl text-xl md:mb-2">Urban Development</h2>
                  <p className="flex py-2 lg:pr-3 md:text-lg lg:text-lg">Comprehensive spatial analysis for sustainable urban planning, including zoning optimization, demographic analysis, and infrastructure planning.
                  </p>
                </div>
                {/* Featured skills div */}
                <div className="flex flex-wrap items-center mt-3 ml-5 pr-2 gap-3">
                      {featuredSkill_p1.map(skill => (
                        <span key={skill} className="bg-green-200 text-green-800 text-sm md:text-lg font-medium px-3 py-1 rounded-full hover:bg-amber-300 transition">
                          {skill}
                        </span>
                      ))}
                </div>
                {/* Button */}
                <div className="flex mb-5 mt-5 ml-5 items-center gap-3">
                  <Link to="/details" className="inline-block bg-blue-700 text-white md:text-lg py-2 lg:text-lg font-medium rounded-full w-40 shadow hover:bg-amber-600 transition-transform duration-500 active:scale-115">View Details
                  </Link>
                  {/* External link to project */}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-green-800 text-green-800 p-2 rounded-md hover:bg-green-800 hover:text-white transition-transform duration-500 active:scale-125"> 
                    <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </div>
          </div>


          {/* Project 4 */}
          <div className="bg-amber-200 lg:mr-5 grid sm:col-span-2 lg:col-span-3 rounded-2xl">
                {/* Image div */}
                <div className="flex justify-center ">
                  <img className="rounded-t-2xl w-full sm:h-64 object-cover" src={footerBg2} alt="Dummy" />
                </div>
                {/* Text content */}
                <div className="text-left mt-5 ml-5">
                  <h2 className="font-bold flex text-xl md:mb-2 md:text-2xl">Urban Development</h2>
                  <p className="flex py-2 lg:pr-3 md:text-lg lg:text-lg">Comprehensive spatial analysis for sustainable urban planning, including zoning optimization, demographic analysis, and infrastructure planning.
                  </p>
                </div>
                {/* Featured skills div */}
                <div className="flex flex-wrap items-center mt-3 ml-5 pr-2 gap-3">
                      {featuredSkill_p1.map(skill => (
                        <span key={skill} className="bg-green-200 text-green-800 text-sm md:text-lg font-medium px-3 py-1 rounded-full hover:bg-amber-300 transition">
                          {skill}
                        </span>
                      ))}
                </div>
                {/* Button */}
                <div className="flex mb-5 mt-5 ml-5 items-center gap-3">
                  <Link to="/details" className="inline-block bg-blue-700 text-white md:text-lg lg:text-lg font-medium py-2 rounded-full w-40 shadow hover:bg-amber-600 transition-transform duration-500 active:scale-115">View Details
                  </Link>
                  {/* External link to project */}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-green-800 text-green-800 p-2 rounded-md hover:bg-green-800 hover:text-white transition-transform duration-500 active:scale-125"> 
                    <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </div>
          </div>
      </div>
    </div>
  );
}
