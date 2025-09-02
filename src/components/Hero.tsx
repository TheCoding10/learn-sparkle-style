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
          
        </div>
      </div>
    </section>
  );
};

export default Hero;