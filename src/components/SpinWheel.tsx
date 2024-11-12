import React, { useState } from 'react';

const lawTips = [
  { text: "Know your fundamental rights", color: "from-blue-500 to-indigo-500" },
  { text: "Always read contracts carefully", color: "from-green-500 to-teal-500" },
  { text: "Keep legal documents safe", color: "from-purple-500 to-pink-500" },
  { text: "Seek legal counsel when needed", color: "from-red-500 to-orange-500" },
  { text: "Stay updated with law changes", color: "from-yellow-500 to-amber-500" },
  { text: "Document everything important", color: "from-cyan-500 to-blue-500" },
  { text: "Know your consumer rights", color: "from-rose-500 to-pink-500" },
  { text: "Understand privacy laws", color: "from-violet-500 to-purple-500" }
];

export const SpinWheel: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [tip, setTip] = useState('');
  const [currentColor, setCurrentColor] = useState('from-blue-500 to-indigo-500');
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    const newRotation = rotation + Math.floor(Math.random() * 1440) + 360;
    setRotation(newRotation);
    
    setTimeout(() => {
      const tipIndex = Math.floor(Math.random() * lawTips.length);
      setTip(lawTips[tipIndex].text);
      setCurrentColor(lawTips[tipIndex].color);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center p-8">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 blur-xl opacity-50"></div>
        <div 
          className="relative w-80 h-80 rounded-full shadow-2xl overflow-hidden"
          style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 3s cubic-bezier(0.4, 2, 0.55, 0.44)' }}
        >
          {lawTips.map((_, index) => (
            <div
              key={index}
              className={`absolute w-full h-full bg-gradient-to-r ${lawTips[index].color}`}
              style={{
                transform: `rotate(${index * (360 / lawTips.length)}deg)`,
                transformOrigin: '50% 50%',
                clipPath: `polygon(0 0, 50% 50%, ${50 + 50 * Math.cos((2 * Math.PI * (index + 1)) / lawTips.length)}% ${50 + 50 * Math.sin((2 * Math.PI * (index + 1)) / lawTips.length)}%, 50% 50%)`
              }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
              <span className="text-3xl">🎯</span>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={spinWheel}
        disabled={isSpinning}
        className={`mt-8 px-8 py-3 rounded-full font-bold text-white shadow-lg transform transition-all ${
          isSpinning 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:scale-105 hover:shadow-xl'
        }`}
      >
        {isSpinning ? 'Spinning...' : 'Spin for Legal Tip'}
      </button>

      {tip && (
        <div className={`mt-8 p-6 rounded-xl bg-gradient-to-r ${currentColor} transform transition-all duration-500`}>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
            <p className="text-lg font-semibold text-gray-800">{tip}</p>
          </div>
        </div>
      )}
    </div>
  );
};