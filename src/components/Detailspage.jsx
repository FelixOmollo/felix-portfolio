import { useParams, Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import Layout from "./Layout";
import {projectsData} from './projectsData.jsx';

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return <Layout><p className="p-10 mt-15">Project not found.</p></Layout>;
  }

  return (
    <Layout>
      <div id="details" className="grid py-20 px-6 bg-white text-center sm:col-span-2 lg:col-span-4 overflow-x-hidden">
        
        {/* Back Button */}
        <div className='flex flex-start'>
          <Link to="/#projects" className="inline-block mb-6 text-blue-700 mt-5 hover:text-amber-600 transition sm:text-lg lg:text-xl">
            ← Back to portfolio
          </Link>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4">

          {/* Hero Section */}
        <div className="relative rounded-2xl sm:col-span-full md:col-span-2 lg:col-span-6 lg:mb-2">
          <img className="w-full h-full sm:h-85 lg:h-95 object-cover rounded-2xl" src={project.image} alt={project.title} />
          {/* Black overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl z-10"></div>
          <div className="absolute inset-0 z-20 flex flex-col justify-center sm:justify-end sm:mb-5 lg:mb-10 text-white text-left px-4 sm:px-6 lg:px-8 sm:text-lg">
            <span className="inline-block bg-green-800 text-sm text-white md:text-lg font-semibold px-2 py-1 md:mb-5 mb-4 rounded-full w-max">{project.category}</span>
            <h2 className="text-3xl font-bold">{project.title}</h2>
            <p className="max-w-xl lg:max-w-none mt-2 text-md lg:text-xl">{project.description}</p>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-red-300 mt-5 p-4 rounded-2xl sm:col-span-full md:col-span-2 lg:col-span-4">
          <h2 className="font-bold flex text-xl mt-2 sm:mt-4 sm:mb-4 justify-start md:text-2xl ml-2">Project Overview</h2>
          <p className="text-left m-2 md:text-lg">{project.overview}</p>
        </div>

        {/* Objectives */}
        <div className="bg-red-400 mt-5 p-4 rounded-2xl sm:col-span-full md:col-span-2 lg:col-span-4">
          <h2 className="font-bold flex text-xl justify-start ml-2 mt-2 sm:mt-4 md:text-2xl sm:mb-4">Objectives</h2>
          <ul className="space-y-2 text-left p-3 md:text-lg">
            {project.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-3"><span>✔️</span>{obj}</li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="bg-green-300 mt-5 p-4 sm:col-span-full md:col-span-1 lg:col-span-2 lg:col-start-1 rounded-2xl">
          <h2 className="font-bold flex text-xl justify-start md:text-2xl ml-2 mt-2">Challenges</h2>
          <ul className="list-disc list-inside space-y-1 md:text-lg text-left p-3">
            {project.challenges.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>

        {/* Solutions */}
        <div className="bg-green-400 mt-5 p-4 sm:col-span-full md:col-span-1 lg:col-span-2 rounded-2xl">
          <h2 className="font-bold flex text-xl justify-start ml-2 md:text-2xl mt-2">Solutions</h2>
          <ul className="list-disc list-inside space-y-1 text-left md:text-lg p-3">
            {project.solutions.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>

        {/* Key Results */}
        <div className="bg-red-300 mt-5 p-4 rounded-2xl sm:col-span-full md:col-span-2 lg:col-span-4">
          <h2 className="font-bold flex text-xl justify-start md:text-2xl ml-2 mt-2">Key Results and Impact</h2>
          <ul className="md:text-lg space-y-2 text-left p-3 md:p-0 grid grid-cols-1 md:mt-3 md:grid-cols-2 gap-x-8 lg:grid-cols-2">
            {project.results.map((r, i) => (
              <li key={i} className="flex items-start gap-3"><span>✔️</span>{r}</li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div className="bg-amber-400 rounded-2xl p-4 mt-5 md:col-span-1 lg:col-span-2 lg:row-start-2 lg:col-start-5">
          <h2 className="font-bold flex text-xl md:text-2xl justify-start ml-2 mt-2">Technologies Used</h2>
          <div className="flex flex-wrap items-center mt-5 mb-5 gap-3">
            {project.skills.map(skill => (
              <span key={skill} className="bg-green-200 text-green-800 text-sm md:text-lg font-medium px-2 py-1 lg:py-0 rounded-full hover:bg-amber-300 transition">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* External Link */}
        <div className="bg-amber-200 p-4 mt-5 rounded-2xl md:col-span-1 lg:col-span-2 lg:row-start-3 lg:col-start-5 lg:self-start">
          <h2 className="font-bold flex text-xl justify-start md:text-2xl mb-2 ml-2 mt-2">Project Links</h2>
          <a href={project.link} rel="noopener noreferrer"
             className="inline-flex gap-2 items-center md:justify-center border-[2px] md:w-full md:ml-5 lg:ml-0 md:mr-5 md:mt-2 border-green-600 text-green-600 px-10 py-3 rounded-md hover:bg-green-600 hover:border-white hover:text-white text-md lg:text-lg font-medium transition-transform duration-500 active:scale-115">
            <ExternalLink className="w-5 h-5 md:h-6 md:w-6" /> Live Demo
          </a>
        </div>

        </div>

      </div>
    </Layout>
  );
}
