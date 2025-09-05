const Footer = () => {
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">MemoLearning</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering learners worldwide with innovative educational technology and 
              expert-crafted content. Join thousands who've transformed their careers.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <span className="text-primary">📧</span>
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <span className="text-primary">🐦</span>
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <span className="text-primary">💼</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Mathematics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Computer Science</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Finance & Investing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Data Science</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 MemoLearning
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;