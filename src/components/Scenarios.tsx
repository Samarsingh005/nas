import React, { useState } from 'react';

const scenarios = [
  {
    title: "Employment Contract Review",
    description: "You've received a job offer with a complex employment contract. What steps should you take?",
    options: [
      "Sign immediately to secure the job",
      "Take time to review and seek legal counsel if needed",
      "Ignore the complex parts and focus on salary",
      "Ask friends for their opinion"
    ],
    correct: 1,
    explanation: "Always review contracts carefully and seek professional legal advice for complex terms."
  },
  {
    title: "Consumer Rights Dispute",
    description: "You bought a defective product and the store refuses to refund. What's your best course of action?",
    options: [
      "Accept the loss and move on",
      "Create a social media campaign against the store",
      "File a formal complaint with consumer protection",
      "Threaten the store staff"
    ],
    correct: 2,
    explanation: "Consumer protection laws exist to help in such situations. Official channels are the best approach."
  },
  {
    title: "Rental Property Dispute",
    description: "Your landlord enters your apartment without notice. How should you respond?",
    options: [
      "Change the locks immediately",
      "Document the incidents and send a formal notice",
      "Ignore it as they own the property",
      "Stop paying rent"
    ],
    correct: 1,
    explanation: "Tenants have rights to privacy and proper notice. Documentation and formal communication are key."
  },
  {
    title: "Traffic Violation",
    description: "You've received a traffic ticket you believe is unfair. What should you do?",
    options: [
      "Ignore it and hope it goes away",
      "Pay it immediately without question",
      "Review your rights and contest if appropriate",
      "Argue with the officer on scene"
    ],
    correct: 2,
    explanation: "You have the right to contest tickets, but it must be done through proper legal channels."
  },
  {
    title: "Workplace Discrimination",
    description: "You suspect discrimination at work. What's the appropriate first step?",
    options: [
      "Quit immediately",
      "Document incidents and report to HR",
      "Confront the person directly",
      "Post about it on social media"
    ],
    correct: 1,
    explanation: "Documentation and following proper reporting procedures are crucial in discrimination cases."
  }
];

export const Scenarios: React.FC = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOption = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    setShowExplanation(true);
  };

  const nextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setShowExplanation(false);
      setSelectedOption(null);
    }
  };

  const resetScenarios = () => {
    setCurrentScenario(0);
    setShowExplanation(false);
    setSelectedOption(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">{scenarios[currentScenario].title}</h2>
        <p className="text-lg mb-6">{scenarios[currentScenario].description}</p>
        
        <div className="space-y-3">
          {scenarios[currentScenario].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOption(index)}
              disabled={showExplanation}
              className={`w-full p-3 text-left rounded-lg ${
                showExplanation
                  ? index === scenarios[currentScenario].correct
                    ? 'bg-green-100'
                    : selectedOption === index
                    ? 'bg-red-100'
                    : 'bg-gray-100'
                  : 'bg-gray-100 hover:bg-blue-100'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold">{scenarios[currentScenario].explanation}</p>
            {currentScenario < scenarios.length - 1 ? (
              <button
                onClick={nextScenario}
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                Next Scenario
              </button>
            ) : (
              <button
                onClick={resetScenarios}
                className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
              >
                Start Over
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};