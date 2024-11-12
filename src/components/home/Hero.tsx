import React from 'react';

export const Hero: React.FC = () => (
  <div className="text-center mb-16 relative">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 transform -skew-y-3"></div>
    <div className="relative py-16">
      <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        Welcome to Law Learning Hub
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Your interactive platform for understanding legal concepts through engaging activities and real-world scenarios
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          Start Learning
        </div>
        <div className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          Explore Features
        </div>
      </div>
    </div>
  </div>
);