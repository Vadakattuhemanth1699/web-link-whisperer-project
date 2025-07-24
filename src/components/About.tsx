import { Briefcase, MapPin, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-card rounded-xl shadow-lg p-10 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Me</h2>

          <div className="space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed">
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

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-foreground/70">
            <div className="flex items-center gap-3">
              <Briefcase className="h-5 w-5 text-primary" />
              <span>5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Plano, Texas, USA</span>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span>Master's in Information Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
