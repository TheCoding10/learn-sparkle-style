const features = [
  {
    title: "Interactive Learning",
    description: "Engage with hands-on exercises, quizzes, and real-world projects that make learning stick.",
    icon: "🎯"
  },
  {
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of practical experience and proven track records.",
    icon: "👨‍🏫"
  },
  {
    title: "Flexible Schedule",
    description: "Study at your own pace with 24/7 access to course materials and lifetime updates.",
    icon: "⏰"
  },
  {
    title: "Community Support",
    description: "Join a vibrant community of learners, get help from peers, and share your progress.",
    icon: "🤝"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose LearnSmart?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform is designed with your success in mind. We combine cutting-edge technology 
            with proven pedagogical methods to deliver results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center p-6 rounded-lg bg-card shadow-card hover-lift animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;