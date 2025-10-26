import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Layout from './Layout';
import { Briefcase, Award, Calendar, BadgeCheck, Eye } from 'lucide-react';
import ramani2 from '../assets/ramani2.png';
import kengen from '../assets/kengen.webp';
import rotaract from '../assets/rotaract.webp';
import ttu from '../assets/ttu.jpeg';
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



// Certificates array
const certificates = [
   {
    title: "RS for Water Resources Management",
    institution: "NASA-ARSET",
    year: "2025",
    img: "/ARSET-certificate-water-resources-management.jpg",
    description: "Introductory training on NASA snow and ice data products and their applications for water resources management."
  },
  {
    title: "UAVs In Precision Agriculture",
    institution: "Geoversity",
    year: "2024",
    img: "/uavs-in-precision-agriculture-certificate.jpg",
    description: "Specialized course on using drones for crop monitoring, mapping, and precision farming."
  },
  {
    title: "Transform AEC Projects with GIS & BIM",
    institution: "Esri",
    year: "2024",
    img: "/transform-AEC-projects-with-GIS-and-BIM.jpg",
    description: "Course on combining GIS and BIM to improve design, construction, and infrastructure management."
  },
  {
    title: "ArcGIS Python Scripting",
    institution: "LinkedIn Learning",
    year: "2024",
    img: "/arcgis-python-scripting.jpg",
    description: "Hands-on learning in automating geoprocessing tasks and workflows with Python on ArcGIS."
  },
  {
    title: "Git and Github",
    institution: "Codecademy",
    year: "2024",
    img: "/git-and-github-certificate.jpg",
    description: "Practical course on version control, branching, and collaborative development workflows."
  },
  {
    title: "React",
    institution: "Coursera",
    year: "2023",
    img: "/react-basis-certificate.jpg",
    description: "Introductory course in building modern, interactive UIs with React components and state management."
  },
   {
    title: "Cartography",
    institution: "Esri",
    year: "2023",
    img: "/cartography-certificate.jpg",
    description: "Training in map design principles, symbology, and effective visual communication with GIS tools."
  },

]




