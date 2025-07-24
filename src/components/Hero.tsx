import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Hemanth Kumar V
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 font-medium italic" style={{ color: '#7bb3e0' }}>
              Full Stack DotNet Developer
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              I am a passionate Full Stack DotNet Developer with expertise in building robust web applications.
              My journey in technology has been driven by a love for problem-solving and a desire to create impactful solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="hover:shadow-elegant transition-all duration-300 border-2" style={{ borderColor: '#7bb3e0', color: '#7bb3e0' }}>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href="#"
              className="p-3 rounded-full bg-card transition-all duration-300 hover:scale-110 shadow-elegant"
              style={{ backgroundColor: '#f8fafc', ':hover': { backgroundColor: '#7bb3e0' } }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#7bb3e0'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#f8fafc'}
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" style={{ color: '#7bb3e0' }} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-card transition-all duration-300 hover:scale-110 shadow-elegant"
              style={{ backgroundColor: '#f8fafc' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#7bb3e0'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#f8fafc'}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" style={{ color: '#7bb3e0' }} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-card transition-all duration-300 hover:scale-110 shadow-elegant"
              style={{ backgroundColor: '#f8fafc' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#7bb3e0'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#f8fafc'}
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" style={{ color: '#7bb3e0' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;