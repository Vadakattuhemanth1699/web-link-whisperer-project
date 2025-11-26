import { Briefcase, MapPin, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-10 md:p-16">
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
            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-green-50 transition-colors duration-300">
              <Briefcase className="h-6 w-6 flex-shrink-0 text-secondary"/>
              <span className="text-foreground/80">5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-green-50 transition-colors duration-300">
              <MapPin className="h-6 w-6 flex-shrink-0 text-secondary" />
              <span className="text-foreground/80">Plano, Texas, USA</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-green-50 transition-colors duration-300">
              <GraduationCap className="h-6 w-6 flex-shrink-0 text-secondary" />
              <span className="text-foreground/80">Master's in Information Systems & Technology</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
