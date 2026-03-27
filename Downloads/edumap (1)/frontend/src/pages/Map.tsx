import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// 📍 LOCATION MAP
const collegeLocations: any = {
  "IIT Bombay": { lat: 19.1334, lng: 72.9133 },
  "IIT Delhi": { lat: 28.545, lng: 77.1926 },
  "IIT Madras": { lat: 12.9916, lng: 80.2337 },
  "NIT Trichy": { lat: 10.7592, lng: 78.8132 },
  "BITS Pilani": { lat: 28.3639, lng: 75.5873 },

  "MIT": { lat: 42.3601, lng: -71.0942 },
  "Stanford University": { lat: 37.4275, lng: -122.1697 },
  "Harvard University": { lat: 42.377, lng: -71.1167 },
  "UC Berkeley": { lat: 37.8715, lng: -122.273 },
  "Caltech": { lat: 34.1377, lng: -118.1253 },

  "University of Oxford": { lat: 51.752, lng: -1.2577 },
  "University of Cambridge": { lat: 52.2043, lng: 0.1218 },
  "Imperial College London": { lat: 51.4988, lng: -0.1749 },
  "UCL": { lat: 51.5246, lng: -0.134 },

  "University of Toronto": { lat: 43.6629, lng: -79.3957 },
  "University of British Columbia": { lat: 49.2606, lng: -123.246 },
  "McGill University": { lat: 45.5048, lng: -73.5772 },

  "University of Melbourne": { lat: -37.7963, lng: 144.9614 },
  "University of Sydney": { lat: -33.8886, lng: 151.1873 },

  "ETH Zurich": { lat: 47.3769, lng: 8.5417 },
  "National University of Singapore": { lat: 1.2966, lng: 103.7764 },

  "Delhi University": { lat: 28.6863, lng: 77.2085 },
  "Mumbai University": { lat: 19.076, lng: 72.8777 },
  "VIT Vellore": { lat: 12.9692, lng: 79.1559 },
  "SRM University": { lat: 12.823, lng: 80.0444 },
};

const MapPage = () => {
  const [colleges, setColleges] = useState<any[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("compareColleges");

    if (data && JSON.parse(data).length > 0) {
      setColleges(JSON.parse(data));
    }
  }, []);

  // ✅ FIX: define points OUTSIDE JSX
  const points = colleges
    .map((c) => collegeLocations[c.name])
    .filter(Boolean)
    .map((loc) => [loc.lat, loc.lng]);

  return (
    <div className="min-h-screen bg-[#eef5f4] py-10">
      <div className="container mx-auto px-4">

        <h1 className="text-3xl font-bold mb-4">College Map</h1>

        {colleges.length === 0 ? (
          <p className="text-gray-500">
            No selected colleges. Go to Compare page first.
          </p>
        ) : (
          <div className="h-[500px] rounded-xl overflow-hidden shadow">

            <MapContainer
              center={[20, 0]}
              zoom={2}
              className="h-full w-full"
            >
              <TileLayer
                attribution="&copy; OpenStreetMap"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* 📍 MARKERS */}
              {colleges.map((c) => {
                const loc = collegeLocations[c.name];

                if (!loc) return null;

                return (
                  <Marker key={c.name} position={[loc.lat, loc.lng]}>
                    <Popup>
                      <div>
                        <h3 className="font-bold">{c.name}</h3>
                        <p>{c.location}</p>
                        <p>Match: {c.match}%</p>
                        <p>Placement: {c.placement}%</p>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}

              {/* 🔗 CONNECTION LINE */}
              {points.length > 1 && (
                <Polyline positions={points} color="teal" />
              )}

            </MapContainer>

          </div>
        )}
      </div>
    </div>
  );
};

export default MapPage;