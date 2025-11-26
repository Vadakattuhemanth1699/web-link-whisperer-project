import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden" aria-label="Hero section">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" aria-hidden="true"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-primary">
              Hemanth Kumar V
            </h1>
            <h2
              className="text-2xl md:text-3xl mb-8 font-medium italic tracking-tight text-secondary"
            >
              Full Stack DotNet Developer
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Full Stack .NET developer with 5+ years of experience architecting and delivering enterprise-grade web applications. I specialize in crafting scalable solutions using C#, ASP.NET, Angular, and cloud technologies—transforming complex challenges into elegant, high-performance systems that drive real business impact.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Button size="lg" className="transition-all duration-300 rounded-full px-8 font-semibold shadow-lg hover:shadow-xl hover:scale-105 text-white bg-gradient-primary">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:shadow-elegant transition-all duration-300 border-2 rounded-full px-8 font-semibold shadow-md hover:shadow-lg hover:scale-105 border-secondary text-secondary bg-gradient-subtle"
              onClick={() => window.open("/resume/Hemanth_Kumar_Resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div
            className="flex justify-center space-x-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
            role="list"
          >
            <a
              href="https://github.com/Vadakattuhemanth1699"
              className="p-3 rounded-full transition-all duration-300 hover:scale-125 shadow-md hover:shadow-lg bg-card group hover:bg-gradient-primary"
              aria-label="Visit GitHub profile"
              role="listitem"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github className="h-6 w-6 text-primary group-hover:text-white" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/hemanth-kumar-89821a31a/"
              className="p-3 rounded-full transition-all duration-300 hover:scale-125 shadow-md hover:shadow-lg bg-card group hover:bg-gradient-primary"
              aria-label="Visit LinkedIn profile"
              role="listitem"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Linkedin className="h-6 w-6 text-primary group-hover:text-white" aria-hidden="true" />
            </a>
            <a
              href="mailto:hemanth.kumar8357@gmail.com"
              className="p-3 rounded-full transition-all duration-300 hover:scale-125 shadow-md hover:shadow-lg bg-card group hover:bg-gradient-primary"
              aria-label="Send email"
              role="listitem"
            >
              <Mail className="h-6 w-6 text-primary group-hover:text-white" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
