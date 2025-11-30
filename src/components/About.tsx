import { Briefcase, MapPin, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.12);

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`max-w-5xl mx-auto bg-card rounded-2xl shadow-lg transition-smooth will-change-transform p-10 md:p-16 ${isVisible ? 'animate-scaleIn opacity-100' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-primary">About Me</h2>

          <div className="space-y-6 text-foreground/75 text-base md:text-lg leading-relaxed tracking-wide">
            <p>
              I'm a passionate Full Stack .NET Developer with over 5 years of experience building high-impact applications for enterprise environments. From modernizing legacy systems to creating scalable cloud-native solutions, I specialize in delivering robust software that actually works—and lasts.
            </p>
            <p>
              At Quadax, I led the migration of monolithic apps to Angular + .NET Core microservices, improving performance by 45% and reducing technical debt significantly. My work supports 50,000+ users with 99.9% uptime.
            </p>
            <p>
              I thrive in Agile teams and bring strong collaboration, mentorship, and stakeholder communication skills. Whether I’m optimizing CI/CD pipelines, architecting secure APIs, or writing clean C#, I’m always looking to push the envelope.
            </p>
          </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div className="flex items-center gap-4 p-4 rounded-xl transition-smooth will-change-transform hover:-translate-y-2 hover:shadow-glow-primary bg-card">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-primary transition-smooth transform-gpu hover:scale-105">
                  <Briefcase className="h-5 w-5 text-white drop-shadow-md"/>
                </div>
                <div>
                  <div className="text-sm font-semibold text-secondary">5+ Years</div>
                  <div className="text-xs text-foreground/70">Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl transition-smooth will-change-transform hover:-translate-y-2 hover:shadow-glow-primary bg-card">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-primary transition-smooth transform-gpu hover:scale-105">
                  <MapPin className="h-5 w-5 text-white drop-shadow-md" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-secondary">Plano, Texas</div>
                  <div className="text-xs text-foreground/70">United States</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl transition-smooth will-change-transform hover:-translate-y-2 hover:shadow-glow-primary bg-card">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-primary transition-smooth transform-gpu hover:scale-105">
                  <GraduationCap className="h-5 w-5 text-white drop-shadow-md" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-secondary">Master's</div>
                  <div className="text-xs text-foreground/70">Information Systems & Technology</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
