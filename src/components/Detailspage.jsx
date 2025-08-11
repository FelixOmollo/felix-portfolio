import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

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
    <Layout>
    <div id="details" className="grid py-20 px-6 bg-white text-center sm:col-span-2 lg:col-span-4 overflow-x-hidden">
          <div className='flex flex-start'>
            <Link to="/#projects" className="inline-block mb-6 text-blue-700 mt-5 hover:text-amber-600 transition sm:text-lg lg:text-xl">
              ← Back to portfolio
            </Link>
          </div>
          {/* Project 1 Details*/}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4">

              {/* Hero's Container */}
              <div className='relative bg-black/40 rounded-2xl sm:col-span-full md:col-span-2 lg:col-span-6 lg:mb-2'>
                {/* Image div */}
                <img className="w-full h-full sm:h-85 lg:h-95 object-cover rounded-2xl" src="src\assets\detailsDummy.jpg" alt="dummy image" />
                {/* Text overlay div */}
                <div className='absolute inset-0 flex flex-col justify-center sm:justify-end sm:mb-5 lg:mb-10 text-white text-left px-4 sm:px-6 lg:px-8 sm:text-lg'>
                  <span className='inline-block bg-green-800 text-sm text-white font-semibold px-2 py-1 mb-4 rounded-full w-max'>Urban Planning</span>
                  <h2 className="text-3xl font-bold">Urban Development Analysis</h2>
                  <p className='max-w-xl lg:max-w-none mt-2 text-md lg:text-xl'>Comprehensive spatial analysis for sustainable urban planning, including zoning 
                    optimization, demographic analysis, and infrastructure planning.
                  </p>
                </div>
              </div>

              {/* Project review div */}
              <div className='bg-red-300 mt-5 p-4 rounded-2xl sm:col-span-full md:col-span-2 lg:col-span-4'>
                <h2 className='font-bold flex text-xl mt-2 sm:mt-4 sm:mb-4 justify-start ml-2'>Project Overview</h2>
                <p className='text-left m-2 lg:text-lg'>This comprehensive urban development analysis project aimed to create a data-driven framework for sustainable city growth. The project involved analyzing demographic patterns, land use efficiency, and infrastructure capacity to inform strategic planning decisions.</p>
              </div>
              {/* Objective div */}
              <div className='bg-red-400 mt-5 p-4 rounded-2xl sm:col-span-full md:col-span-2 lg:col-span-4'>
                <h2 className='font-bold flex text-xl justify-start ml-2 mt-2 sm:mt-4 sm:mb-4'>Objectives</h2>
                {/* start of list */}
                <ul className='space-y-2 text-left p-3 lg:text-lg'>
                  <li className='flex items-start gap-3'>
                    <span>✔️</span>
                    <span>Develop interactive dashboards for city planners</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span>✔️</span>
                    <span>Create predictive models for future urban expansion</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span>✔️</span>
                    <span>Assess infrastructure capacity and identify improvement areas</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span>✔️</span>
                    <span>Optimize zoning regulations for sustainable development</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span>✔️</span>
                    <span>Analyze current urban growth patterns and identify trends</span>
                  </li>
                </ul>
                {/* end of list */}
              </div>

                {/* Challenges div */}
              <div className='bg-green-300 mt-5 p-4 sm:col-span-full md:col-span-1 lg:col-span-2 lg:col-start-1 rounded-2xl'>

                <h2 className='font-bold flex text-xl justify-start ml-2 mt-2'>Challenges</h2>
                <ul className='list-disc list-inside space-y-1 lg:text-lg text-left p-3'>
                  <li className=''>Ensuring data accuracy and temporal consistency</li>
                  <li>Creating user-friendly visualization tools for non-technical stakeholders</li>
                  <li>Handling large-scale demographic and geographic datasets</li>
                  <li>Integration of multiple disparate data sources</li>
                </ul>

              </div>

              {/* Solutions div */}
              <div className='bg-green-400 mt-5 p-4 sm:col-span-full md:col-span-1 lg:col-span-2 rounded-2xl'>

                <h2 className='font-bold flex text-xl justify-start ml-2 mt-2'>Solutions</h2>
                <ul className='list-disc list-inside space-y-1 text-left lg:text-lg p-3'>
                  <li>Established data quality protocols and validation procedures</li>
                  <li>Created interactive web-based dashboards using modern web technologies</li>
                  <li>Developed custom Python scripts for spatial analysis</li>
                  <li>Implemented automated ETL processes for data integration</li>
                </ul>

              </div>

              {/* Key results and Impact */}
              <div className='bg-red-300 mt-5 p-4 rounded-2xl sm:col-span-full md:col-span-2 lg:col-span-4'>
                <h2 className='font-bold flex text-xl justify-start ml-2 mt-2'>Key Results and Impact</h2>
                {/* start of list */}
                <ul className=' lg:text-lg space-y-2 text-left p-3 md:p-0 grid grid-cols-1 md:mt-3 md:grid-cols-2 gap-x-8 lg:grid-cols-2'>
                  <li className='flex items-start gap-3'>
                    <span>✔️</span>
                    <span>Develop interactive dashboards for city planners</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span>✔️</span>
                    <span>Create predictive models for future urban expansion</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span>✔️</span>
                    <span>Assess infrastructure capacity and identify improvement areas</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span>✔️</span>
                    <span>Optimize zoning regulations for sustainable development</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span>✔️</span>
                    <span>Analyze current urban growth patterns and identify trends</span>
                  </li>
                </ul>
                {/* end of list */}
              </div>

              {/* Featured skills div */}
              <div className='bg-amber-400 rounded-2xl p-4 mt-5 md:col-span-1 lg:col-span-2 lg:row-start-2 lg:col-start-5'>

                <h2 className='font-bold flex text-xl justify-start ml-2 mt-2'>Technologies Used</h2>
                <div className=" flex flex-wrap items-center mt-5 mb-5 gap-3">
                    {featuredSkill_p1.map(skill => (
                      <span key={skill} className="bg-green-200 text-green-800 text-sm lg:text-lg font-medium px-2 py-1 lg:py-0 rounded-full hover:bg-amber-300 transition">
                        {skill}
                      </span>
                    ))}
                </div>

              </div>

              {/* External link to project*/} 
             <div className='bg-amber-200 p-4 mt-5 rounded-2xl md:col-span-1 lg:col-span-2 lg:row-start-3 lg:col-start-5 lg:self-start'>
              
              <h2 className='font-bold flex text-xl justify-start ml-2 mt-2'>Project Links</h2>
              <div className="mt-5 mb-5 md:flex md:items-start">
                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 items-center md:justify-center border-[2px] md:w-full md:ml-5 md:mr-5 md:mt-2 border-green-600 text-green-600 px-10 py-3 rounded-md hover:bg-green-600 hover:border-white hover:text-white transition text-md lg:text-lg font-medium"> 
                  <ExternalLink className="w-5 h-5"/> 
                    <span>Live Demo</span>
                </a>
              </div>

          </div>


          </div> 
          {/* end of project div  */}
      </div>
    </Layout>
  );
}
