import React from "react";
import { BarChart3, Users, Database, Eye } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
            About <span className="text-indigo-900">NREGA Insight</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering transparency and understanding in rural employment through
            data visualization and open insights.
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 md:p-12 border border-indigo-100 hover:shadow-2xl transition-all duration-500">
          <p className="text-gray-700 mb-6 leading-relaxed">
            <strong className="text-indigo-700">NREGA Insight</strong> is a
            data visualization dashboard designed to bring clarity and
            transparency to the{" "}
            <span className="font-semibold text-indigo-600">
              Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)
            </span>{" "}
            — one of India’s largest social welfare initiatives.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Our platform aggregates and visualizes performance metrics from
            districts and states to help citizens, researchers, and
            policymakers track progress, identify trends, and evaluate impact.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            By simplifying complex datasets into intuitive charts and reports,
            we make government data accessible and actionable for everyone.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Built using{" "}
            <span className="font-semibold text-indigo-600">
              React, Tailwind CSS, and Recharts
            </span>
            , NREGA Insight stands for open data, clarity, and empowerment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            {
              icon: <Eye className="mx-auto text-indigo-600 mb-4" size={40} />,
              title: "Transparency",
              text: "Explore clear, visual representations of MGNREGA performance.",
              color: "from-indigo-100 via-white to-indigo-50",
            },
            {
              icon: <Database className="mx-auto text-indigo-600 mb-4" size={40} />,
              title: "Data-Driven",
              text: "Analyze verified government data in a clean, visual format.",
              color: "from-white via-indigo-50 to-indigo-100",
            },
            {
              icon: <BarChart3 className="mx-auto text-indigo-600 mb-4" size={40} />,
              title: "Insightful",
              text: "Gain insights into fund allocation, workdays, and rural impact.",
              color: "from-indigo-50 via-white to-indigo-100",
            },
            {
              icon: <Users className="mx-auto text-indigo-600 mb-4" size={40} />,
              title: "Community-Focused",
              text: "Designed for citizens, researchers, and decision-makers alike.",
              color: "from-white via-indigo-100 to-indigo-50",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-lg p-6 text-center border border-indigo-100 
                bg-gradient-to-b ${card.color} backdrop-blur-md 
                transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-indigo-300`}
            >
              <div className="transition-transform duration-500 group-hover:rotate-6">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
