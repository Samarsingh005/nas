import React, { useState } from 'react';

const questions = [
  {
    question: "What is the supreme law of India?",
    options: ["Constitution", "Parliament", "Supreme Court", "President"],
    correct: 0
  },
  {
    question: "Which article of the Indian Constitution abolishes untouchability?",
    options: ["Article 15", "Article 17", "Article 21", "Article 14"],
    correct: 1
  },
  {
    question: "What is the minimum age to become President of India?",
    options: ["25 years", "30 years", "35 years", "40 years"],
    correct: 2
  },
  {
    question: "Right to Education is guaranteed under which Article?",
    options: ["Article 21A", "Article 19", "Article 20", "Article 22"],
    correct: 0
  },
  {
    question: "Which is the highest civil court in a district?",
    options: ["High Court", "Supreme Court", "District Court", "Session Court"],
    correct: 2
  }
];

interface AnswerRecord {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

export const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const handleAnswer = (selectedOption: number) => {
    const isCorrect = selectedOption === questions[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnswers([...answers, {
      question: questions[currentQuestion].question,
      userAnswer: questions[currentQuestion].options[selectedOption],
      correctAnswer: questions[currentQuestion].options[questions[currentQuestion].correct],
      isCorrect
    }]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setAnswers([]);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      {showScore ? (
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
            <div className="relative w-48 h-48 mx-auto mb-6">
              <svg className="transform -rotate-90 w-48 h-48">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="#eee"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="#4F46E5"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 88}
                  strokeDashoffset={2 * Math.PI * 88 * (1 - score / questions.length)}
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold">
                  {Math.round((score / questions.length) * 100)}%
                </span>
              </div>
            </div>
            <p className="text-xl mb-4">
              You scored <span className="font-bold text-indigo-600">{score}</span> out of{" "}
              <span className="font-bold">{questions.length}</span>
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Detailed Results:</h3>
            {answers.map((answer, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg ${
                  answer.isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                }`}
              >
                <p className="font-medium mb-2">{index + 1}. {answer.question}</p>
                <p className={`${answer.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  Your answer: {answer.userAnswer}
                </p>
                {!answer.isCorrect && (
                  <p className="text-green-600">
                    Correct answer: {answer.correctAnswer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={resetQuiz}
            className="mt-8 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 font-semibold"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">
              Question {currentQuestion + 1}/{questions.length}
            </h2>
            <div className="text-sm text-gray-500">
              Score: {score}/{currentQuestion}
            </div>
          </div>
          
          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <p className="text-lg mb-6">{questions[currentQuestion].question}</p>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-4 text-left rounded-lg bg-gray-50 hover:bg-indigo-50 border-2 border-gray-200 hover:border-indigo-300 transition-all duration-200"
              >
                <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};