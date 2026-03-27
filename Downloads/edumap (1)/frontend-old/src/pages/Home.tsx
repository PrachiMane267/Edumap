import { useEffect, useState } from "react";
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Users, BookOpen, BarChart2, Map, MapPin, MessageCircle,
  ArrowRight, CheckCircle, Star, Globe, TrendingUp, Zap
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Student Profile',
    description: 'Enter your academic scores, stream, budget, and preferences to build a personalized profile.',
    color: 'text-teal-500',
    bg: 'bg-teal-50',
    link: '/profile',
  },
  {
    icon: BookOpen,
    title: 'AI Recommendations',
    description: 'Get ML-powered college suggestions ranked by match score based on your unique profile.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    link: '/recommendations',
  },
  {
    icon: BarChart2,
    title: 'College Comparison',
    description: 'Compare 2–4 colleges side-by-side on fees, rankings, eligibility, and more.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    link: '/compare',
  },
  {
    icon: Map,
    title: 'Interactive Map',
    description: 'Explore college locations worldwide with an interactive map and geographic insights.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    link: '/map',
  },
  {
    icon: MapPin,
    title: 'Admission Guidelines',
    description: 'Step-by-step admission guidance.',
    color: 'text-teal-500',
    bg: 'bg-teal-50',
    link: '/guidelines',
  },
  {
    icon: MessageCircle,
    title: 'AI Chatbot',
    description: 'Ask questions instantly.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    link: '/recommendations',
  },
];

export default function Home() {

  // ✅ NEW: state
  const [colleges, setColleges] = useState<any[]>([]);

  // ✅ NEW: fetch backend data
  useEffect(() => {
    fetch("http://localhost:5000/api/colleges")
      .then(res => res.json())
      .then(data => {
        console.log("Backend Data:", data);
        setColleges(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="flex flex-col">

      {/* 🔥 NEW SECTION (added cleanly at top) */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Available Colleges</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {colleges.map((college) => (
              <Card key={college.id}>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{college.name}</h3>
                  <p>{college.location}</p>
                  <p>Fees: ₹{college.fees}</p>
                  <p>Rating: ⭐ {college.rating}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ORIGINAL UI (unchanged) */}

      <section className="relative overflow-hidden hero-gradient text-white">
        <div className="relative container mx-auto px-4 py-20 lg:py-28">
          <h1 className="text-4xl font-bold mb-6">
            EduMap: AI-ML Powered Global Admission Navigator
          </h1>

          <Link to="/profile">
            <Button>Start Your Journey</Button>
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description, color, bg, link }) => (
            <Link key={title} to={link}>
              <Card>
                <CardContent className="p-6">
                  <Icon />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}