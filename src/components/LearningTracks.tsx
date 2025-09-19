import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const learningTracks = [
  {
    title: "Mathematics",
    description: "Precalculus, linear algebra, and problem-solving, simplified and visualized.",
    icon: "📊",
    gradient: "from-blue-500 to-purple-600",
    route: "/math"
  },
  {
    title: "Computer Science",
    description: "Learn Python, algorithms, data structures, and system design.",
    icon: "💻",
    gradient: "from-green-500 to-blue-600",
    route: "/computer-science"
  },
  {
    title: "Finance & Investing",
    description: "Understand money, markets, and smart financial decisions.",
    icon: "💰",
    gradient: "from-yellow-500 to-orange-600",
    route: "/finance"
  },
  {
    title: "Data Science",
    description: "Analyze data, build models, and extract insights using Python & tools.",
    icon: "📈",
    gradient: "from-orange-500 to-red-600",
    route: "/data-science"
  }
];

const LearningTracks = () => {
  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Learning Tracks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our carefully crafted learning paths designed by industry experts. 
            Each track combines theory with practical application for maximum impact.
          </p>
        </div>

        {/* Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {learningTracks.map((track, index) => (
            <Card
              key={track.title}
              className={`hover-lift bg-gradient-card border-0 shadow-card animate-scale-in ${
                index === 3 ? "lg:col-start-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{track.icon}</div>
                <CardTitle className="text-xl mb-2">{track.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {track.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                {/* Wrap button in Link properly */}
                <Link to={track.route} className="block w-full">
                  <Button
                    variant="default"
                    className="w-full bg-gradient-primary hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                  >
                    Start Learning
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Courses */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 h-auto"
          >
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearningTracks;
