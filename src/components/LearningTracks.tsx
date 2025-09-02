import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const learningTracks = [
  {
    title: "Applied Mathematics",
    description: "Master precalculus, linear algebra, and problem-solving with clear visualizations and step-by-step guidance.",
    icon: "📊",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "Computer Science",
    description: "Learn Python, algorithms, data structures, and system design through hands-on projects and real-world applications.",
    icon: "💻",
    gradient: "from-green-500 to-blue-600"
  },
  {
    title: "Data Science",
    description: "Analyze data, build predictive models, and extract actionable insights using Python, R, and cutting-edge tools.",
    icon: "📈",
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "Machine Learning",
    description: "Understand neural networks, AI logic, and ML algorithms through interactive exercises and practical projects.",
    icon: "🤖",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Finance & Investing",
    description: "Master financial markets, investment strategies, and smart money management with real-world case studies.",
    icon: "💰",
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    title: "Digital Marketing",
    description: "Build powerful marketing campaigns, understand SEO, social media, and analytics to grow your business.",
    icon: "📱",
    gradient: "from-pink-500 to-purple-600"
  }
];

const LearningTracks = () => {
  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Learning Tracks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our carefully crafted learning paths designed by industry experts. 
            Each track combines theory with practical application for maximum impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {learningTracks.map((track, index) => (
            <Card 
              key={track.title} 
              className="hover-lift bg-gradient-card border-0 shadow-card animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{track.icon}</div>
                <CardTitle className="text-xl mb-2">{track.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {track.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  variant="default" 
                  className="w-full bg-gradient-primary hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearningTracks;