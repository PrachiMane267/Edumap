import { useState } from "react";
import { BookOpen, DollarSign, User, Globe } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

const Profile = () => {
  const [formData, setFormData] = useState({
    stream: "",
    percentage: "",
    minBudget: "",
    maxBudget: "",
    interests: [] as string[],
    region: "",
    collegeType: "",
  });

  const [errors, setErrors] = useState<any>({});

  const interestsList = ["Engineering", "Medicine", "Management", "Law", "Arts"];

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let newErrors: any = {};

    if (!formData.stream) newErrors.stream = "Please select your stream";
    if (!formData.percentage || formData.percentage < 0 || formData.percentage > 100)
      newErrors.percentage = "Enter a valid percentage (0–100)";
    if (!formData.minBudget) newErrors.minBudget = "Enter a valid minimum budget";
    if (!formData.maxBudget) newErrors.maxBudget = "Enter a valid maximum budget";
    if (formData.interests.length === 0)
      newErrors.interests = "Select at least one interest";
    if (!formData.region) newErrors.region = "Please select a preferred region";
    if (!formData.collegeType) newErrors.collegeType = "Please select a college type";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    localStorage.setItem("profileData", JSON.stringify(formData));
    navigate({ to: "/recommendations" });
  };

  return (
    <div className="min-h-screen bg-[#eef5f4] py-10">
      <div className="container mx-auto px-4 max-w-2xl">

        {/* TITLE */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Student Profile</h1>
          <p className="text-gray-500">
            Tell us about yourself so we can find the best college matches for you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* ACADEMIC DETAILS */}
          <div className="bg-white rounded-xl border shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
              <div className="w-8 h-8 bg-teal-100 flex items-center justify-center rounded-lg">
                <BookOpen size={16} className="text-teal-700" />
              </div>
              Academic Details
            </div>

            <div className="grid sm:grid-cols-2 gap-4">

              {/* STREAM */}
              <div>
                <select
                  name="stream"
                  value={formData.stream}
                  onChange={handleChange}
                  className={`p-3 border rounded-md w-full ${errors.stream ? "border-red-500" : ""}`}
                >
                  <option value="">Select Stream</option>
                  <option>Science</option>
                  <option>Commerce</option>
                  <option>Arts</option>
                </select>
                {errors.stream && <p className="text-xs text-red-500 mt-1">{errors.stream}</p>}
              </div>

              {/* PERCENTAGE */}
              <div>
                <input
                  type="number"
                  name="percentage"
                  placeholder="e.g. 85.5"
                  value={formData.percentage}
                  onChange={handleChange}
                  className={`p-3 border rounded-md w-full ${errors.percentage ? "border-red-500" : ""}`}
                />
                {errors.percentage && <p className="text-xs text-red-500 mt-1">{errors.percentage}</p>}
              </div>

            </div>
          </div>

          {/* BUDGET */}
          <div className="bg-white rounded-xl border shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
              <div className="w-8 h-8 bg-amber-100 flex items-center justify-center rounded-lg">
                <DollarSign size={16} className="text-amber-600" />
              </div>
              Budget Range
            </div>

            <div className="grid sm:grid-cols-2 gap-4">

              {/* MIN */}
              <div>
                <input
                  type="number"
                  name="minBudget"
                  placeholder="Min Budget"
                  value={formData.minBudget}
                  onChange={handleChange}
                  className={`p-3 border rounded-md w-full ${errors.minBudget ? "border-red-500" : ""}`}
                />
                {errors.minBudget && <p className="text-xs text-red-500 mt-1">{errors.minBudget}</p>}
              </div>

              {/* MAX */}
              <div>
                <input
                  type="number"
                  name="maxBudget"
                  placeholder="Max Budget"
                  value={formData.maxBudget}
                  onChange={handleChange}
                  className={`p-3 border rounded-md w-full ${errors.maxBudget ? "border-red-500" : ""}`}
                />
                {errors.maxBudget && <p className="text-xs text-red-500 mt-1">{errors.maxBudget}</p>}
              </div>

            </div>
          </div>

          {/* INTERESTS */}
          <div className="bg-white rounded-xl border shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
              <div className="w-8 h-8 bg-teal-100 flex items-center justify-center rounded-lg">
                <User size={16} className="text-teal-700" />
              </div>
              Areas of Interest
            </div>

            <div className="flex flex-wrap gap-3">
              {interestsList.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => toggleInterest(item)}
                  className={`px-4 py-2 rounded-xl border ${
                    formData.interests.includes(item)
                      ? "bg-teal-700 text-white"
                      : "bg-white text-gray-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {errors.interests && (
              <p className="text-xs text-red-500 mt-2">{errors.interests}</p>
            )}
          </div>

          {/* PREFERENCES */}
          <div className="bg-white rounded-xl border shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
              <div className="w-8 h-8 bg-amber-100 flex items-center justify-center rounded-lg">
                <Globe size={16} className="text-amber-600" />
              </div>
              Preferences
            </div>

            <div className="grid sm:grid-cols-2 gap-4">

              {/* REGION */}
              <div>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  className={`p-3 border rounded-md w-full ${errors.region ? "border-red-500" : ""}`}
                >
                  <option value="">Select Region</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                </select>
                {errors.region && <p className="text-xs text-red-500 mt-1">{errors.region}</p>}
              </div>

              {/* COLLEGE TYPE */}
              <div>
                <select
                  name="collegeType"
                  value={formData.collegeType}
                  onChange={handleChange}
                  className={`p-3 border rounded-md w-full ${errors.collegeType ? "border-red-500" : ""}`}
                >
                  <option value="">Select Type</option>
                  <option>Government</option>
                  <option>Private</option>
                  <option>Deemed</option>
                </select>
                {errors.collegeType && <p className="text-xs text-red-500 mt-1">{errors.collegeType}</p>}
              </div>

            </div>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-teal-800 text-white py-3 rounded-lg font-semibold hover:bg-teal-700"
          >
            Save Profile & Get Recommendations
          </button>

        </form>
      </div>
    </div>
  );
};

export default Profile;