export default function Experience() {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  return (
    <Layout>
      {/* Main container */}
      <div id='experience' className=" py-20 px-6 bg-green-300 text-center sm:col-span-2 overflow-x-hidden">
        <div className='flex flex-start'>
          <Link to="/#about" className="inline-block text-blue-700 mt-5 hover:text-amber-600 transition sm:text-xl">
          ← Back to about
          </Link>
        </div>
        {/* Container */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-4">

          {/* Education div */}
          <h1 className="font-bold text-3xl sm:text-4xl text-center mt-5 mb-5 sm:mt-10 sm:mb-10 lg:text-4xl lg:mx-auto lg:col-span-6">Education</h1>

          <div className='bg-white text-left p-6 rounded-2xl shadow-md sm:ml-4 sm:mr-4 sm:shadow-xl lg:col-span-full'>

            <div className=''>

              {/* Degree Info */}
              <div className=''>
                <h2 className='font-bold text-lg sm:text-3xl mb-1 sm:mb-4 sm:ml-3'>Bachelor of Science in Geoinformatics</h2>
                <span className="block text-gray-700 mb-4 sm:text-2xl sm:ml-3">Taita Taveta University</span>
              </div>

              <hr className="border-t border-green-700 opacity-30 sm:opacity-80 my-2 sm:my-5" /> {/* I dont know, I might remove this separator* /}

              {/* Domain Specialties Section */}
              <div className="">
                <h3 className="font-semibold text-md sm:ml-3 text-emerald-700 sm:text-2xl">
                  Domain Specialties
                </h3>

                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  spaceBetween={20}
                  slidesPerView={1}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {['Remote Sensing', 'Spatial Analysis', 'GIS Development', 'Data Visualisation'].map((specialty, index) => (
                    <SwiperSlide
                      key={index}
                      className="bg-white pt-5 pb-10 rounded-lg shadow text-center text-gray-800 sm:text-xl">
                      {specialty}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

            </div>

          </div>

          {/* Work experience div */}
          <h1 className="font-bold text-3xl sm:text-4xl text-center mt-5 mb-2 sm:mt-10 md:mt-20 lg:mx-auto lg:text-4xl lg:col-span-full">Work experience</h1>
          <div className='relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:col-span-full gap-8'>

            {/* Timeline line */}
            <div className='absolute z-0 w-2 h-auto bg-black shadow-md inset-0 left-10 mt-14 sm:mt-55 md:mx-auto md:right-0 md:left-0'></div>

            {/* Work Experience 1 */}
            <div className='relative md:pl-25'>

                <div className='absolute ml-4 sm:ml-2 sm:mt-45 h-15 w-15 sm:w-20 sm:h-20 md:mx-auto md:left-0 md:right-0'>
                  <img src={ramani2} alt="Compnay Logo" 
                  className='absolute w-15 h-15 sm:w-20 sm:h-20 rounded-full object-cover border-3 sm:border-4 border-white'/>
                </div>

                <div className='z-1 mt-22 bg-white text-left p-6 rounded-2xl shadow-xl sm:ml-26 md:w-1/2 md:ml-auto'>
                  <h2 className='font-bold text-lg sm:text-2xl mb-1 flex items-center gap-2'>
                    <Briefcase className="w-5 h-5 sm:w-8 sm:h-8 text-green-800" />Mapping Technician
                  </h2>
                  <h3 className="font-semibold text-md mt-2 mb-2 text-emerald-700 sm:text-xl">Ramani Geosystems Ltd.</h3>
                  <span className="block text-gray-700 mb-4 sm:text-xl">Mar 2025 - Current</span>
                  {/* <hr className="border-t border-green-700 opacity-30 my-2" /> */}
                  <p className='sm:text-xl'>Prepare and validate spatial datasets to ensure data quality and accuracy prior to analysis. Contribute to the development of automated workflows supporting change detection and infrastructure development projects.</p>
                </div>

            </div>

            {/* Work Experience 2 */}
            <div className='relative md:pr-25'>

                <div className='absolute ml-4 sm:ml-2 sm:mt-45 h-15 w-15 sm:w-20 sm:h-20 md:mx-auto md:left-0 md:right-0'>
                  <img src={ramani2} alt="Compnay Logo" 
                  className='absolute w-15 h-15 sm:w-20 sm:h-20 rounded-full object-cover border-3 sm:border-4 border-white z-1'/>
                </div>

                <div className='z-0 mt-22 bg-white text-left p-6 rounded-2xl shadow-xl sm:ml-26 md:w-1/2 md:mr-auto md:ml-0'>
                  <h2 className='font-bold text-lg sm:text-2xl mb-1 flex items-center gap-2'>
                    <Briefcase className="w-5 h-5 sm:w-8 sm:h-8 text-green-800" />Mapping Assistant
                  </h2>
                  <h3 className="font-semibold text-md mt-2 mb-2 text-emerald-700 sm:text-xl">Ramani Geosystems Ltd.</h3>
                  <span className="block text-gray-700 mb-4 sm:text-xl">May 2024 - Sept 2024</span>
                  {/* <hr className="border-t border-green-700 opacity-30 my-2" /> */}
                  <p className='sm:text-xl'>Processed and analyzed satellite imagery for agricultural monitoring and land use classification. 
                    Assisted in developing automated workflows for change detection and crop yield prediction.</p>
                </div>

            </div>


            {/* Work Experience 3 */}
            <div className='relative md:pl-25'>

                <div className='absolute ml-4 sm:ml-2 sm:mt-45 h-15 w-15 sm:w-20 sm:h-20 md:mx-auto md:left-0 md:right-0'>
                  <img src={kengen} alt="Compnay Logo" 
                  className='absolute w-15 h-15 sm:w-20 sm:h-20 rounded-full object-cover border-3 sm:border-4 border-white z-1'/>
                </div>

                <div className='z-0 mt-22 bg-white text-left p-6 rounded-2xl shadow-xl sm:ml-26 md:w-1/2 md:ml-auto'>
                  <h2 className='font-bold text-lg sm:text-2xl mb-1 flex items-center gap-2'>
                    <Briefcase className="w-5 h-5 sm:w-8 sm:h-8 text-green-800" />GIS and Survey Intern
                  </h2>
                  <h3 className="font-semibold text-md mt-2 mb-2 text-emerald-700 sm:text-xl">Kenya Electricity Generating 
                    Company (KenGen) PLC.</h3>
                  <span className="block text-gray-700 mb-4 sm:text-xl">May 2023 - Aug 2023</span>
                  {/* <hr className="border-t border-green-700 opacity-30 my-2" /> */}
                  <p className='sm:text-xl'>Assisted in data collection, digitization, and quality control of geographic datasets. Supported senior analysts in cartographic production and spatial database maintenance.</p>
                </div>

            </div>

            {/* Work Experience 4 */}
            <div className='relative md:pr-25'>

                <div className='absolute ml-4 sm:ml-2 sm:mt-45 h-15 w-15 sm:w-20 sm:h-20 md:mx-auto md:left-0 md:right-0'>
                  <img src={ttu} alt="Compnay Logo" 
                  className='absolute w-15 h-15 sm:w-20 sm:h-20 rounded-full object-cover border-3 sm:border-4 border-white z-1'/>
                </div>

                <div className='z-0 mt-22 bg-white text-left p-6 rounded-2xl shadow-xl sm:ml-26 md:w-1/2 md:mr-auto md:ml-0'>
                  <h2 className='font-bold text-lg sm:text-2xl mb-1 flex items-center gap-2'>
                    <Briefcase className="w-5 h-5 sm:w-8 sm:h-8 text-green-800" />Student Attache
                  </h2>
                  <h3 className="font-semibold text-md mt-2 mb-2 text-emerald-700 sm:text-xl">Taita Taveta University</h3>
                  <span className="block text-gray-700 mb-4 sm:text-xl">May 2022 - Sept 2022</span>
                  {/* <hr className="border-t border-green-700 opacity-30 my-2" /> */}
                  <p className='sm:text-xl'>Supported geospatial data collection and analysis for academic research. Produced thematic maps and conducted 
                    field surveys for environmental monitoring and planning.</p>
                </div>

            </div>

            {/* Work Experience 5 */}
            <div className='relative md:pl-25'>

                <div className='absolute ml-4 sm:ml-2 sm:mt-45 h-15 w-15 sm:w-20 sm:h-20 md:mx-auto md:left-0 md:right-0'>
                  <img src={rotaract} alt="Compnay Logo" 
                  className='absolute w-15 h-15 sm:w-20 sm:h-20 rounded-full object-cover border-3 sm:border-4 border-white z-1'/>
                </div>

                <div className='z-0 mt-22 bg-white text-left p-6 rounded-2xl shadow-xl sm:ml-26 md:w-1/2 md:ml-auto'>
                  <h2 className='font-bold text-lg sm:text-2xl mb-1 flex items-center gap-2'>
                    <Briefcase className="w-5 h-5 sm:w-8 sm:h-8 text-green-800" />Volunteer Geospatial Analyst
                  </h2>
                  <h3 className="font-semibold text-md mt-2 mb-2 text-emerald-700 sm:text-xl">Taita Taveta County & Rotaract Club of Voi</h3>
                  <span className="block text-gray-700 mb-4 sm:text-xl">Dec 2021</span>
                  {/* <hr className="border-t border-green-700 opacity-30 my-2" /> */}
                  <p className='sm:text-xl'>Participated in a community-led initiative to clean and map River Voi. Collected field data, contributed to mapping the river corridor using GPS and open-source tools, and supported environmental awareness efforts among local residents.</p>
                </div>

            </div>


          </div>

          {/* Certificates div */}
          <div id="certificates" className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:col-span-full gap-8'>
            <h1 className="font-bold text-3xl text-center mt-10 lg:mt-20 mb-2 lg:mb-10 col-span-full">Certificates</h1>

                                      {/* Certificate 1 */}
              {certificates.map((cert, index) => (
              <div key={index} className="bg-white text-left p-6 rounded-2xl shadow-md">

                <h2 className="font-bold text-2xl mb-1 flex items-center gap-2">
                  <Award className="w-8 h-8 text-green-800"/>{cert.title}
                </h2>

                <div className="flex justify-between items-center mt-4 mb-2">
                  <h3 className="font-semibold text-xl text-emerald-700">{cert.institution}</h3>
                  <div className="flex justify-between gap-2">
                    <Calendar className="w-4 h-4 mt-1"/>
                    <span className="text-gray-700">{cert.year}</span>
                  </div>
                </div>

                <div>
                  <p className='md:text-lg'>{cert.description}</p>
                </div>

                <button onClick={() => setOpenModalIndex(index)} className="inline-flex items-center gap-2 bg-green-700 text-white font-semibold px-5 py-3 rounded-2xl mt-4 mb-1 hover:bg-amber-600 active:bg-amber-700 text-sm 
              transition-transform duration-500 active:scale-102">
                  <Eye className="w-5 h-5 md:h-6 md:w-6"/> View
                </button>

                {openModalIndex === index && (
                  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-4 max-w-3xl shadow-xl relative">
                      <button className="absolute top-2 right-2 text-gray-700 hover:text-black" 
                        onClick={() => setOpenModalIndex(null)}>✕</button>
                      <img src={cert.img} alt={cert.title} className="rounded-lg max-h-[80vh] w-full object-contain"/>
                    </div>
                  </div>
                )}
              </div>
            ))}


          </div>
          

        </div>
      </div>
     

    </Layout>
  );
}
