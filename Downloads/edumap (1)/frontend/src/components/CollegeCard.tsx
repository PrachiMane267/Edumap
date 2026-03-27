import { Link } from '@tanstack/react-router';
import { MapPin, TrendingUp, DollarSign, Award } from 'lucide-react';

type College = any;

interface CollegeCardProps {
  college: College;
  matchScore?: number;
}

const streamLabel: Record<string, string> = {
  science: "Science",
  commerce: "Commerce",
  arts: "Arts",
};

const typeLabel: Record<string, string> = {
  government: 'Government',
  private_: 'Private',
  deemed: 'Deemed',
};

export function formatFees(fees: number, country: string): string {
  if (country === 'India') return `₹${fees}`;
  return `$${fees}`;
}

export default function CollegeCard({ college, matchScore }: CollegeCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow">

      {/* Header */}
      <h3 className="font-bold text-lg">{college.name}</h3>
      <p className="text-sm text-gray-600">
        {college.city}, {college.country}
      </p>

      {/* Type + Stream */}
      <div className="flex gap-2 mt-2">
        <span className="bg-gray-200 px-2 py-1 text-xs rounded">
          {typeLabel[college.collegeType]}
        </span>
        <span className="bg-gray-200 px-2 py-1 text-xs rounded">
          {streamLabel[college.stream]}
        </span>
      </div>

      {/* Match Score */}
      {matchScore !== undefined && (
        <p className="mt-2 text-sm">
          Match Score: <strong>{matchScore}%</strong>
        </p>
      )}

      {/* Stats */}
      <div className="mt-3 text-sm">
        <p>Fees: {formatFees(college.annualFees, college.country)}</p>
        <p>Rank: #{college.rankingNational}</p>
      </div>

      {/* Button */}
      <Link to="/college/$id" params={{ id: String(college.id) }}>
        <button className="mt-3 px-3 py-1 bg-blue-500 text-white rounded">
          View Details
        </button>
      </Link>

    </div>
  );
}