import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { RefreshCw, User } from "lucide-react";

const Recommendations = () => {
  const [profile, setProfile] = useState<any>(null);

  const handleRefresh = () => {
  const data = localStorage.getItem("profileData");
  if (data) {
    setProfile(JSON.parse(data));
  }
};

  useEffect(() => {
    const data = localStorage.getItem("profileData");
    if (data) {
      setProfile(JSON.parse(data));
    }
  }, []);

  const colleges = [
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
  return (
    <div className="min-h-screen bg-[#eef5f4] py-10">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">
              Your Recommendations
            </h1>
            <p className="text-gray-500">
              AI-powered college matches based on your profile
            </p>
          </div>

          <div className="flex gap-2">
            <button
                  onClick={handleRefresh}
                  className="flex items-center gap-2 border px-3 py-2 rounded-md text-sm">
              <RefreshCw size={14} />
              Refresh
            </button>

            <Link to="/profile">
              <button className="flex items-center gap-2 border px-3 py-2 rounded-md text-sm">
                <User size={14} />
                Edit Profile
              </button>
            </Link>
          </div>
        </div>

        {/* ❌ NO PROFILE */}
        {!profile ? (
          <div className="max-w-lg mx-auto text-center py-16">
            <div className="w-20 h-20 rounded-2xl bg-teal-100 flex items-center justify-center mx-auto mb-6">
              <User size={36} className="text-teal-700" />
            </div>

            <h2 className="text-2xl font-bold mb-3">
              No Profile Found
            </h2>

            <p className="text-gray-500 mb-6">
              Please create your student profile first to get personalized college recommendations.
            </p>

            <Link to="/profile">
              <button className="bg-teal-700 text-white px-6 py-3 rounded-md font-semibold">
                Create Your Profile
              </button>
            </Link>
          </div>
        ) : (
          <>
            {/* ✅ PROFILE SUMMARY (optional but cool) */}
            <div className="mb-6 bg-white p-4 rounded-xl shadow-sm">
              <p className="text-sm text-gray-500">
                Showing results for:
              </p>
              <p className="font-medium">
                {profile.stream} | {profile.region} | Budget ₹{profile.minBudget} - ₹{profile.maxBudget}
              </p>
            </div>

            {/* ✅ COLLEGE CARDS */}
            <div className="grid md:grid-cols-3 gap-6">
              {colleges.map((college, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition"
                >
                  <h3 className="text-lg font-bold mb-2">
                    {college.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {college.location} • {college.type}
                  </p>

                  <div className="mt-4">
                    <div className="text-sm text-gray-500">
                      Match Score
                    </div>
                    <div className="text-xl font-bold text-teal-700">
                      {college.match}%
                    </div>
                  </div>

                  {/* PLACEMENT */}
                  <div>
                    <div className="text-sm text-gray-500">Placement</div>
                    <div className="text-lg font-bold text-green-600">
                      {college.placement}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Recommendations;