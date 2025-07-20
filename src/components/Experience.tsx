import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Your Job Title",
      company: "Company Name",
      location: "City, Country",
      period: "Start Date - End Date (or Present)",
      description: "Replace with your job description. Describe your key responsibilities, achievements, and impact. Use specific examples and metrics when possible.",
      technologies: ["Technology 1", "Technology 2", "Technology 3", "Technology 4"],
      achievements: [
        "Achievement or project you're proud of",
        "Another significant contribution",
        "Quantifiable result or improvement"
      ]
    },
    {
      title: "Previous Job Title",
      company: "Previous Company",
      location: "City, Country",
      period: "Start Date - End Date",
      description: "Add another work experience, internship, or significant project. Remove this if you only have one position to showcase.",
      technologies: ["Tech A", "Tech B", "Tech C"],
      achievements: [
        "Key achievement from this role",
        "Another important contribution"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border border-border/50"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <Briefcase className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <h4 className="text-xl text-primary font-semibold mb-2">
                          {exp.company}
                        </h4>
                        <div className="flex items-center text-muted-foreground mb-4">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm mr-4">{exp.location}</span>
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-foreground/80">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;