
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, BookOpen, Trophy, Users } from "lucide-react";
import { getQuizzesByCategory } from "@/data/quizData";
import { useEffect, useState } from "react";

const QuizCategory = () => {
  const { category } = useParams<{ category: string }>();
  const [quizzes, setQuizzes] = useState<any[]>([]);

  useEffect(() => {
    if (category) {
      const categoryQuizzes = getQuizzesByCategory(category);
      setQuizzes(categoryQuizzes);
    }
  }, [category]);

  const getCategoryInfo = (cat: string) => {
    const categoryMap: { [key: string]: any } = {
      history: {
        name: "History",
        description: "Journey through time and test your historical knowledge",
        color: "from-purple-500 to-pink-500",
        bgColor: "from-purple-50 to-pink-50"
      },
      science: {
        name: "Science",
        description: "Explore the wonders of physics, chemistry, and biology",
        color: "from-blue-500 to-cyan-500",
        bgColor: "from-blue-50 to-cyan-50"
      },
      math: {
        name: "Mathematics",
        description: "Challenge your mathematical thinking and problem-solving skills",
        color: "from-green-500 to-teal-500",
        bgColor: "from-green-50 to-teal-50"
      },
      programming: {
        name: "Programming",
        description: "Test your coding knowledge and development skills",
        color: "from-orange-500 to-red-500",
        bgColor: "from-orange-50 to-red-50"
      }
    };
    return categoryMap[cat] || categoryMap.history;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (!category) {
    return <div>Category not found</div>;
  }

  const categoryInfo = getCategoryInfo(category);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${categoryInfo.bgColor}`}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${categoryInfo.color} rounded-xl flex items-center justify-center`}>
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">QuizGalaxy</h1>
                  <p className="text-sm text-muted-foreground">{categoryInfo.name} Quizzes</p>
                </div>
              </div>
            </Link>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Users className="w-3 h-3" />
              <span>{quizzes.length} Quizzes</span>
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className={`text-5xl font-bold mb-6 bg-gradient-to-r ${categoryInfo.color} bg-clip-text text-transparent`}>
            {categoryInfo.name} Quizzes
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {categoryInfo.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge className={`flex items-center space-x-1 bg-gradient-to-r ${categoryInfo.color} text-white`}>
              <BookOpen className="w-3 h-3" />
              <span>{quizzes.length} Available Quizzes</span>
            </Badge>
            <Badge className="flex items-center space-x-1 bg-white text-gray-700 hover:bg-gray-50">
              <Clock className="w-3 h-3" />
              <span>5-15 minutes each</span>
            </Badge>
          </div>
        </div>
      </section>

      {/* Quizzes Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz) => (
              <Card key={quiz.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/60 backdrop-blur-sm border-0">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getDifficultyColor(quiz.difficulty)}>
                      {quiz.difficulty.toUpperCase()}
                    </Badge>
                    <Badge variant="outline" className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{quiz.timeLimit || 10}m</span>
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                    {quiz.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {quiz.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <BookOpen className="w-3 h-3" />
                      <span>{quiz.questions.length} Questions</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Trophy className="w-3 h-3" />
                      <span>Score tracking</span>
                    </span>
                  </div>
                  <Link to={`/quiz/${quiz.id}`}>
                    <Button className={`w-full bg-gradient-to-r ${categoryInfo.color} hover:opacity-90 text-white border-0 group-hover:scale-105 transition-transform duration-200`}>
                      Start Quiz
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Link to="/">
            <Button variant="outline" className="flex items-center space-x-2 mx-auto">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Categories</span>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default QuizCategory;
