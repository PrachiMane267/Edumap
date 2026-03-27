import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

const allColleges = [
  { name: "IIT Bombay", location: "India", type: "Government", match: 95, placement: 98, fees: "₹2L/year", ranking: 1, avgPackage: "₹25 LPA", extracurricular: "Excellent", campusRating: 4.8 },
  { name: "IIT Delhi", location: "India", type: "Government", match: 94, placement: 97, fees: "₹2L/year", ranking: 2, avgPackage: "₹24 LPA", extracurricular: "Excellent", campusRating: 4.7 },
  { name: "IIT Madras", location: "India", type: "Government", match: 93, placement: 96, fees: "₹2L/year", ranking: 3, avgPackage: "₹22 LPA", extracurricular: "Very Good", campusRating: 4.7 },
  { name: "NIT Trichy", location: "India", type: "Government", match: 91, placement: 94, fees: "₹1.5L/year", ranking: 8, avgPackage: "₹15 LPA", extracurricular: "Good", campusRating: 4.5 },
  { name: "BITS Pilani", location: "India", type: "Private", match: 90, placement: 92, fees: "₹5L/year", ranking: 5, avgPackage: "₹18 LPA", extracurricular: "Very Good", campusRating: 4.6 },

  { name: "MIT", location: "USA", type: "Private", match: 97, placement: 99, fees: "$55k/year", ranking: 1, avgPackage: "$120k", extracurricular: "Excellent", campusRating: 4.9 },
  { name: "Stanford University", location: "USA", type: "Private", match: 96, placement: 98, fees: "$53k/year", ranking: 2, avgPackage: "$115k", extracurricular: "Excellent", campusRating: 4.9 },
  { name: "Harvard University", location: "USA", type: "Private", match: 95, placement: 97, fees: "$50k/year", ranking: 3, avgPackage: "$110k", extracurricular: "Excellent", campusRating: 4.8 },
  { name: "UC Berkeley", location: "USA", type: "Public", match: 92, placement: 95, fees: "$45k/year", ranking: 4, avgPackage: "$105k", extracurricular: "Very Good", campusRating: 4.7 },
  { name: "Caltech", location: "USA", type: "Private", match: 94, placement: 96, fees: "$54k/year", ranking: 6, avgPackage: "$110k", extracurricular: "Very Good", campusRating: 4.8 },

  { name: "University of Oxford", location: "UK", type: "Public", match: 96, placement: 97, fees: "£40k/year", ranking: 2, avgPackage: "£60k", extracurricular: "Excellent", campusRating: 4.8 },
  { name: "University of Cambridge", location: "UK", type: "Public", match: 96, placement: 97, fees: "£39k/year", ranking: 3, avgPackage: "£58k", extracurricular: "Excellent", campusRating: 4.8 },
  { name: "Imperial College London", location: "UK", type: "Public", match: 93, placement: 95, fees: "£38k/year", ranking: 7, avgPackage: "£55k", extracurricular: "Very Good", campusRating: 4.7 },
  { name: "UCL", location: "UK", type: "Public", match: 92, placement: 94, fees: "£35k/year", ranking: 9, avgPackage: "£50k", extracurricular: "Good", campusRating: 4.6 },

  { name: "University of Toronto", location: "Canada", type: "Public", match: 91, placement: 93, fees: "$35k/year", ranking: 18, avgPackage: "$75k", extracurricular: "Good", campusRating: 4.5 },
  { name: "University of British Columbia", location: "Canada", type: "Public", match: 90, placement: 92, fees: "$34k/year", ranking: 20, avgPackage: "$70k", extracurricular: "Good", campusRating: 4.5 },
  { name: "McGill University", location: "Canada", type: "Public", match: 89, placement: 91, fees: "$32k/year", ranking: 25, avgPackage: "$68k", extracurricular: "Good", campusRating: 4.4 },

  { name: "University of Melbourne", location: "Australia", type: "Public", match: 90, placement: 92, fees: "$33k/year", ranking: 14, avgPackage: "$72k", extracurricular: "Very Good", campusRating: 4.6 },
  { name: "University of Sydney", location: "Australia", type: "Public", match: 89, placement: 91, fees: "$32k/year", ranking: 19, avgPackage: "$70k", extracurricular: "Good", campusRating: 4.5 },

  { name: "ETH Zurich", location: "Switzerland", type: "Public", match: 95, placement: 98, fees: "$2k/year", ranking: 5, avgPackage: "$100k", extracurricular: "Excellent", campusRating: 4.9 },
  { name: "National University of Singapore", location: "Singapore", type: "Public", match: 94, placement: 96, fees: "$30k/year", ranking: 8, avgPackage: "$90k", extracurricular: "Very Good", campusRating: 4.8 },

  { name: "Delhi University", location: "India", type: "Government", match: 88, placement: 85, fees: "₹50k/year", ranking: 12, avgPackage: "₹8 LPA", extracurricular: "Good", campusRating: 4.3 },
  { name: "Mumbai University", location: "India", type: "Government", match: 85, placement: 80, fees: "₹40k/year", ranking: 20, avgPackage: "₹6 LPA", extracurricular: "Average", campusRating: 4.0 },
  { name: "VIT Vellore", location: "India", type: "Private", match: 87, placement: 88, fees: "₹3L/year", ranking: 15, avgPackage: "₹9 LPA", extracurricular: "Very Good", campusRating: 4.4 },
  { name: "SRM University", location: "India", type: "Private", match: 86, placement: 85, fees: "₹3.5L/year", ranking: 18, avgPackage: "₹8 LPA", extracurricular: "Good", campusRating: 4.3 },
];

