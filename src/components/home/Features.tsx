import React from 'react';
import { FaSpinner, FaRobot, FaBookOpen, FaUserGraduate } from 'react-icons/fa';

const features = [
  {
    icon: <FaSpinner className="w-6 h-6" />,
    title: "Interactive Spin Wheel",
    description: "Learn legal tips through our engaging spin wheel game"
  },
  {
    icon: <FaRobot className="w-6 h-6" />,
    title: "AI Legal Assistant",
    description: "Get instant answers to your legal questions"
  },
  {
    icon: <FaBookOpen className="w-6 h-6" />,
    title: "Real Scenarios",
    description: "Practice with real-world legal situations"
  },
  {
    icon: <FaUserGraduate className="w-6 h-6" />,
    title: "Knowledge Quiz",
    description: "Test your understanding of legal concepts"
  }
];

export const Features: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
    {features.map((feature, index) => (
      <div 
        key={index}
        className="glass-effect p-6 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300"
      >
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white">
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    ))}
  </div>
);