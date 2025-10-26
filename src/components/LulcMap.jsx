import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function LulcMap() {
  const wmsUrl = "http://localhost:8080/geoserver/lulc_project/wms";

  return (
    <div style={{ position: "relative", width: "100%", height: "600px" }}>
      <MapContainer
        center={[-1.3, 36.8]} // adjust to your area (Kajiado, Kisumu, etc.)
        zoom={9}
        style={{ height: "100%", width: "100%", borderRadius: "8px" }}
      >
        {/* Base Map */}
        <TileLayer
          attribution='&copy; <a href="https://osm.org">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Your GeoServer WMS Layer */}
        <WMSTileLayer
          url={wmsUrl}
          layers="lulc_project:lulc_reproject"
          format="image/png"
          transparent={true}
          version="1.1.0"
          tiled={true}
        />
      </MapContainer>

      {/* Legend */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          background: "white",
          padding: "8px",
          borderRadius: "8px",
          boxShadow: "0 0 6px rgba(0,0,0,0.3)",
        }}
      >
        <img
          src="http://localhost:8080/geoserver/lulc_project/wms?service=WMS&version=1.1.0&request=GetLegendGraphic&format=image/png&layer=lulc_project:lulc_reproject&style=lulc_style2"
          alt="LULC Legend"
          style={{ display: "block" }}
        />
      </div>
    </div>
  );
}
