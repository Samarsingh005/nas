import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { TipCard } from './TipCard';
import { FaBook, FaFileContract, FaBalanceScale, FaGavel, FaNewspaper } from 'react-icons/fa';

const tips = [
  {
    text: "Always read contracts thoroughly before signing",
    icon: "📝"
  },
  {
    text: "Keep records of all important legal documents",
    icon: "📋"
  },
  {
    text: "Know your basic rights and responsibilities",
    icon: "⚖️"
  },
  {
    text: "Seek legal counsel when in doubt",
    icon: "👨‍⚖️"
  },
  {
    text: "Stay informed about law changes affecting you",
    icon: "📰"
  }
];

export const Home: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 -z-10"></div>
      
      <Hero />
      <Features />
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Essential Legal Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <TipCard
              key={index}
              tip={tip.text}
              index={index}
              icon={tip.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};