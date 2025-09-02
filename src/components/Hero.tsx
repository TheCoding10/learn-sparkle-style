import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Learn Smarter.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Achieve More.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your learning journey with our interactive platform. Master new skills through 
            engaging courses, personalized practice, and proven methodologies designed for success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto hover-glow">
              Start Learning Free
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
              Explore Courses
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="animate-slide-up">
              <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-muted-foreground">Active Learners</div>
            </div>
            <div className="animate-slide-up" style={{animationDelay: "0.2s"}}>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Expert Courses</div>
            </div>
            <div className="animate-slide-up" style={{animationDelay: "0.4s"}}>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;