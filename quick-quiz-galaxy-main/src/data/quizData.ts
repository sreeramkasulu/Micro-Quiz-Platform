
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  questions: Question[];
  timeLimit?: number; // in minutes
}

export const quizData: Quiz[] = [
  // History Quizzes
  {
    id: "history-ancient",
    title: "Ancient Civilizations",
    description: "Test your knowledge of ancient civilizations and their achievements",
    category: "history",
    difficulty: "medium",
    timeLimit: 10,
    questions: [
      {
        id: 1,
        question: "Which ancient wonder of the world was located in Alexandria?",
        options: ["Colossus of Rhodes", "Lighthouse of Alexandria", "Hanging Gardens", "Temple of Artemis"],
        correctAnswer: 1,
        explanation: "The Lighthouse of Alexandria was one of the Seven Wonders of the Ancient World."
      },
      {
        id: 2,
        question: "The ancient city of Carthage was located in present-day:",
        options: ["Libya", "Tunisia", "Algeria", "Morocco"],
        correctAnswer: 1,
        explanation: "Carthage was located in present-day Tunisia, North Africa."
      },
      {
        id: 3,
        question: "Which emperor built the Colosseum in Rome?",
        options: ["Julius Caesar", "Augustus", "Vespasian", "Nero"],
        correctAnswer: 2,
        explanation: "Emperor Vespasian began construction of the Colosseum around 70-72 AD."
      },
      {
        id: 4,
        question: "The Rosetta Stone helped decipher which ancient writing system?",
        options: ["Cuneiform", "Hieroglyphics", "Linear B", "Sanskrit"],
        correctAnswer: 1,
        explanation: "The Rosetta Stone was key to understanding Egyptian hieroglyphics."
      },
      {
        id: 5,
        question: "Which ancient Greek philosopher taught Alexander the Great?",
        options: ["Socrates", "Plato", "Aristotle", "Pythagoras"],
        correctAnswer: 2,
        explanation: "Aristotle was the tutor of Alexander the Great from 343 to 336 BC."
      }
    ]
  },
  {
    id: "history-world-wars",
    title: "World Wars",
    description: "Questions about the major conflicts of the 20th century",
    category: "history",
    difficulty: "hard",
    timeLimit: 12,
    questions: [
      {
        id: 1,
        question: "What event triggered the start of World War I?",
        options: ["Sinking of Lusitania", "Assassination of Archduke Franz Ferdinand", "German invasion of Belgium", "Russian Revolution"],
        correctAnswer: 1,
        explanation: "The assassination of Archduke Franz Ferdinand in Sarajevo triggered WWI."
      },
      {
        id: 2,
        question: "The D-Day invasion took place on which beach?",
        options: ["Omaha Beach", "Utah Beach", "Gold Beach", "All of the above"],
        correctAnswer: 3,
        explanation: "D-Day involved landings on multiple beaches including Omaha, Utah, Gold, Juno, and Sword."
      },
      {
        id: 3,
        question: "In which year did World War II end?",
        options: ["1944", "1945", "1946", "1947"],
        correctAnswer: 1,
        explanation: "World War II ended in 1945 with Japan's surrender in September."
      },
      {
        id: 4,
        question: "The Treaty of Versailles ended which war?",
        options: ["World War I", "World War II", "Franco-Prussian War", "Napoleonic Wars"],
        correctAnswer: 0,
        explanation: "The Treaty of Versailles was signed in 1919, ending World War I."
      },
      {
        id: 5,
        question: "Which battle is considered the turning point of World War II in the Pacific?",
        options: ["Pearl Harbor", "Battle of Midway", "Battle of Guadalcanal", "Battle of Iwo Jima"],
        correctAnswer: 1,
        explanation: "The Battle of Midway (1942) marked the turning point in the Pacific Theater."
      }
    ]
  },

  // Science Quizzes
  {
    id: "science-physics",
    title: "Physics Fundamentals",
    description: "Basic concepts in physics and natural phenomena",
    category: "science",
    difficulty: "medium",
    timeLimit: 8,
    questions: [
      {
        id: 1,
        question: "What is the speed of light in a vacuum?",
        options: ["299,792,458 m/s", "300,000,000 m/s", "299,792,458 km/s", "186,000 miles/s"],
        correctAnswer: 0,
        explanation: "The exact speed of light in vacuum is 299,792,458 meters per second."
      },
      {
        id: 2,
        question: "Which law states that energy cannot be created or destroyed?",
        options: ["Newton's First Law", "Law of Conservation of Energy", "Second Law of Thermodynamics", "Ohm's Law"],
        correctAnswer: 1,
        explanation: "The Law of Conservation of Energy states energy can only be transformed, not created or destroyed."
      },
      {
        id: 3,
        question: "What particle has no electric charge?",
        options: ["Proton", "Electron", "Neutron", "Ion"],
        correctAnswer: 2,
        explanation: "Neutrons are electrically neutral particles found in atomic nuclei."
      },
      {
        id: 4,
        question: "Einstein's mass-energy equivalence is expressed as:",
        options: ["E = mc", "E = mc²", "E = m²c", "E = 2mc"],
        correctAnswer: 1,
        explanation: "E=mc² shows the equivalence of mass and energy."
      },
      {
        id: 5,
        question: "What type of wave is sound?",
        options: ["Electromagnetic", "Longitudinal", "Transverse", "Surface"],
        correctAnswer: 1,
        explanation: "Sound waves are longitudinal waves that travel through compression and rarefaction."
      }
    ]
  },

  // Math Quizzes
  {
    id: "math-algebra",
    title: "Algebra Basics",
    description: "Fundamental algebraic concepts and problem solving",
    category: "math",
    difficulty: "easy",
    timeLimit: 15,
    questions: [
      {
        id: 1,
        question: "What is the value of x in the equation 2x + 5 = 15?",
        options: ["5", "10", "7.5", "2.5"],
        correctAnswer: 0,
        explanation: "Solving: 2x + 5 = 15, so 2x = 10, therefore x = 5."
      },
      {
        id: 2,
        question: "Which of the following is a quadratic equation?",
        options: ["y = 2x + 3", "y = x² + 2x + 1", "y = 1/x", "y = 2^x"],
        correctAnswer: 1,
        explanation: "A quadratic equation has the form ax² + bx + c = 0."
      },
      {
        id: 3,
        question: "What is the slope of the line y = 3x - 2?",
        options: ["3", "-2", "1", "5"],
        correctAnswer: 0,
        explanation: "In the form y = mx + b, the coefficient of x is the slope."
      },
      {
        id: 4,
        question: "Factor: x² - 9",
        options: ["(x-3)(x-3)", "(x+3)(x+3)", "(x-3)(x+3)", "Cannot be factored"],
        correctAnswer: 2,
        explanation: "x² - 9 is a difference of squares: (x-3)(x+3)."
      },
      {
        id: 5,
        question: "If f(x) = 2x + 1, what is f(3)?",
        options: ["6", "7", "5", "9"],
        correctAnswer: 1,
        explanation: "f(3) = 2(3) + 1 = 6 + 1 = 7."
      }
    ]
  },

  // Programming Quizzes
  {
    id: "programming-javascript",
    title: "JavaScript Fundamentals",
    description: "Core JavaScript concepts and syntax",
    category: "programming",
    difficulty: "medium",
    timeLimit: 12,
    questions: [
      {
        id: 1,
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 0,
        explanation: "The push() method adds elements to the end of an array."
      },
      {
        id: 2,
        question: "What does '===' compare in JavaScript?",
        options: ["Value only", "Type only", "Both value and type", "Reference only"],
        correctAnswer: 2,
        explanation: "The strict equality operator (===) compares both value and type."
      },
      {
        id: 3,
        question: "Which is NOT a JavaScript data type?",
        options: ["Number", "String", "Boolean", "Float"],
        correctAnswer: 3,
        explanation: "JavaScript has Number type but not a separate Float type."
      },
      {
        id: 4,
        question: "What will console.log(typeof null) output?",
        options: ["'null'", "'undefined'", "'object'", "'boolean'"],
        correctAnswer: 2,
        explanation: "This is a known JavaScript quirk - typeof null returns 'object'."
      },
      {
        id: 5,
        question: "Which creates a new array with all elements that pass a test?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        correctAnswer: 2,
        explanation: "The filter() method creates a new array with elements that pass a test function."
      }
    ]
  },

  {
    id: "programming-react",
    title: "React Concepts",
    description: "React.js library fundamentals and best practices",
    category: "programming", 
    difficulty: "hard",
    timeLimit: 10,
    questions: [
      {
        id: 1,
        question: "What is JSX?",
        options: ["A JavaScript library", "A syntax extension for JavaScript", "A CSS framework", "A database"],
        correctAnswer: 1,
        explanation: "JSX is a syntax extension that allows writing HTML-like code in JavaScript."
      },
      {
        id: 2,
        question: "Which hook is used for side effects in React?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        correctAnswer: 1,
        explanation: "useEffect is used to perform side effects in functional components."
      },
      {
        id: 3,
        question: "What is the virtual DOM?",
        options: ["A copy of the real DOM in memory", "A new HTML standard", "A CSS framework", "A JavaScript engine"],
        correctAnswer: 0,
        explanation: "The virtual DOM is a JavaScript representation of the real DOM kept in memory."
      },
      {
        id: 4,
        question: "When does a React component re-render?",
        options: ["Every second", "When props or state change", "On user click", "Never"],
        correctAnswer: 1,
        explanation: "React components re-render when their props or state change."
      },
      {
        id: 5,
        question: "What is prop drilling?",
        options: ["Creating holes in components", "Passing props through multiple levels", "Deleting props", "A debugging technique"],
        correctAnswer: 1,
        explanation: "Prop drilling is passing props through multiple component levels to reach a deeply nested component."
      }
    ]
  }
];

export const getQuizzesByCategory = (category: string): Quiz[] => {
  return quizData.filter(quiz => quiz.category === category);
};

export const getQuizById = (id: string): Quiz | undefined => {
  return quizData.find(quiz => quiz.id === id);
};

export const getAllCategories = (): string[] => {
  return [...new Set(quizData.map(quiz => quiz.category))];
};
