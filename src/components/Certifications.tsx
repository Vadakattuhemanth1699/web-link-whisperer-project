import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Your Certification Name",
      issuer: "Certification Authority",
      date: "Month Year - Expiry",
      description: "Replace with your certification details and what skills/knowledge it demonstrates.",
      credentialUrl: "#",
      skills: ["Skill 1", "Skill 2", "Skill 3"]
    },
    {
      title: "Another Certification",
      issuer: "Another Authority",
      date: "Month Year",
      description: "Add more certifications here, or remove this section if you only have one.",
      credentialUrl: "#",
      skills: ["Skill A", "Skill B", "Skill C"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border border-border/50 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <h4 className="text-lg text-muted-foreground font-medium">
                      {cert.issuer}
                    </h4>
                  </div>
                </div>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{cert.date}</span>
                </div>
                
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-foreground mb-3">Key Skills:</h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                  onClick={() => window.open(cert.credentialUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Credential
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;