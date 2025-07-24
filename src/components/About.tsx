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
          
          <div className="space-y-6 text-center mx-auto max-w-3xl">
            <p className="text-lg text-foreground/80 leading-relaxed">
            I'm a results-driven Full Stack .NET Developer with 5+ years of experience delivering enterprise-grade applications that serve 50,000+ users with 99.9% uptime. I specialize in modernizing legacy systems and have successfully led migrations from VB.NET Web Forms to Angular/.NET Core architectures, achieving 60% reduction in technical debt and 45% performance improvements. My expertise spans the complete Microsoft stack—C#, .NET Core 6, ASP.NET MVC, Angular 14, React—combined with cloud-native solutions on Azure and AWS.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
            What sets me apart is my proven track record of architecting scalable solutions that directly impact business outcomes. At Quadax, I optimized application performance to support 10,000+ concurrent users while reducing page load times by 35% through Docker containerization and Kubernetes orchestration. I've built robust CI/CD pipelines with Jenkins and Azure DevOps that cut deployment times by 40%, and my RESTful APIs and microservices architectures have consistently delivered maintainable, secure applications following SOLID principles and Clean Architecture patterns.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
            I thrive in collaborative Agile environments where I can leverage my technical leadership skills and cross-functional experience. Whether I'm conducting sprint ceremonies, mentoring team members, or working directly with stakeholders to translate business requirements into technical solutions, I bring both deep technical expertise and strong communication skills. I'm passionate about staying current with emerging technologies and am actively seeking opportunities to contribute to innovative teams building next-generation applications.
            </p>
            </div>
            
            {/* 
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
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Languages</span>
                  <span className="font-medium">English, Telugu, Hindi</span>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;