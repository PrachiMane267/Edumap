import HeroSection from "../components/HeroSection";
import { Link } from '@tanstack/react-router'
import {
  Users, BookOpen, BarChart2, Map, MapPin, MessageCircle, TrendingUp, CheckCircle
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Student Profile',
    description: 'Enter your academic scores, stream, budget, and preferences.',
    link: '/profile',
  },
  {
    icon: BookOpen,
    title: 'AI Recommendations',
    description: 'Get ML-powered college suggestions.',
    link: '/recommendations',
  },
  {
    icon: BarChart2,
    title: 'College Comparison',
    description: 'Compare colleges side-by-side.',
    link: '/compare',
  },
  {
    icon: Map,
    title: 'Interactive Map',
    description: 'Explore college locations worldwide.',
    link: '/map',
  },
  {
    icon: MapPin,
    title: 'Admission Guidelines',
    description: 'Step-by-step admission guidance.',
    link: '/guidelines',
  },
  {
    icon: MessageCircle,
    title: 'AI Chatbot',
    description: 'Ask questions instantly.',
    link: '/recommendations',
  },
]

const steps = [
  {
    icon: Users,
    title: "Enter Your Profile",
    desc: "Fill in your academic stream, percentage, budget range, interests, and preferred region.",
  },
  {
    icon: TrendingUp,
    title: "Get Recommendations",
    desc: "Our ML algorithm analyzes your profile and ranks colleges by compatibility score.",
  },
  {
    icon: CheckCircle,
    title: "Compare & Decide",
    desc: "Compare shortlisted colleges side-by-side and explore detailed admission guidelines.",
  },
];

const Home = () => {
  return (
    <div className="bg-[#eef5f4] min-h-screen">

      {/* HERO */}
      <HeroSection />

      {/* STATS */}
      <section className="grid md:grid-cols-4 gap-6 px-10 mt-10">
        {[
          { value: '20+', label: 'Colleges Listed' },
          { value: '5', label: 'Countries Covered' },
          { value: '6', label: 'AI Intents Handled' },
          { value: '100%', label: 'Free to Use' },
        ].map((item) => (
          <div key={item.label} className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-teal-700">{item.value}</h2>
            <p className="text-gray-500">{item.label}</p>
          </div>
        ))}
      </section>

      {/* FEATURES TITLE */}
      <section className="text-center mt-16 px-6">
        <h2 className="text-4xl font-bold">
          Everything You Need to{" "}
          <span className="text-teal-600">Choose Wisely</span>
        </h2>

        <p className="text-gray-500 mt-3">
          Six powerful modules designed to guide you from confusion to clarity.
        </p>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-6 px-10 py-12">
        {features.map(({ icon: Icon, title, description, link }) => (
          <Link key={title} to={link}>
            <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl mb-4">
                <Icon size={22} className="text-teal-700" />
              </div>

              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-gray-500 text-sm mt-2">{description}</p>

              <p className="text-teal-600 mt-3 text-sm font-medium">
                Explore →
              </p>
            </div>
          </Link>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Three simple steps to find your perfect college match using AI-powered insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">

            <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-teal-300 via-teal-500 to-teal-300"></div>

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={index} className="relative text-center">

                  <div className="relative inline-flex">
                    <div className="w-24 h-24 rounded-2xl bg-teal-100 border-2 border-teal-200 flex items-center justify-center mx-auto mb-6 z-10">
                      <Icon size={32} className="text-teal-700" />
                    </div>

                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="font-bold text-xl mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/profile">
              <button className="bg-teal-700 text-white px-10 py-3 rounded-lg font-semibold hover:bg-teal-600 transition">
                Get Started Now →
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">

          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Find Your Dream College?
          </h2>

          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of students who have simplified their admission journey
            with EduMap's AI-powered platform.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">

            <Link to="/profile">
              <button className="bg-amber-500 hover:bg-amber-400 text-white px-8 py-3 rounded-md font-semibold shadow-lg">
                Create Your Profile
              </button>
            </Link>

            <Link to="/guidelines">
              <button className="border border-white/30 px-8 py-3 rounded-md font-semibold hover:bg-white/10">
                View Guidelines
              </button>
            </Link>

          </div>

        </div>
      </section>

    </div>
  )
}

export default Home;