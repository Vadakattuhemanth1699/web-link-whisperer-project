const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                <strong>I'm a Full Stack .NET Developer with over 5 years of experience transforming complex business requirements into scalable, enterprise-grade solutions. I've led the modernization of legacy systems serving 50,000+ users, achieving 99.9% uptime while working in fast-paced Agile environments. My expertise spans the complete Microsoft ecosystem—from C# and .NET Core to Angular and React frontends—and I'm passionate about architecting clean, maintainable code that follows SOLID principles. Whether it's building RESTful APIs, implementing CI/CD pipelines, or deploying cloud-native applications on Azure and AWS, I deliver solutions that drive real business value and exceed performance expectations.</strong>
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Talk about your technical interests, any specializations you have, and your approach 
                to problem-solving. Mention your educational background and any significant achievements 
                that shaped your career.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Share your vision for the future, what types of projects excite you, and how you 
                contribute to teams and the broader tech community.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium">Plano, Texas</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium">5+ Years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Education</span>
                  <span className="font-medium">Master's in Information Systems and Technology</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Interests</span>
                  <span className="font-medium">I was always eager to learn and adapt new technologies.</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Languages</span>
                  <span className="font-medium">English, Telugu, Hindi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;