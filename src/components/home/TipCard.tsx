import React from 'react';

interface TipCardProps {
  tip: string;
  index: number;
  icon: string;
}

export const TipCard: React.FC<TipCardProps> = ({ tip, index, icon }) => (
  <div 
    className="glass-effect p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 float-animation group"
    style={{ animationDelay: `${index * 0.2}s` }}
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="h-2 flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full ml-4"></div>
    </div>
    <h3 className="font-bold text-lg mb-3 text-gray-800">Tip #{index + 1}</h3>
    <p className="text-gray-600 group-hover:text-gray-800 transition-colors">{tip}</p>
  </div>
);