import { Button } from "@/components/ui/button";
import RealtimeRenderer from "./RealtimeRenderer";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden" aria-label="Hero section">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true"></div>
      {/* realtime rendering background layer (particles / lighting) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <RealtimeRenderer />
      </div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" aria-hidden="true"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in flex flex-col lg:flex-row items-start gap-8">
            {/* Left: avatar / picture + buttons (1/3 on large screens) */}
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start gap-6">
              <div className="flex justify-center lg:justify-start flex-shrink-0 lg:mr-0">
                <picture>
                  {/* Use the repo avatar PNG (current) and keep JPEG fallback if added later */}
                  <source srcSet="/avatars/hemanth_kumar_avatar.png" type="image/png" />
                  <img
                    src="/avatars/hemanth_kumar_avatar.png"
                    alt="Hemanth Kumar — avatar"
                    loading="lazy"
                    className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-elegant border border-border/30 transition-smooth hover:scale-105 will-change-transform"
                  />
                </picture>
              </div>
              <br></br>
              {/* Buttons under avatar (visible below image on mobile and stacked on desktop) */}
              <div className="w-full flex flex-col sm:flex-row lg:flex-col gap-4 mt-4 items-center lg:items-start">
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
            </div>

            {/* Right: text block (takes remaining width) */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-primary">
                Hemanth Kumar V
              </h1>
              <h2 className="text-2xl md:text-3xl mb-8 font-medium italic tracking-tight text-secondary">
                Full Stack DotNet Developer
              </h2>
              <p lang="en" className="text-lg md:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed tracking-wide text-justified hyphenate text-balance">
                I’m a Full Stack .NET Developer with experience in healthcare and banking applications. I build reliable, user-friendly software using C#, ASP.NET Core, Angular, SQL Server, and Azure. I’ve also led migration projects to modernize legacy systems into scalable, cloud-ready solutions. I focus on performance, security, clean code, and delivering solutions that make a real difference.
              </p>

              {/* Social icons (right-side) */}
              <div className="flex justify-center lg:justify-start space-x-8 animate-fade-in mt-4" style={{ animationDelay: "0.4s" }} role="list">
                <a
                  href="https://github.com/Vadakattuhemanth1699"
                  className="p-3 rounded-full transition-all duration-300 hover:scale-125 shadow-md hover:shadow-lg bg-card group hover:bg-gradient-primary animate-float"
                  aria-label="Visit GitHub profile"
                  role="listitem"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github className="h-6 w-6 text-primary group-hover:text-white animate-scaleIn" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hemanth-kumar-89821a31a/"
                  className="p-3 rounded-full transition-all duration-300 hover:scale-125 shadow-md hover:shadow-lg bg-card group hover:bg-gradient-primary animate-float"
                  aria-label="Visit LinkedIn profile"
                  role="listitem"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Linkedin className="h-6 w-6 text-primary group-hover:text-white animate-scaleIn" aria-hidden="true" />
                </a>
                <a
                  href="mailto:hemanth.kumar8357@gmail.com"
                  className="p-3 rounded-full transition-all duration-300 hover:scale-125 shadow-md hover:shadow-lg bg-card group hover:bg-gradient-primary animate-float"
                  aria-label="Send email"
                  role="listitem"
                >
                  <Mail className="h-6 w-6 text-primary group-hover:text-white animate-scaleIn" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          
          </div>
        </div>
    </section>
  );
};

export default Hero;
