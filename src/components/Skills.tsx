import { Code, Database, Cloud, Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: Code,
      skills: [
        " Angular 14",
        " React",
        " TypeScript",
        " JavaScript",
        " HTML5",
        " CSS3",
        " Bootstrap 4",
        " jQuery"
      ]
    },
    {
      title: "Backend Technologies",
      icon: Wrench,
      skills: [
        "C#",
        ".NET Core 6",
        "ASP.NET MVC",
        "ASP.NET Framework",
        "VB.NET",
        "Blazor",
        "Python",
      ]
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: [
        "SQL Server",
        "T-SQL",
        "ADO.NET",
        "LINQ",
        "Entity Framework", "SSIS"
      ]
    },
    {
      title: "API Development",
      icon: Cloud,
      skills: [
        "RESTful Web API",
        "SOAP",
        "JWT Authentication",
        "Swagger",
        "Postman",
        "WCF"
      ]
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: [
        "Microsoft Azure",
        "AWS EC2",
        "AWS S3",
        "AWS Lambda",
        "AWS RDS",
        "Azure Functions"
      ]
    },
    {
      title: "DevOps & Deployment",
      icon: Cloud,
      skills: [
        "Docker",
        "Kubernetes",
        "Git",
        "Azure DevOps",
        "CI/CD",
        "Jenkins"
      ]
    },
    {
      title: "Testing Frameworks",
      icon: Cloud,
      skills: [
        "xUnit",
        "NUnit",
        "MS Test",
        "Jasmine",
        "Karma",
        "Protractor"
      ]
    },
    {
      title: "Development Tools",
      icon: Cloud,
      skills: [
        "Visual Studio 2022",
        "VS Code",
        "SSRS",
        "SignalR",
        "Crystal Reports"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Technical Skills
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-primary"></div>

            {/* ✅ Updated paragraph with new color and italic */}
            <p className="text-lg mt-6 max-w-2xl mx-auto italic text-secondary">
              Proficient in diverse programming languages, frameworks, databases, and cloud technologies, enabling the development of robust, scalable applications optimized for cross-platform performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 border border-border/50 group hover:-translate-y-1 hover:border-green-200"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 hover:scale-110 bg-gradient-primary">
                      <IconComponent className="h-6 w-6 text-secondary drop-shadow-lg" />
                    </div>
                    <h3 className="text-lg font-bold text-secondary group-hover: transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-green-50 transition-colors"
                      >
                        <span className="text-foreground/80 font-medium">{skill}</span>
                        <div className="w-2 h-2 rounded-full bg-black"></div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 bg-card rounded-2xl p-8 shadow-elegant border border-border/50">
            <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
              Additional Skills & Interests
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Problem Solving",
                "Team Leadership",
                "Agile/Scrum",
                "Technical Writing",
                "System Architecture",
                "Code Review",
                "Mentoring",
                "Cross-functional Collaboration",
                "Cloud Computing",
                "DevOps Practices",
                "Continuous Learning",
                "Technology Innovation"
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full font-medium transition-all duration-300 cursor-default text-white hover:shadow-lg hover:scale-105 bg-gradient-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
