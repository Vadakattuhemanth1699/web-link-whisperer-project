import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Master's",
      school: "University of North Texas",
      period: "2022 - 2023",
      description: "Master's in Information Systems and Technology",
      gpa: "3.6"
    },
    {
      degree: "Bachelor's",
      school: "KL University",
      period: "2017 - 2021",
      description: "Bachelor's in Computer Science and Engineering",
      gpa: "3.0 GPA"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {educationData.map((education, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border border-border/50"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {education.degree}
                        </h3>
                        <h4 className="text-xl font-medium italic" style={{ color: '#7bb3e0' }}>
                          {education.school}
                        </h4>
                      </div>
                      <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
                        <div className="flex items-center mb-2" style={{ color: '#7bb3e0' }}>
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{education.period}</span>
                        </div>
                        {education.gpa && (
                          <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {education.gpa}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-foreground/80 leading-relaxed">
                      {education.description}
                    </p>
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

export default Education;