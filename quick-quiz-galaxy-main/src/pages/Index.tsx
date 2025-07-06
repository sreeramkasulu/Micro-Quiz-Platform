
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calculator, FlaskConical, Code2, Trophy, Users, Clock } from "lucide-react";

const categories = [
  {
    id: "history",
    name: "History",
    description: "Test your knowledge of world history and historical events",
    icon: BookOpen,
    color: "from-purple-500 to-pink-500",
    quizCount: 5,
    totalQuestions: 25
  },
  {
    id: "science",
    name: "Science", 
    description: "Explore physics, chemistry, biology and general science",
    icon: FlaskConical,
    color: "from-blue-500 to-cyan-500",
    quizCount: 4,
    totalQuestions: 20
  },
  {
    id: "math",
    name: "Mathematics",
    description: "Challenge yourself with mathematical problems and concepts",
    icon: Calculator,
    color: "from-green-500 to-teal-500",
    quizCount: 6,
    totalQuestions: 30
  },
  {
    id: "programming",
    name: "Programming",
    description: "Test your coding knowledge and programming concepts",
    icon: Code2,
    color: "from-orange-500 to-red-500",
    quizCount: 7,
    totalQuestions: 35
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  QuizGalaxy
                </h1>
                <p className="text-sm text-muted-foreground">Micro-Quiz Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="flex items-center space-x-1">
                <Users className="w-3 h-3" />
                <span>1000+ Players</span>
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Test Your Knowledge
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Challenge yourself with our collection of engaging quizzes across multiple categories. 
            Learn, compete, and track your progress!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge className="flex items-center space-x-1 bg-purple-100 text-purple-700 hover:bg-purple-200">
              <Clock className="w-3 h-3" />
              <span>Quick 5-min quizzes</span>
            </Badge>
            <Badge className="flex items-center space-x-1 bg-blue-100 text-blue-700 hover:bg-blue-200">
              <Trophy className="w-3 h-3" />
              <span>Instant feedback</span>
            </Badge>
            <Badge className="flex items-center space-x-1 bg-green-100 text-green-700 hover:bg-green-200">
              <Users className="w-3 h-3" />
              <span>Multiple categories</span>
            </Badge>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Choose Your Challenge</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link key={category.id} to={`/category/${category.id}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 bg-white/60 backdrop-blur-sm">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                        {category.name}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{category.quizCount} Quizzes</span>
                        <span>{category.totalQuestions} Questions</span>
                      </div>
                      <Button className={`w-full bg-gradient-to-r ${category.color} hover:opacity-90 text-white border-0`}>
                        Start Quiz
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600 mt-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="space-y-2">
              <h4 className="text-4xl font-bold">1000+</h4>
              <p className="text-purple-100">Active Players</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-4xl font-bold">110+</h4>
              <p className="text-purple-100">Total Questions</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-4xl font-bold">22+</h4>
              <p className="text-purple-100">Available Quizzes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white/80 backdrop-blur-sm border-t mt-16">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              QuizGalaxy
            </span>
          </div>
          <p className="text-muted-foreground">
            © 2024 QuizGalaxy. Challenge yourself, learn something new.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
