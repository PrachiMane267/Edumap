import { useMemo } from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { useGetColleges } from '@/hooks/useQueries';
import {
  MapPin, DollarSign, Award, BookOpen, FileText, CheckCircle,
  Building, Calendar, GraduationCap, TrendingUp
} from 'lucide-react';
import { formatFees } from '@/components/CollegeCard';

// ✅ FIXED (no enums)
const streamLabel: Record<string, string> = {
  science: 'Science',
  commerce: 'Commerce',
  arts: 'Arts',
};

const typeLabel: Record<string, string> = {
  government: 'Government',
  private_: 'Private',
  deemed: 'Deemed',
};

function formatDeadline(ts: bigint): string {
  if (!ts || ts === 0n) return 'Not specified';
  const ms = Number(ts) / 1_000_000;
  const d = new Date(ms);
  if (isNaN(d.getTime())) return 'Not specified';
  return d.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export default function CollegeDetail() {
  const { id } = useParams({ from: '/college/$id' });
  const { data: colleges, isLoading } = useGetColleges();

  const college = useMemo(() => {
    if (!colleges) return null;
    return colleges.find(c => String(c.id) === id) ?? null;
  }, [colleges, id]);

  // ✅ Loading
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  // ✅ Not found
  if (!college) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <Building size={40} className="text-muted-foreground mb-4" />
        <h2 className="text-xl font-bold">College Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Title */}
        <h1 className="text-2xl font-bold mb-2">{college.name}</h1>

        {/* Location */}
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin size={16} />
          <span>{college.city}, {college.country}</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 border rounded text-center">
            <DollarSign size={18} />
            <p>{formatFees(college.annualFees, college.country)}</p>
          </div>

          <div className="p-4 border rounded text-center">
            <Award size={18} />
            <p>#{Number(college.rankingNational)}</p>
          </div>

          <div className="p-4 border rounded text-center">
            <TrendingUp size={18} />
            <p>#{Number(college.rankingGlobal)}</p>
          </div>

          <div className="p-4 border rounded text-center">
            <GraduationCap size={18} />
            <p>{college.eligibilityCriteria}%</p>
          </div>
        </div>

        {/* Courses */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2 flex items-center gap-2">
            <BookOpen size={16} /> Courses
          </h2>

          <div className="flex flex-wrap gap-2">
            {college.coursesOffered.map((course: string) => (
              <span key={course} className="px-2 py-1 bg-gray-200 rounded text-sm">
                {course}
              </span>
            ))}
          </div>
        </div>

        {/* Deadline */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2 flex items-center gap-2">
            <Calendar size={16} /> Admission Deadline
          </h2>
          <p>{formatDeadline(college.applicationDeadline)}</p>
        </div>

        {/* Requirements */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2 flex items-center gap-2">
            <FileText size={16} /> Requirements
          </h2>

          <ul className="space-y-2">
            {college.admissionRequirements.map((req: string) => (
              <li key={req} className="flex items-center gap-2">
                <CheckCircle size={14} />
                {req}
              </li>
            ))}
          </ul>
        </div>

        {/* Extra Info */}
        <div className="space-y-2">
          <p><strong>Stream:</strong> {streamLabel[college.stream]}</p>
          <p><strong>Type:</strong> {typeLabel[college.collegeType]}</p>
        </div>

        {/* Back */}
        <div className="mt-6">
          <Link to="/">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Back Home
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}