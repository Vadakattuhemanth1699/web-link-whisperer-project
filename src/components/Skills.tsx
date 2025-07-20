import { Code, Database, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        "JavaScript/TypeScript",
        "Python",
        "Java", 
        "C++",
        "Go",
        "Add your languages"
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: [
        "React",
        "Node.js",
        "Express",
        "Next.js",
        "Django",
        "Add your frameworks"
      ]
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "MySQL",
        "Firebase",
        "Add your databases"
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Terraform",
        "Add your tools"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Replace this section with your actual technical skills. Organize them by category 
              and include the technologies you're most comfortable with.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 border border-border/50 group hover:-translate-y-1"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-colors"
                      >
                        <span className="text-foreground/80 font-medium">{skill}</span>
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
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
                "Open Source",
                "Machine Learning",
                "Add your soft skills",
                "Add your interests"
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-full font-medium hover:shadow-glow transition-all duration-300 cursor-default"
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