const Compare = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<any[]>([]);

  // 🔍 Filter
  const filtered = allColleges.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Select logic
  const toggleSelect = (college: any) => {
  let updated;

  if (selected.find((c) => c.name === college.name)) {
    updated = selected.filter((c) => c.name !== college.name);
  } else {
    if (selected.length < 4) {
      updated = [...selected, college];
    } else return;
  }

  setSelected(updated);

  // ✅ SAVE TO LOCAL STORAGE
  localStorage.setItem("compareColleges", JSON.stringify(updated));
};

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#eef5f4] py-10">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <h1 className="text-3xl font-bold mb-2">College Comparison</h1>
        <p className="text-gray-500 mb-6">
          Select 2–4 colleges to compare side-by-side.
        </p>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search colleges..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border rounded-md mb-4"
        />

        {/* LIST */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {filtered.map((college) => (
            <div
              key={college.name}
              onClick={() => toggleSelect(college)}
              className={`p-4 border rounded-lg cursor-pointer ${
                selected.find((c) => c.name === college.name)
                  ? "bg-teal-100 border-teal-600"
                  : "bg-white"
              }`}
            >
              <h3 className="font-semibold">{college.name}</h3>
              <p className="text-sm text-gray-500">
                {college.location} • {college.type}
              </p>
            </div>
          ))}
        </div>

        {/* INFO */}
        {selected.length < 2 && (
          <p className="text-gray-500 text-center">
            Select at least 2 colleges to compare
          </p>
        )}

        {/* COMPARISON TABLE */}
        {selected.length >= 2 && (
          <div className="overflow-x-auto bg-white rounded-xl p-4 shadow">
            <table className="w-full text-center border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3">Parameter</th>
                  {selected.map((c) => (
                    <th key={c.name} className="p-3">{c.name}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="p-3 font-medium">Fees</td>
                  {selected.map((c) => (
                    <td key={c.name}>{c.fees || "N/A"}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-medium">Ranking</td>
                  {selected.map((c) => (
                    <td key={c.name}>
                      {c.ranking ? `#${c.ranking}` : "N/A"}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-medium">Avg Package</td>
                  {selected.map((c) => (
                    <td key={c.name}>{c.avgPackage || "N/A"}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-medium">Extra Curricular</td>
                  {selected.map((c) => (
                    <td key={c.name}>{c.extracurricular || "N/A"}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-medium">Campus Rating</td>
                  {selected.map((c) => (
                    <td key={c.name}>
                      {c.campusRating ? `⭐ ${c.campusRating}` : "N/A"}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-medium">Location</td>
                  {selected.map((c) => (
                    <td key={c.name}>{c.location || "N/A"}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-medium">Type</td>
                  {selected.map((c) => (
                    <td key={c.name}>{c.type || "N/A"}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-medium">Match %</td>
                  {selected.map((c) => (
                    <td key={c.name}>
                      {c.match ? `${c.match}%` : "N/A"}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-medium">Placement %</td>
                  {selected.map((c) => (
                    <td key={c.name}>
                      {c.placement ? `${c.placement}%` : "N/A"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            {selected.length >= 2 && (
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  // ✅ ensure latest data is saved
                  localStorage.setItem("compareColleges", JSON.stringify(selected));

                  // ✅ navigate to map
                  navigate({ to: "/map" });
                }}
                className="bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600"
              >
                Show on Map 🌍
              </button>
            </div>
          )}
          </div>
        )}

      </div>
    </div>
  );
};

export default Compare;