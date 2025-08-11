import { Link } from 'react-router-dom';
import ProfilePic from '../assets/ProfilePic.jpg'

const skills = [
  "ArcGIS Pro", "QGIS", "Pix4Dmapper", "Python", "ReactJS",
  "Geoserver", "Google Earth Engine (Python API)", "Spatial Analysis",
  "Remote Sensing", "Web Mapping", "Cartography", "Javascript",
  "PostgreSQL/PostGIS", "Machine Learning", "GeoDjango"
];

const interests = [
  "Environmental Monitoring", "Urban Planning", "Climate Change Analysis",
  "Disaster Management", "Precision Agriculture", "Transportation Planning"
];



export default function About() {
  return (
    <div id="about" className="py-20 px-6 bg-red-300 text-center overflow-x-hidden">

      <h1 className="font-bold text-3xl text-center mb-10">Behind the Maps</h1>
      {/* Container*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4">

        {/* Pic */}
        <div className="bg-gren-400 sm:col-span-1 lg:col-span-3 lg:col-start-1 rounded-2xl place-items-center sm:self-start gap-5 py-4 sm:row-start-1 sm:col-start-1" >

          <img className="h-40 w-40 object-cover rounded-full border-4 border-white" src={ProfilePic} alt="Profile Photo"/>
          <div className="font-bold mt-10 sm:mt-7 lg:text-lg">你好！(Nǐ hǎo!) 👋</div>

        </div>

        {/* About me */}
        <div className="bg-ambr-500 text-black-300 rounded-2xl sm:col-span-1 md:col-span-1 lg:col-span-3 sm:mt-0 sm:col-start-2 lg:col-start-1 sm:row-start-1 lg:row-start-2 sm:self-start">

           <h1 className="text-xl text-left ml-2 font-bold md:mt-5 lg:mt-7 lg:text-2xl lg:ml-8">Meet Felix</h1>
           <div className='text-left text-sm sm:text-base lg:text-lg lg:mt-5 p-2 lg:pl-8 lg:pr-6'>
            <p>I’m Felix, a passionate geospatial analyst based in Nairobi, Kenya, with expertise in remote sensing, spatial data analysis, and custom GIS solutions.</p> 
            <p className="mt-2">I transform raw geospatial data into actionable insights for urban planning, environmental monitoring, and infrastructure development.  </p>
            <p className="mt-2">
              I combine technical rigor with a passion for impact-driven spatial solutions—whether optimizing agriculture via NDVI or modeling urban growth.
            </p>
            <p className="mt-2">Take a peek into my background and experience below.</p>
           </div>
            <Link to="/experience" className="mb-5 lg:mb-7 inline-block bg-blue-700 text-white px-5 py-3 rounded-t-4xl lg:text-lg rounded-b-2xl shadow hover:bg-blue-800 transition mt-7">Explore My Background
            </Link>

        </div>

        {/* Technical skills */}
        <div className="bg-ambr-700 text-black rounded-2xl sm:col-span-2 lg:col-start-4 lg:row-start-2 lg:col-span-3 lg:mt-0 lg:self-start">

                <h1 className="text-xl lg:text-2xl font-bold mb-4 md:mb-8 lg:pt-2 text-left lg:ml-4">Technical Skills</h1>
                <div className="flex flex-wrap justify-center items-center gap-2 md:mb-8">
                  {skills.map(skill => (
                    <span key={skill} className="bg-green-200 text-green-800 text-sm lg:text-lg font-medium px-3 py-1 lg:py-0 rounded-full hover:bg-amber-300 transition">
                      {skill}
                    </span>
                  ))}
                </div>

        </div>

        {/* Areas of Interest */}
        <div className="bg-gry-300 rounded-2xl sm:col-span-1 lg:col-span-3 mt-4 sm:mt-63 lg:mt-10 sm:self-start sm:row-start-1 lg:row-start-1 sm:col-start-1 lg:col-start-4">

          <h1 className="text-xl lg:text-2xl font-bold lg:mt-7 mb-4 text-left lg:ml-4">Areas Of Interest</h1>

              <div className="flex flex-wrap items-center gap-2 md:mb-8 ml-1">
                    {interests.map(interest => (
                    <span key={interests} className="text-green-800 text-sm lg:text-lg font-medium px-1 py-1 lg:py-0 lg:ml-3 rounded-full border-1 border-black-300">
                      {interest}
                    </span>
                  ))}
              </div>

        </div>


      </div>
    </div>
  );
}
