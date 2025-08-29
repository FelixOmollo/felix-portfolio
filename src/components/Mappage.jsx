import { useParams, Link } from 'react-router-dom';

const mapsData = [
    {
        id: "project1",
        title: "Deforestation Monitoring in Kajiado",
        imaplink: "https://example.com/map1",
        description: "An interactive map showing forest loss in Kajiado County."
    },
    {    
        id: "project2",
        title: "Urban Heat Island in Nairobi",
        imaplink: "https://example.com/map2",
        description: "This map visualizes heat intensity across Nairobi."
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
    return(
        <div className="p-6">
            <h2 className='font-extrabold text-4xl'>Barahle Refuge Camp Flood Assessment map</h2>
            <p className="mt-2 text-xl">This shows the analysis of one of the camps in Ethiopia known to be prone to floods.</p>
            <iframe 
            src=""
            title=""
            className="w-full h-[500px] mt-4 border rounded-sm"/>
        </div>
    );
}