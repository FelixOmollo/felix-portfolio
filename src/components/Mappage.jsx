import { useParams, Link } from 'react-router-dom';

const mapsData = [
    {
        id: "flood_analysis",
        title: "Flood Assessment of Barahle Refugee Camp in Ethiopia",
        imaplink: "https://felixomollo.github.io/portfolio-maps/flood_analysis/",
        description: "This is a map showing buildngs that will likely be affected with floods."
    },
    {    
        id: "precision_agriculture",
        title: "Urban Heat Island in Nairobi",
        imaplink: "https://felixomollo.github.io/portfolio-maps/precision_agriculture/",
        description: "This map visualizes ndvi and ndre of a crop field."
    },
    {
        id: "project3",
        title: "Flood Risk Zones in Kisumu",
        imaplink: "https://example.com/map3",
        description: "Flood-prone areas mapped using Sentinel-2 and DEM data."
    },
    {
        id: "project3",
        title: "Flood Risk Zones in Kisumu",
        imaplink: "https://example.com/map3",
        description: "Flood-prone areas mapped using Sentinel-2 and DEM data."
    }
]

export default function Mappage () {

    const { id } = useParams();                      // Grab the id from the URL
    const map = mapsData.find((m) => m.id === id);   //Find the correspoinding map address

    if (!map) {
    return (
      <div className="p-6">
        <h2 className="text-red-600 text-2xl font-bold">Map not found</h2>
        <Link
          to="/#projects"
          className="text-lg flex justify-center mt-4 text-blue-500 hover:text-amber-600 transition lg:text-xl"
        >
          Back to projects
        </Link>
      </div>
    );
  }
    


    return(
        <div className="p-6">
            <h2 className='font-extrabold text-4xl'>{map.title}</h2>
            <p className="mt-2 text-xl">{map.description}</p>
            <iframe 
            src={map.imaplink}
            title={map.title}
            className="w-full h-[500px] mt-4 border rounded-lg"/>
            <Link to="/#projects" className="text-lg flex justify-center mt-4 text-blue-500  hover:text-amber-600 transition lg:text-xl">Back to projects</Link>
        </div>
    );
}