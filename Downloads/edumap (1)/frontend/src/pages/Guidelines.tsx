import { useState } from 'react';
import { CheckCircle, Circle, BookOpen, FileText, Clock, GraduationCap } from 'lucide-react';
import { guidelinesData } from '@/data/guidelinesData';

export default function Guidelines() {
  const [activeTab, setActiveTab] = useState('India');

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            Admission Guidelines
          </h1>
          <p className="text-muted-foreground">
            Step-by-step admission guidance for top study destinations worldwide.
          </p>
        </div>

        {/* 🔥 SIMPLE TAB BUTTONS */}
        <div className="flex flex-wrap gap-2 mb-8">
          {guidelinesData.map((g) => (
            <button
              key={g.destination}
              onClick={() => setActiveTab(g.destination)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeTab === g.destination
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {g.flag} {g.destination}
            </button>
          ))}
        </div>

        {/* 🔥 CONTENT */}
        {guidelinesData
          .filter((g) => g.destination === activeTab)
          .map((guideline) => (
            <div key={guideline.destination} className="space-y-6">

              {/* Overview */}
              <div className="p-5 rounded-2xl bg-primary/5 border">
                <h2 className="text-xl font-bold mb-2">
                  {guideline.flag} Studying in {guideline.destination}
                </h2>
                <p>{guideline.overview}</p>
              </div>

              {/* Documents */}
              <div className="bg-white border rounded-2xl p-5">
                <h3 className="font-semibold mb-4">Required Documents</h3>
                <ul className="space-y-2">
                  {guideline.documents.map((doc) => (
                    <li key={doc.name} className="flex items-center gap-2">
                      {doc.required ? (
                        <CheckCircle size={16} className="text-green-600" />
                      ) : (
                        <Circle size={16} className="text-gray-400" />
                      )}
                      <span>{doc.name}</span>

                      {!doc.required && (
                        <span className="ml-auto text-xs bg-gray-200 px-2 py-1 rounded">
                          Optional
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div className="bg-white border rounded-2xl p-5">
                <h3 className="font-semibold mb-4">Timeline</h3>
                {guideline.timeline.map((item, idx) => (
                  <div key={item.phase} className="mb-2">
                    <strong>{idx + 1}. {item.phase}</strong> — {item.period}
                  </div>
                ))}
              </div>

              {/* Steps */}
              <div className="bg-white border rounded-2xl p-5">
                <h3 className="font-semibold mb-4">Application Steps</h3>
                {guideline.steps.map((step) => (
                  <div key={step.step} className="mb-3">
                    <strong>Step {step.step}: {step.title}</strong>
                    <p className="text-sm">{step.description}</p>
                  </div>
                ))}
              </div>

              {/* Exams */}
              <div className="bg-white border rounded-2xl p-5">
                <h3 className="font-semibold mb-4">Exam Requirements</h3>
                {guideline.exams.map((exam) => (
                  <div key={exam.name} className="mb-3 border p-3 rounded">
                    <strong>{exam.name}</strong> ({exam.scoreThreshold})
                    <p className="text-sm">{exam.fullName}</p>
                    <p className="text-xs text-gray-500">{exam.notes}</p>
                  </div>
                ))}
              </div>

            </div>
          ))}
      </div>
    </div>
  );
}