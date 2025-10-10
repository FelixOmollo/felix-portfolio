// src/data/projectsData.js
import detailsDummy from '../assets/detailsDummy.jpg';
import ndre_v05 from '../assets/ndre_v05.webp';
import lulc_v05 from '../assets/lulc_v05.webp';

export const projectsData = [
  {
    id: "flood-analysis",
    category: "Disaster Management",
    title: "Flood Assessment of Barahle Refugee Camp, Ethiopia",
    image: detailsDummy,
    description:
        "This map identifies flood-prone areas within the Barahle refugee camp in Ethiopia, highlighting vulnerable buildings and infrastructure. The analysis supports disaster preparedness and safer planning for refugee communities.",
    overview:
        "Conducted a detailed flood exposure and risk assessment in Barahle refugee camp, Ethiopia, using QGIS. The project classified structures at different flood risk levels using Fathom Global 100-year return period flood maps and OpenStreetMap building footprints. This analysis supports humanitarian planning and disaster resilience initiatives.",
    objectives: [
      "Identify buildings and infrastructure exposed to varying flood risks within the camp.",
      "Assess national-scale flood exposure across 24 refugee camps in Ethiopia.",
      "Classify flood depth categories using QGIS raster analysis.",
      "Support humanitarian agencies in flood preparedness and mitigation planning.",
      "Promote data-driven decision-making for safer refugee settlements.",
    ],
    challenges: [
      "Limited availability of high-resolution hydrological data for all refugee camps.",
      "Ensuring accurate classification of flood depth thresholds and exposure levels.",
      "Integrating multiple spatial datasets (boundaries, flood maps, and building footprints).",
      "Managing raster reclassification and styling for risk visualization in QGIS.",
    ],
    solutions: [
      "Applied Fathom Global 100-year flood map clipped to Ethiopia for consistent analysis.",
      "Used zonal statistics to estimate flooded cells and exposed structures.",
      "Classified flood risk into low, medium, high, and very high categories.",
      "Visualized exposure using custom symbology and QGIS styling tools.",
    ],
    results: [
      "Produced a flood risk map showing vulnerable buildings within Barahle camp.",
      "Identified the most flood-exposed refugee camps nationally.",
      "Provided geospatial insights for humanitarian flood risk mitigation.",
      "Demonstrated simplified methods replicable for other refugee camp analyses.",
    ],
    skills: [
      "QGIS", "Spatial Analysis", "Zonal Statistics", "Raster Reclassification", "Cartography" 
    ],
    link: "/mappage/flood_analysis"
  },

  {
    id: "precision-agriculture",
    category: "Precision Agriculture / Drone Mapping",
    title: "Crop Health Assessment and Analysis Using Drone Imagery",
    image: ndre_v05,
    description:
      "This project applies drone imagery to map and visualize crop health, vigor, and plant metrics, helping farmers optimize irrigation, fertilization, and pest control.",
    overview:
      "Utilized high-resolution drone imagery to analyze crop health and detect early signs of stress. NDVI and related vegetation indices were computed to identify variations in plant vigor, guiding precision agriculture practices for sustainable yield improvement.",
    objectives: [
      "Acquire and process drone imagery for agricultural health analysis.",
      "Compute NDVI and other vegetation indices for spatial crop monitoring.",
      "Identify stress zones requiring targeted irrigation or fertilization.",
      "Develop a mapping workflow linking drone outputs with GIS layers.",
      "Support farmers with actionable visual insights for precision farming.",
    ],
    challenges: [
      "Managing large drone datasets and ensuring consistent orthomosaic quality.",
      "Translating spectral index values into practical crop management advice.",
      "Accounting for atmospheric or sensor variation during analysis.",
      "Limited field validation due to weather and accessibility constraints.",
    ],
    solutions: [
      "Preprocessed imagery using Pix4Dmapper for accurate mosaicking and georeferencing.",
      "Analyzed vegetation indices (NDVI, SAVI) in QGIS and Python for precision mapping.",
      "Classified fields based on health zones for better resource allocation.",
      "Delivered clear visual maps highlighting stress zones and healthy areas.",
    ],
    results: [
      "Improved crop monitoring efficiency and precision.",
      "Enhanced understanding of vegetation variability within farms.",
      "Optimized input usage through data-driven irrigation and fertilizer management.",
      "Demonstrated practical applications of drone mapping in agriculture.",
    ],
    skills: [
      "Pix4Dmapper", "QGIS", "Drone Imagery", "Precision Agriculture",
    ],
    link: "/mappage/precision_agriculture"
  },

  {
    id: "lulc-kajiado",
    category: "Environmental Monitoring / Remote Sensing",
    title: "Land Use Land Cover Classification Using Machine Learning",
    image: lulc_v05,
    description:
      "Automated land use and land cover (LULC) classification for Kajiado County, Kenya, using Sentinel-2 data and ESA’s WorldCover dataset for ground truthing, followed by post-processing in ArcGIS Pro and QGIS.",
    overview:
      "This project automated image classification workflows in Python using the Google Earth Engine API. Sentinel-2 SR Harmonized data was processed to analyze environmental changes in Kajiado County. The results were validated against ESA’s WorldCover dataset and refined through post-processing in ArcGIS Pro and QGIS. The approach enhances efficiency and reproducibility in environmental monitoring.",
    objectives: [
      "Automate satellite image classification for environmental monitoring.",
      "Use Sentinel-2 imagery and ESA’s WorldCover for model training and validation.",
      "Apply indices (NDVI, NDBI, MNDWI) to improve class separability.",
      "Perform classification accuracy assessment and compute Kappa statistics.",
      "Visualize LULC change patterns for sustainable development insights."
    ],
    challenges: [
      "Handling large geospatial datasets efficiently within Python API.",
      "Balancing classification accuracy across multiple land cover classes.",
      "Managing computational limits in Google Earth Engine during export.",
      "Post-processing and noise reduction in QGIS and ArcGIS Pro.",
    ],
    solutions: [
      "Developed automated GEE Python scripts for preprocessing and classification.",
      "Used ESA WorldCover data as reference for accuracy validation.",
      "Applied Random Forest algorithm for robust classification.",
      "Post-processed outputs using ArcGIS Pro and QGIS for clean visualization.",
    ],
    results: [
      "Achieved overall accuracy of 74% and Kappa coefficient of 0.67 (substantial agreement).",
      "Produced high-quality maps showing urban growth and vegetation patterns in Kajiado.",
      "Streamlined classification workflows for reproducibility and scalability.",
      "Presented results at the 2025 CEMEREM Biennial International Conference.",
    ],
    skills: [
      "Python","Machine Learning","GEE", "ArcGIS Pro", "QGIS", "Remote Sensing", "LULC",
    ],
    link: "/mappage/Kajiado_lulc"
  },
];
